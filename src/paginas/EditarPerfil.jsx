import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Alerta from "../components/Alerta";
import PanelUserEdit from "../components/PanelUserEdit";
import Support from "../components/Support";

const EditarPerfil = () => {
  const { auth, actualizarPerfil } = useAuth();
  const [perfil, setPerfil] = useState({});
  const [alerta, setAlerta] = useState({});

  useEffect(() => {
    setPerfil(auth);
  }, [auth]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nombres, apellidos, email } = perfil;

    if ([nombres, apellidos, email].includes("")) {
      setAlerta({
        msg: "Email, Nombre/s y Apellido/s son Obligatorios",
        error: true,
      });
      return;
    }
    const resultado = await actualizarPerfil(perfil);
    setAlerta(resultado);
  };

  const { msg } = alerta;

  return (
    <>
      <main className="bg-[#1e1f22] border-t-2 border-[#333333] -mt-24 pb-8">
        <div className="md:mt-10 max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <PanelUserEdit />

          <section aria-labelledby="announcements-title">
            <div className="mt-8 rounded-lg bg-[#27282d] overflow-hidden shadow">
              <div className="p-6">
                {msg && <Alerta alerta={alerta} />}
                <form onSubmit={handleSubmit}>
                  {/* Inciso A */}
                  <div className="mb-8">
                    <label className="block text-sm bg-yellow-500 font-medium my-3 text-amber-400  "></label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 bg-[#1f1f24] border-[#333333]  text-gray-400 sm:text-sm">
                        Nombre/s
                      </span>
                      <input
                        type="text"
                        name="nombres"
                        value={perfil.nombres || ""}
                        className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md items-center sm:text-sm"
                        placeholder="Ejemplo: Booleano"
                        onChange={(e) =>
                          setPerfil({
                            ...perfil,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  {/* Inciso A */}
                  {/* Inciso A */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium my-3 text-amber-400  "></label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 bg-[#1f1f24] border-[#333333]  text-gray-400 sm:text-sm">
                        Apellido/s
                      </span>
                      <input
                        type="text"
                        name="apellidos"
                        value={perfil.apellidos || ""}
                        className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md items-center sm:text-sm"
                        placeholder="Ejemplo: Booleano"
                        onChange={(e) =>
                          setPerfil({
                            ...perfil,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  {/* Inciso A */}
                  {/* Inciso A */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium my-3 text-amber-400  "></label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 bg-[#1f1f24] border-[#333333]  text-gray-400 sm:text-sm">
                        Cargo Laboral
                      </span>
                      <input
                        type="text"
                        name="puesto"
                        value={perfil.puesto || ""}
                        className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md items-center sm:text-sm"
                        placeholder="Ejemplo: Booleano"
                        onChange={(e) =>
                          setPerfil({
                            ...perfil,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  {/* Inciso A */}

                  {/* Inciso A */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium my-3 text-amber-400  "></label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 bg-[#1f1f24] border-[#333333]  text-gray-400 sm:text-sm">
                        Coreo Electronico
                      </span>
                      <input
                        type="text"
                        name="email"
                        value={perfil.email || ""}
                        className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md items-center sm:text-sm"
                        placeholder="Ejemplo: Booleano"
                        onChange={(e) =>
                          setPerfil({
                            ...perfil,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  {/* Inciso A */}
                  <div className="mt-5 flex justify-center sm:mt-0">
                    <input
                      type="submit"
                      value="Guardar Cambios"
                      className="flex justify-center items-center px-8 py-2 border border-[#1f2023] shadow-sm text-sm font-medium rounded-md text-[#f9f9f9] bg-[#1f2023] hover:bg-[#3e3f47]"
                    />
                  </div>
                </form>
              </div>
            </div>
          </section>
          <Support />
        </div>
      </main>
    </>
  );
};

export default EditarPerfil;
