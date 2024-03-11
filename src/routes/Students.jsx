/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ItemStudent from "../components/LinkRoot";
import TableNote from "../components/TableNote";

const Students = () => {
  const [doc, setDoc] = useState("");
  const [st, setSt] = useState("");
  const [nombre, setNombre] = useState();
  const [document, setDocument] = useState("");
  const [val, setVal] = useState(false);
  const [exams, setExams] = useState([]);

  const [procedimental, setProcedimental] = useState([]);
  const [actitudinal, setActitudinal] = useState([]);
  const [conceptual, setConceptual] = useState([]);

  const [procedimentalNotas, setProcedimentalNotas] = useState([]);
  const [actitudinalNotas, setActitudinalNotas] = useState([]);
  const [conceptualNotas, setConceptualNotas] = useState([]);

  let { sectionNumber } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const handleAxios = async () => {
      try {
        const r = await axios(`http://localhost:4000/student/${sectionNumber}`);
        setData(r.data[0].students);
        const e = await axios(`http://localhost:4000/student/0`);
        console.log(e);
        setExams(e.data[0].students);
      } catch (error) {
        console.log(error);
      }
    };
    handleAxios();
  }, [sectionNumber]);

  const search = (e) => {
    e.preventDefault();
    if (doc.length > 0) {
      setSt(data.filter((i) => i[0] === doc));
      setExams(exams);
      setDocument(doc);
    } else {
      console.log("pero si no hay nada");
    }
    setDoc("");
  };
  useEffect(() => {
    if (st) {
      setNombre(st[0][1]);
    }
  }, [st]);
  useEffect(() => {
    if (exams.length > 0) {
      setConceptual(exams.slice(3, 16));
      setProcedimental(exams.slice(16, 29));
      setActitudinal(exams.slice(29, 45));
      if (st.length == 1) {
        setConceptualNotas(st[0].slice(3, 15));
        setProcedimentalNotas(st[0].slice(16, 28));
        setActitudinalNotas(st[0].slice(29, 44));
      }
    }
  }, [exams, st]);

  return (
    <div className="bg-slate-800 layout text-slate-300 p-2 md:p-10">
      <nav className="flex flex-col gap-10 xl:flex-row w-full justify-around items-center">
        <div className="flex gap-10 items-center">
          <Link to="/" className=" h-max p-3">
            <svg
              className="-rotate-90 text-slate-200 hover:text-slate-400 duration-150"
              fill="currentColor"
              height="60px"
              width="60px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 330.002 330.002"
            >
              <path
                id="XMLID_105_"
                d="M324.001,209.25L173.997,96.75c-5.334-4-12.667-4-18,0L6.001,209.25c-6.627,4.971-7.971,14.373-3,21
	c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001L164.998,127.5l141.003,105.75c6.629,4.972,16.03,3.627,21-3
	C331.972,223.623,330.628,214.221,324.001,209.25z"
              />
            </svg>
          </Link>

          <div className="flex flex-col md:flex-row gap-10 border-2 text-slate-800 bg-slate-200 p-5 border-slate-500">
            <h1 className="font-bold text-3xl text-center">
              10°-{sectionNumber}
            </h1>
            <div className="flex  gap-2 items-center">
              <div>Nombre:</div>
              <div className="font-semibold text-sm">{nombre}</div>
            </div>
            <div className="flex  gap-2 items-center">
              <div>Documento:</div>
              <div className="font-semibold">{document}</div>
            </div>
          </div>
        </div>

        <form className="flex">
          <input
            type="number"
            pattern="^[0-9]+"
            min="1"
            value={doc}
            className="outline-none text-slate-800 h-full rounded-l p-8"
            onChange={(e) => setDoc(e.target.value)}
            placeholder="Documento"
          />

          <button
            onClick={search}
            className="bg-slate-600 p-5 w-1/3 rounded-r outline-none hover:bg-slate-500  active:bg-slate-400"
          >
            Buscar
          </button>
        </form>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:justify-around">
        {st ? (
          <>
            <TableNote
              array={conceptual}
              note={conceptualNotas}
              tile={"Conceptual"}
            />
            <TableNote
              array={procedimental}
              note={procedimentalNotas}
              tile={"Procedimental"}
            />
            <TableNote
              array={actitudinal}
              note={procedimentalNotas}
              tile={"Actitudinal"}
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Students;
