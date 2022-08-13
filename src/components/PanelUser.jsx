import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const user = {
  imageUrl: "https://imgur.com/XFSgqN4.png",
};

const stats = [
  { label: "Encuestas creadas", value: 12 },
  { label: "Constancias creadas", value: 4 },
  { label: "Encuestas calificadas", value: 2 },
];

const PanelUser = () => {
  const { auth } = useAuth();
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    setPerfil(auth);
  }, [auth]);

  console.log(perfil);

  return (
    <section aria-labelledby="profile-overview-title">
      <div className="rounded-lg bg-[#27282d] overflow-hidden shadow">
        <h2 className="sr-only" id="profile-overview-title">
          Profile Overview
        </h2>
        <div className="bg-[#27282d] p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:space-x-5">
              <div className="flex-shrink-0">
                <img
                  className="mx-auto h-20 w-20 rounded-full"
                  src={user.imageUrl}
                  alt=""
                />
              </div>
              <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                <p className="text-sm font-medium text-[#bebebe]">
                  Bienvenido de nuevo,
                </p>
                <p className="text-xl font-bold text-[#ffffff] sm:text-2xl">
                  {perfil.nombres} {perfil.apellidos}
                </p>
                <p className="text-sm font-medium text-[#ffd415]">
                  {perfil.puesto}{" "}
                  <span className="text-sm font-bold text-[#bebebe]"> - </span>
                  <span className="text-sm font-medium text-[#bebebe]">
                    {perfil.email}
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-5 flex justify-center sm:mt-0">
              <Link
                className="flex justify-center items-center px-4 py-2 border border-[#1f2023] shadow-sm text-sm font-medium rounded-md text-[#f9f9f9] bg-[#1f2023] hover:bg-[#3e3f47]"
                to="/admin/configuracion"
              >
                Edita perfil
              </Link>
            </div>
          </div>
        </div>
        {/* Divisor y Bordes */}
        <div className="border-t border-[#3d3d3d] bg-[#27282d] grid grid-cols-1 divide-y divide-[#3d3d3d] sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-6 py-5 text-sm font-medium text-center"
            >
              <span className="text-[#bebebe]">{stat.value}</span>{" "}
              <span className="text-[#bebebe]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PanelUser;
