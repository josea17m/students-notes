/* eslint-disable react/prop-types */
const TableNote = ({ array, note, tile }) => {
  return (
    <div>
      <h3 className="text-center font-semibold mt-10 mb-3 text-2xl text-slate-200">
        {tile}
      </h3>
      <div className="flex border-2 border-slate-500">
        <div className="flex flex-col w-9/12  border-r-2 border-slate-500">
          {array.map((e) => (
            <div
              key={e.index}
              className="p-3 border-b-[1px] flex justify-start items-center h-16 bg-slate-200 text-slate-800 border-slate-500"
            >
              {e}
            </div>
          ))}
        </div>
        <div className="flex flex-col  w-3/12">
          {note.map((e) => (
            <div
              key={e.index}
              className={`text-slate-800 flex justify-center items-center h-16 p-3 border-b-[1px] border-slate-500 ${
                e < 3
                  ? "bg-red-400"
                  : e > 3.99
                  ? "bg-green-400"
                  : "bg-yellow-400"
              }`}
            >
              {note.length}
            </div>
          ))}
        </div>
      </div>
      {/* <table
        className="border-slate-500 border-[3px] w-full bg-slate-900
                 text-slate-300 "
      >
        {array.map((e) => (
          <tr key={e.index}>
            <td className="text-left p-3 bg-slate-200 text-slate-800">{e}</td>
            <td
              className={`text-slate-800 p-3 w-max ${
                note < 3
                  ? "bg-red-400"
                  : note > 3.99
                  ? "bg-green-400"
                  : "bg-yellow-400"
              }`}
            >
              {note}
            </td>
          </tr>
        ))}
        <tr>
          <td className="text-left p-3 bg-slate-200 text-slate-800 font-semibold">
            Promedio
          </td>
          <td
            className={`text-slate-800 font-bold p-3 w-max ${
              note < 3
                ? "bg-red-400"
                : note > 3.99
                ? "bg-green-400"
                : "bg-yellow-400"
            }`}
          >
            {note}
          </td>
        </tr>
      </table> */}
    </div>
  );
};

export default TableNote;
