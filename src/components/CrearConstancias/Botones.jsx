import { Link } from "react-router-dom";

/* This example requires Tailwind CSS v2.0+ */
const stats = [
  { name: "Generador de", stat: "Constancias DC-3" },
  { name: "Generador de", stat: "Constancias IKTAN Training" },
];

export default function Botones() {
  return (
    <div>
      <dl className=" grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="mt-5 px-4 py-5 bg-[#27282d] shadow rounded-lg overflow-hidden sm:p-6">
          <dt className="text-sm font-medium text-[#bebebe] truncate">
            Generador de
          </dt>
          <dd className="mt-1 text-3xl tracking-tight font-semibold text-white">
            Constancias DC-3
          </dd>
          <button
            type="button"
            className="mt-3 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#f9f9f9] bg-[#1f2023] hover:bg-[#3e3f47] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            Crear Constancia
          </button>
        </div>
        <div className="md:mt-5 px-4 py-5 bg-[#e7e7e7] shadow rounded-lg overflow-hidden sm:p-6">
          <dt className="text-sm font-medium text-[#777777] truncate">
            Generador de
          </dt>
          <dd className="mt-1 text-3xl tracking-tight font-semibold text-gray-8''">
            Constancias IKTAN Training
          </dd>
          <Link
            type="button"
            className="mt-3 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#f9f9f9] bg-[#1f2023] hover:bg-[#313238] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            to="/admin/constancias-iktan"
          >
            Crear Constancia
          </Link>
        </div>
      </dl>
    </div>
  );
}
