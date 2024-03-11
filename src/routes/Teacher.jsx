/* eslint-disable no-unused-vars */
import Papa from "papaparse";
import moment from "moment";
import { useEffect, useState } from "react";

const Teacher = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [notes1, setNotes1] = useState([]);
  const [notes2, setNotes2] = useState([]);
  const [notes3, setNotes3] = useState([]);
  const [notes4, setNotes4] = useState([]);
  const [notes5, setNotes5] = useState([]);

  const [reportNotes1, setReportNotes1] = useState(false);
  const [reportNotes2, setReportNotes2] = useState(true);
  const [reportNotes3, setReportNotes3] = useState(false);
  const [reportNotes4, setReportNotes4] = useState(false);
  const [reportNotes5, setReportNotes5] = useState(false);

  const [dateNotes1, setDateNotes1] = useState(
    localStorage.getItem("dateNotes1")
      ? JSON.parse(localStorage.getItem("dateNotes1"))
      : []
  );
  const [dateNotes2, setDateNotes2] = useState(
    localStorage.getItem("dateNotes2")
      ? JSON.parse(localStorage.getItem("dateNotes2"))
      : []
  );
  const [dateNotes3, setDateNotes3] = useState(
    localStorage.getItem("dateNotes3")
      ? JSON.parse(localStorage.getItem("dateNotes3"))
      : []
  );
  const [dateNotes4, setDateNotes4] = useState(
    localStorage.getItem("dateNotes4")
      ? JSON.parse(localStorage.getItem("dateNotes4"))
      : []
  );
  const [dateNotes5, setDateNotes5] = useState(
    localStorage.getItem("dateNotes5")
      ? JSON.parse(localStorage.getItem("dateNotes5"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("dateNotes1", JSON.stringify(dateNotes1));
    localStorage.setItem("dateNotes2", JSON.stringify(dateNotes2));
    localStorage.setItem("dateNotes3", JSON.stringify(dateNotes3));
    localStorage.setItem("dateNotes4", JSON.stringify(dateNotes4));
    localStorage.setItem("dateNotes5", JSON.stringify(dateNotes5));
  }, [dateNotes1, dateNotes2, dateNotes3, dateNotes4, dateNotes5]);

  useEffect(() => {
    setPreguntas(notes1[1]);
  }, [notes1]);

  const [fileName1, setFileName1] = useState("");
  const [fileName2, setFileName2] = useState("");
  const [fileName3, setFileName3] = useState("");
  const [fileName4, setFileName4] = useState("");
  const [fileName5, setFileName5] = useState("");

  const [modal, setModal] = useState(false);

  var now = moment().format("DD/MM/YYYY");

  const handleUpload = () => {
    postingNotes("0", preguntas);
    if (notes1.length > 0) {
      postingNotes(
        "1",
        notes1.filter((n) => n[1].length > 14)
      );
      setNotes1([]);
      setFileName1([]);
      setReportNotes1(true);
      setDateNotes1(now);
    }
    if (notes2.length > 0) {
      postingNotes(
        "2",
        notes2.filter((n) => n[1].length > 14)
      );
      setNotes2([]);
      setFileName2([]);
      setReportNotes2(true);
      setDateNotes2(now);
    }
    if (notes3.length > 0) {
      postingNotes(
        "3",
        notes3.filter((n) => n[1].length > 14)
      );
      setNotes3([]);
      setFileName3([]);
      setReportNotes3(true);
      setDateNotes3(now);
    }
    if (notes4.length > 0) {
      postingNotes(
        "4",
        notes4.filter((n) => n[1].length > 14)
      );
      setNotes4([]);
      setFileName4([]);
      setReportNotes4(true);
      setDateNotes4(now);
    }
    if (notes5.length > 0) {
      postingNotes(
        "5",
        notes5.filter((n) => n[1].length > 14)
      );
      setNotes5([]);
      setFileName5([]);
      setReportNotes5(true);
      setDateNotes5(now);
    }
    setModal(true);
  };

  const postingNotes = (s, jn) => {
    fetch("http://localhost:4000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        section: s,
        students: jn,
      }),
    }).then((response) => response.json());
  };

  const handleModal = () => {
    setModal(false);
    setReportNotes1(false);
    setReportNotes2(false);
    setReportNotes3(false);
    setReportNotes4(false);
    setReportNotes5(false);
  };

  return (
    <div className="layout flex justify-center items-center background-image">
      <div className="w-8/12 h-[75dvh] items-center shadow-2xl bg-slate-800 rounded-lg gap-10 flex flex-col">
        <div className="bg-teal-400 w-full rounded-t-lg text-center text-slate-800 py-5">
          Actualizar Notas
        </div>
        <div className="flex justify-around items-center h-11/12 w-full">
          <div className="w-2/5 h-full">
            <div className="flex flex-col py-9 items-center rounded-lg border-2 border-slate-500 gap-8">
              <div className="flex items-center w-3/4">
                <input
                  type="file"
                  id="file-1"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files) {
                      setFileName1(files[0].name);
                      Papa.parse(files[0], {
                        complete: function (results) {
                          setNotes1(results.data);
                        },
                      });
                    }
                  }}
                  className="inputfile inputfile-1"
                />
                <label
                  className={`${
                    notes1.length > 0
                      ? "bg-teal-400 text-slate-800"
                      : "text-gray-500 bg-slate-900 border-2 border-slate-500"
                  } p-5 w-full`}
                  htmlFor="file-1"
                >
                  <svg
                    xmlns="http:www.w3.org/2000/svg"
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                  >
                    <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                  </svg>
                  <span>{fileName1.length > 0 ? fileName1 : "Sección 1"}</span>
                </label>
              </div>

              <div className="flex items-center w-3/4">
                <input
                  type="file"
                  id="file-2"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files) {
                      setFileName2(files[0].name);
                      Papa.parse(files[0], {
                        complete: function (results) {
                          setNotes2(results.data);
                        },
                      });
                    }
                  }}
                  className={`${
                    notes1.length > 0 ? "bg-teal-400" : ""
                  } inputfile inputfile-1`}
                />
                <label
                  className={`${
                    notes2.length > 0
                      ? "bg-teal-400 text-slate-800"
                      : "text-gray-500 bg-slate-900 border-2 border-slate-500"
                  } p-5 w-full`}
                  htmlFor="file-2"
                >
                  <svg
                    xmlns="http:www.w3.org/2000/svg"
                    className="iborrainputfile"
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                  >
                    <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                  </svg>
                  <span className="iborrainputfile">
                    {fileName2.length > 0 ? fileName2 : "Sección 2"}
                  </span>
                </label>
              </div>

              <div className="flex items-center w-3/4">
                <input
                  type="file"
                  id="file-3"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files) {
                      setFileName3(files[0].name);
                      Papa.parse(files[0], {
                        complete: function (results) {
                          setNotes3(results.data);
                        },
                      });
                    }
                  }}
                  className="inputfile inputfile-1"
                />
                <label
                  className={`${
                    notes3.length > 0
                      ? "bg-teal-400 text-slate-800"
                      : "text-gray-500 bg-slate-900 border-2 border-slate-500"
                  } p-5 w-full`}
                  htmlFor="file-3"
                >
                  <svg
                    xmlns="http:www.w3.org/2000/svg"
                    className="iborrainputfile"
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                  >
                    <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                  </svg>
                  <span className="iborrainputfile">
                    {fileName3.length > 0 ? fileName3 : "Sección 3"}
                  </span>
                </label>
              </div>

              <div className="flex items-center w-3/4">
                <input
                  type="file"
                  id="file-4"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files) {
                      setFileName4(files[0].name);
                      Papa.parse(files[0], {
                        complete: function (results) {
                          setNotes4(results.data);
                        },
                      });
                    }
                  }}
                  className={`${
                    notes1.length > 0 ? "bg-teal-400" : "bg-[#000]"
                  } inputfile inputfile-1`}
                />
                <label
                  className={`${
                    notes4.length > 0
                      ? "bg-teal-400 text-slate-800"
                      : "text-gray-500 bg-slate-900 border-2 border-slate-500"
                  } p-5 w-full`}
                  htmlFor="file-4"
                >
                  <svg
                    xmlns="http:www.w3.org/2000/svg"
                    className="iborrainputfile"
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                  >
                    <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                  </svg>
                  <span className="iborrainputfile">
                    {fileName4.length > 0 ? fileName4 : "Sección 4"}
                  </span>
                </label>
              </div>

              <div className="flex items-center w-3/4">
                <input
                  type="file"
                  id="file-5"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files) {
                      setFileName5(files[0].name);
                      Papa.parse(files[0], {
                        complete: function (results) {
                          setNotes5(results.data);
                        },
                      });
                    }
                  }}
                  className={`${
                    notes1.length > 0 ? "bg-teal-400" : "bg-[#000]"
                  } inputfile inputfile-1`}
                />
                <label
                  className={`${
                    notes5.length > 0
                      ? "bg-teal-400 text-slate-800"
                      : "text-gray-500 bg-slate-900 border-2 border-slate-500"
                  } p-5 w-full`}
                  htmlFor="file-5"
                >
                  <svg
                    xmlns="http:www.w3.org/2000/svg"
                    className="iborrainputfile"
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                  >
                    <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                  </svg>
                  <span className="iborrainputfile">
                    {fileName5.length > 0 ? fileName5 : "Sección 5"}
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="w-1/4 flex flex-col justify-between gap-10 h-full">
            <div className="text-white border-slate-500 border-2 p-5 rounded-lg flex flex-col gap-5">
              <h3 className="text-center">Última acutalización:</h3>
              <div className="flex gap-10 flex-col">
                <span className="flex justify-around">
                  Sección 1: <span>{dateNotes1}</span>
                </span>
                <span className="flex justify-around">
                  Sección 2: <span>{dateNotes2}</span>
                </span>
                <span className="flex justify-around">
                  Sección 3: <span>{dateNotes3}</span>
                </span>
                <span className="flex justify-around">
                  Sección 4: <span>{dateNotes4}</span>
                </span>
                <span className="flex justify-around">
                  Sección 5: <span>{dateNotes5}</span>
                </span>
              </div>
            </div>
            <button
              className="border-slate-500 border-2 text-slate-500 rounded-lg w-full h-max py-5 hover:text-teal-400 hover:border-teal-400 hover:bg-slate-900 duration-200"
              onClick={handleUpload}
            >
              Subir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;

/* Discarded resources







useEffect(() => {
   if (notes.length > 0) {
     if (notes5.length == 0) {
       if (notes1.length == 0) {
         setNotes1(notes.filter((n) => n[1].length > 14));
         setNotes([]);
         setTimeout(() => {
           setnotes1.length > 0(false);
         }, 500);
         return;
       }
       if (notes2.length == 0) {
         setNotes2(notes.filter((n) => n[1].length > 14));
         setNotes([]);
         setTimeout(() => {
           setVNotes2(false);
         }, 500);
         return;
       }
       if (notes3.length == 0) {
         setNotes3(notes.filter((n) => n[1].length > 14));
         setNotes([]);
         setTimeout(() => {
           setVNotes3(false);
         }, 500);
         return;
       }
       if (notes4.length == 0) {
         setNotes4(notes.filter((n) => n[1].length > 14));
         setNotes([]);
         setTimeout(() => {
           setVNotes4(false);
         }, 500);
         return;
       }
       if (notes5.length == 0) {
         setNotes5(notes.filter((n) => n[1].length > 14));
         setNotes([]);
         setTimeout(() => {
           setVNotes5(false);
         }, 500);
         return;
       }
     }
   }
 }, [notes]);

<div className="p-5 gap-2 absolute top-0 left-0 flex flex-col justify-between">
        <div
          className={`${
            notes1.length > 0 ? "note-validation-item-off" : "note-validation-item-on"
          } note-validation-item`}
        >
          1
        </div>
        <div
          className={`${
            vNotes2 ? "note-validation-item-off" : "note-validation-item-on"
          } w-[3px] rounded-full h-10 mx-auto bg-slate-500`}
        ></div>
        <div
          className={`${
            vNotes2 ? "note-validation-item-off" : "note-validation-item-on"
          } note-validation-item`}
        >
          2
        </div>
        <div
          className={`${
            vNotes3 ? "note-validation-item-off" : "note-validation-item-on"
          } w-[3px] rounded-full h-10 mx-auto bg-slate-500`}
        ></div>
        <div
          className={`${
            vNotes3 ? "note-validation-item-off" : "note-validation-item-on"
          } note-validation-item`}
        >
          3
        </div>
        <div
          className={`${
            vNotes4 ? "note-validation-item-off" : "note-validation-item-on"
          } w-[3px] rounded-full h-10 mx-auto bg-slate-500`}
        ></div>
        <div
          className={`${
            vNotes4 ? "note-validation-item-off" : "note-validation-item-on"
          } note-validation-item`}
        >
          4
        </div>
        <div
          className={`${
            vNotes5 ? "note-validation-item-off" : "note-validation-item-on"
          } w-[3px] rounded-full h-10 mx-auto bg-slate-500`}
        ></div>
        <div
          className={`${
            vNotes5 ? "note-validation-item-off" : "note-validation-item-on"
          } note-validation-item`}
        >
          5
      </div>
</div> 
      
*/
