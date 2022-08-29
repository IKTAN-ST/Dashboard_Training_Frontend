import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const SectionTitle = () => {
  /* Datos de usuario logueado */
  const { auth } = useAuth();
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    setPerfil(auth);
  }, [auth]);

  return (
    <section aria-labelledby="announcements-title">
      <div className="rounded-lg bg-[#27282d] overflow-hidden shadow">
        <div className="p-6">
          <h2
            className="text-base font-medium text-[#cfcfcf]"
            id="announcements-title"
          >
            Administrador de Constancias
          </h2>
          <div className="flow-root mt-6">
            <ul role="list" className="-my-5 divide-y divide-[#3d3d3d]">
              <li className="py-5">
                <div className="relative focus-within:ring-2 focus-within:ring-amber-400">
                  <h3 className="text-sm font-semibold text-amber-400">
                    <span className="text-sm font-semibold text-[#cfcfcf]">
                      Bienvenido{" "}
                    </span>
                    {perfil.nombres} {perfil.apellidos}{" "}
                    <span className="text-sm font-semibold text-[#cfcfcf]">
                      al widget de creación de constancias
                    </span>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                    En este apartado puedes generar constancias de IKTAN y DC-3
                    ingresando los datos correspondientes. Segun lo necesites,
                    puedes actualizar datos, eliminar y consultar la vista
                    previa de las constancias creadas.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTitle;
