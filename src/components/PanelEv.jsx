import React, { useRef, useState } from "react";
import useEvaluaciones from "../hooks/useEvaluaciones";
import { BookOpenIcon } from "@heroicons/react/outline";

const PanelEv = ({ cliente }) => {
  const { setEdicion, eliminarEvSaluacion } = useEvaluaciones();
  const { nombreEvaluacion, tipoEvaluacion, _id, descripcion } = cliente;
  const url = import.meta.env.VITE_FRONTEND_EVALUACIONES_FORM + _id;

  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("[Copaido]");
  }

  return (
    <div>
      <div className="relative group bg-[#27282d] p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-amber-400">
        <div>
          <span className="rounded-lg inline-flex text-amber-600 bg-amber-100 p-3">
            <BookOpenIcon className=" h-6 w-6" aria-hidden="true" />
          </span>
        </div>
        <div className="mt-8">
          <h3 className="text-[#cfcfcf] text-lg font-medium">
            <a href={url} className="focus:outline-none">
              {/* Extend touch target to entire panel */}
              <span className="absolute " aria-hidden="true" />
              {nombreEvaluacion}
            </a>
          </h3>
          <p className="mt-2 text-sm text-amber-400">{tipoEvaluacion}</p>
          <p className="mt-2 text-sm text-gray-500">
            {descripcion.substr(0, 100)}
          </p>
          <div>
            <div className="mt-1 flex rounded-md shadow-sm ">
              <span className="inline-flex items-center px-3 rounded-l-md bg-[#1f1f24]  text-gray-400 sm:text-sm">
                URL
              </span>
              <input
                ref={textAreaRef}
                value={url}
                className="flex-1 bg-[#27282d] text-[#bebebe] min-w-0 block w-full px-3 py-2  text-sm rounded-none rounded-r-md "
                placeholder="Ejemplo: Booleano"
              />
            </div>
          </div>
        </div>
        <span
          className=" absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
          aria-hidden="true"
        >
          <a href={url}>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </a>
        </span>

        <div>
          {document.queryCommandSupported("copy") && (
            <div>
              <button
                type="button"
                className="my-2 w-full flex justify-center items-center py-2 border border-[#1f2023] shadow-sm text-sm font-medium rounded-md text-white bg-[#1f2023] hover:bg-[#323336]"
                onClick={copyToClipboard}
              >
                Copiar Link
                <span className="text-gray-300 font-thin ml-1">
                  {copySuccess}
                </span>
              </button>
            </div>
          )}
        </div>
        <button
          type="button"
          className="my-2 w-full flex justify-center items-center py-2 border border-[#1f2023] shadow-sm text-sm font-medium rounded-md text-white bg-[#1f2023] hover:bg-[#323336]"
          onClick={() => eliminarEvaluacion(_id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PanelEv;
