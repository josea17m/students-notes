/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import LinkRoot from "../components/LinkRoot";

const Root = () => {
  const [ruta, setRuta] = useState("");

  return (
    <div className="layout flex justify-center md:flex-row flex-col items-center bg-slate-800 gap-10 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-5 font-bold">
        <LinkRoot sectionRoute={"1"} />
        <LinkRoot sectionRoute={"2"} />
        <LinkRoot sectionRoute={"3"} />
        <LinkRoot sectionRoute={"4"} />
        <LinkRoot sectionRoute={"5"} />
      </div>

      {/* <Link
        onClick={handleS}
        className="bg-slate-300 text-slate-800 hover:bg-slate-200 text-center rounded-xl p-4 duration-300 h-max"
        to={`/student/${student}`}
      >
        <svg width="24" height="24" fillRule="evenodd" clipRule="evenodd">
          <path
            fill="currentColor"
            d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
          />
        </svg>
      </Link> */}
    </div>
  );
};

export default Root;
