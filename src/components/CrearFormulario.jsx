import { useEffect, useState } from "react";

import useEvaluaciones from "../hooks/useEvaluaciones";
import useAuth from "../hooks/useAuth";
import Alerta from "./Alerta";

const CrearFormulario = () => {
  const [datos, setDatos] = useState({
    descripcion: "",
    nombreEvaluacion: "",
    tipoEvaluacion: "",
    pregunta01: "",
    respuesta01A: "",
    respuesta01B: "",
    respuesta01C: "",
    respuesta01D: "",
    pregunta02: "",
    respuesta02A: "",
    respuesta02B: "",
    respuesta02C: "",
    respuesta02D: "",
    pregunta03: "",
    respuesta03A: "",
    respuesta03B: "",
    respuesta03C: "",
    respuesta03D: "",
    pregunta04: "",
    respuesta04A: "",
    respuesta04B: "",
    respuesta04C: "",
    respuesta04D: "",
    pregunta05: "",
    respuesta05A: "",
    respuesta05B: "",
    respuesta05C: "",
    respuesta05D: "",
    pregunta06: "",
    pregunta07: "",
    pregunta08: "",
    pregunta09: "",
    pregunta10: "",
  });

  const [tipoEvaluacion, setTipoEvaluacion] = useState("");
  const opcionMultiple = [
    ///////////////////Pregunta 01 ///////////////////////
    {
      label: "PREGUNTA 01",
      htmlFor: "pregunta01",
      id: "pregunta01",
      placeholder: "Ingresa la pregunta",
      ////////Respuesta A///////
      labelA: "respuesta A)",
      htmlForA: "respuesta01A",
      idA: "respuesta01A",
      placeholderA: "Ingresa la respuesta del inciso A)",
      ///////Respuesta B ///////////
      labelB: "RESPUESTA B)",
      htmlForB: "respuesta01B",
      idB: "respuesta01B",
      placeholderB: "Ingresa la respuesta del inciso B)",
      ///////Respuesta C///////////
      labelC: "RESPUESTA C)",
      htmlForC: "respuesta01C",
      idC: "respuesta01C",
      placeholderC: "Ingresa la respuesta del inciso C)",
      ///////Respuesta D/////////
      labelD: "RESPUESTA D)",
      htmlForD: "respuesta01D",
      idD: "respuesta01D",
      placeholderD: "Ingresa la respuesta del inciso D)",
    },
    ///////////////////Pregunta 02 ///////////////////////
    {
      label: "PREGUNTA 02",
      htmlFor: "pregunta02",
      id: "pregunta02",
      placeholder: "Ingresa la pregunta",
      ////////Respuesta A///////
      labelA: "RESPUESTA A)",
      htmlForA: "respuesta02A",
      idA: "respuesta02A",
      placeholderA: "Ingresa la respuesta del inciso A)",
      ///////Respuesta B ///////////
      labelB: "RESPUESTA B)",
      htmlForB: "respuesta02B",
      idB: "respuesta02B",
      placeholderB: "Ingresa la respuesta del inciso B)",
      ///////Respuesta C///////////
      labelC: "RESPUESTA C)",
      htmlForC: "respuesta02C",
      idC: "respuesta02C",
      placeholderC: "Ingresa la respuesta del inciso C)",
      ///////Respuesta D/////////
      labelD: "RESPUESTA D)",
      htmlForD: "respuesta02D",
      idD: "respuesta02D",
      placeholderD: "Ingresa la respuesta del inciso D)",
    },
    ///////////////////Pregunta 03 ///////////////////////
    {
      label: "PREGUNTA 03",
      htmlFor: "pregunta03",
      id: "pregunta03",
      placeholder: "Ingresa la pregunta",
      ////////Respuesta A///////
      labelA: "RESPUESTA A)",
      htmlForA: "respuesta03A",
      idA: "respuesta03A",
      placeholderA: "Ingresa la respuesta del inciso A)",
      ///////Respuesta B ///////////
      labelB: "RESPUESTA B)",
      htmlForB: "respuesta03B",
      idB: "respuesta03B",
      placeholderB: "Ingresa la respuesta del inciso B)",
      ///////Respuesta C///////////
      labelC: "RESPUESTA C)",
      htmlForC: "respuesta03C",
      idC: "respuesta03C",
      placeholderC: "Ingresa la respuesta del inciso C)",
      ///////Respuesta D/////////
      labelD: "RESPUESTA D)",
      htmlForD: "respuesta03D",
      idD: "respuesta03D",
      placeholderD: "Ingresa la respuesta del inciso D)",
    },
    ///////////////////Pregunta 04 ///////////////////////
    {
      label: "PREGUNTA 04",
      htmlFor: "pregunta04",
      id: "pregunta04",
      placeholder: "Ingresa la pregunta",
      ////////Respuesta A///////
      labelA: "RESPUESTA A)",
      htmlForA: "respuesta04A",
      idA: "respuesta04A",
      placeholderA: "Ingresa la respuesta del inciso A)",
      ///////Respuesta B ///////////
      labelB: "RESPUESTA B)",
      htmlForB: "respuesta04B",
      idB: "respuesta04B",
      placeholderB: "Ingresa la respuesta del inciso B)",
      ///////Respuesta C///////////
      labelC: "RESPUESTA C)",
      htmlForC: "respuesta04C",
      idC: "respuesta04C",
      placeholderC: "Ingresa la respuesta del inciso C)",
      ///////Respuesta D/////////
      labelD: "RESPUESTA D)",
      htmlForD: "respuesta04D",
      idD: "respuesta04D",
      placeholderD: "Ingresa la respuesta del inciso D)",
    },
    ///////////////////Pregunta 05 ///////////////////////
    {
      label: "PREGUNTA 05",
      htmlFor: "pregunta05",
      id: "pregunta05",
      placeholder: "Ingresa la pregunta",
      ////////Respuesta A///////
      labelA: "RESPUESTA A)",
      htmlForA: "respuesta05A",
      idA: "respuesta05A",
      placeholderA: "Ingresa la respuesta del inciso A)",
      ///////Respuesta B ///////////
      labelB: "RESPUESTA B)",
      htmlForB: "respuesta05B",
      idB: "respuesta05B",
      placeholderB: "Ingresa la respuesta del inciso B)",
      ///////Respuesta C///////////
      labelC: "RESPUESTA 05 C)",
      htmlForC: "respuesta05C",
      idC: "respuesta05C",
      placeholderC: "Ingresa la respuesta del inciso C)",
      ///////Respuesta D/////////
      labelD: "RESPUESTA 05 D)",
      htmlForD: "respuesta05D",
      idD: "respuesta05D",
      placeholderD: "Ingresa la respuesta del inciso D)",
    },
  ];

  const preguntasAbiertas = [
    //////////////Pregunta06///////////////////////
    {
      label: "PREGUNTA 06",
      htmlFor: "pregunta06",
      id: "pregunta06",
      placeholder: "Ingresa la pregunta",
    },
    //////////////Pregunta07///////////////////////
    {
      label: "PREGUNTA 07",
      htmlFor: "pregunta07",
      id: "pregunta07",
      placeholder: "Ingresa la pregunta",
    },
    //////////////Pregunta08///////////////////////
    {
      label: "PREGUNTA 08",
      htmlFor: "pregunta08",
      id: "pregunta08",
      placeholder: "Ingresa la pregunta",
    },
    //////////////Pregunta09///////////////////////
    {
      label: "PREGUNTA 09",
      htmlFor: "pregunta09",
      id: "pregunta09",
      placeholder: "Ingresa la pregunta",
    },
    //////////////Pregunta10///////////////////////
    {
      label: "PREGUNTA 10",
      htmlFor: "pregunta10",
      id: "pregunta10",
      placeholder: "Ingresa la pregunta",
    },
  ];
  const [alerta, setAlerta] = useState({});

  const { guardarEvaluacion, cliente } = useEvaluaciones();

  const handleSubmit = async (e) => {
    e.preventDefault();
    datos.tipoEvaluacion = tipoEvaluacion;
    //* Validar el formulario
    if (
      [
        datos.descripcion,
        datos.tipoEvaluacion,
        datos.nombreEvaluacion,
        datos.pregunta01,
        datos.respuesta01A,
        datos.respuesta01B,
        datos.respuesta01C,
        datos.respuesta01D,
        datos.pregunta02,
        datos.respuesta02A,
        datos.respuesta02B,
        datos.respuesta02C,
        datos.respuesta02D,
        datos.pregunta03,
        datos.respuesta03A,
        datos.respuesta03B,
        datos.respuesta03C,
        datos.respuesta03D,
        datos.pregunta04,
        datos.respuesta04A,
        datos.respuesta04B,
        datos.respuesta04C,
        datos.respuesta04D,
        datos.pregunta05,
        datos.respuesta05A,
        datos.respuesta05B,
        datos.respuesta05C,
        datos.respuesta05D,
        datos.pregunta06,
        datos.pregunta07,
        datos.pregunta08,
        datos.pregunta09,
        datos.pregunta10,
      ].includes("")
    ) {
      setAlerta({
        msg: "Oops! Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    guardarEvaluacion(datos);
    setAlerta({
      msg: "Guardado Correctamente",
    });
    console.log(datos);

    setTipoEvaluacion("");
    document.getElementById("myform").reset();
  };

  const { msg } = alerta;

  /* Datos de usuario logueado */
  const { auth } = useAuth();
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    setPerfil(auth);
  }, [auth]);

  return (
    <>
      {/* TITULO */}
      <section aria-labelledby="announcements-title">
        <div className="rounded-lg bg-[#27282d] overflow-hidden shadow">
          <div className="p-6">
            <h2
              className="text-base font-medium text-[#cfcfcf]"
              id="announcements-title"
            >
              Administrador de Evaluaciones
            </h2>
            <div className="flow-root mt-6">
              <ul role="list" className="-my-5 divide-y divide-[#3d3d3d]">
                <li className="py-5">
                  <div className="relative focus-within:ring-2 focus-within:ring-amber-400">
                    <h3 className="text-sm font-semibold text-amber-400">
                      <span className="text-sm font-semibold text-[#cfcfcf]">
                        Bienvenido{" "}
                      </span>
                      {perfil.nombres}{" "}
                      <span className="text-sm font-semibold text-[#cfcfcf]">
                        al widget de creación de evaluaciones
                      </span>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                      En este apartado puedes generar evaluaciones
                      dinamicamente, para crear un formulario nuevo, solo
                      requieres llenar las preguntas con sus respectivas
                      respuestas y el sistema automaticamente te generara un
                      link para compartir la evaluación.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* TITULO */}

      <section aria-labelledby="announcements-title">
        <div className="rounded-lg bg-[#27282d] overflow-hidden shadow">
          <div className="p-6">
            <h2
              className="text-base font-medium text-[#cfcfcf]"
              id="announcements-title"
            >
              Añade Evaluaciones y Administralas
            </h2>
            <div className="border-t-2 border-[#333333] my-3"></div>
            <form id="myform" onSubmit={handleSubmit}>
              {/* Tipo Evaluacion */}
              <div>
                <label
                  htmlFor="company-website"
                  className="block text-sm font-medium my-3 text-[#cfcfcf]"
                >
                  Tipo de la Evaluación
                </label>
                <div className="mt-1 flex rounded-md shadow-sm ">
                  <select
                    type="text"
                    id="tipoEvaluacion"
                    name="tipoEvaluacion"
                    onChange={(e) => setTipoEvaluacion(e.target.value)}
                    className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 lex-1 min-w-0 block w-full px-3 py-2 rounded  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bo"
                    placeholder="Ejemplo: ¿Cuál de estos tipos de datos es mutable?"
                  >
                    <option value="">Selecciona una opcion</option>
                    <option value="Evaluacion Diagnostica">Diagnostica</option>
                    <option value="Evaluacion Final">Final</option>
                  </select>
                </div>
              </div>
              {/* Tipo Evaluacion */}
              {/* Nombre */}
              <div>
                <label
                  htmlFor="company-website"
                  className="block text-sm font-medium my-3 text-[#cfcfcf]"
                >
                  Nombre de la Evaluación
                </label>
                <div className="mt-1 flex rounded-md shadow-sm ">
                  <input
                    id="nombreEvaluacion"
                    type="text"
                    name="nombreEvaluacion"
                    onChange={(e) =>
                      setDatos({ ...datos, [e.target.name]: e.target.value })
                    }
                    className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded sm:text-sm "
                    placeholder="Ejemplo: SASISOPA"
                  />
                </div>
              </div>
              {/* Nombre */}
              {/* Descripcion */}
              <div>
                <label
                  htmlFor="company-website"
                  className="block text-sm font-medium my-3 text-[#cfcfcf]"
                >
                  Descripción de la Evaluación
                </label>
                <div className="mt-1 flex rounded-md shadow-sm ">
                  <input
                    id="descripcion"
                    type="text"
                    name="descripcion"
                    onChange={(e) =>
                      setDatos({ ...datos, [e.target.name]: e.target.value })
                    }
                    className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded sm:text-sm "
                    placeholder="Ejemplo: La minería de datos o exploración..."
                  />
                </div>
              </div>
              {/* Descripcion */}

              {/* Preguntas con inciso*/}
              {opcionMultiple.map((dato) => (
                <div>
                  <div key={dato.label}>
                    <label
                      htmlFor={dato.htmlFor}
                      className="block text-sm font-medium my-3 text-amber-400"
                    >
                      {dato.label}
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 bg-[#1f1f24] border-[#333333]  text-gray-400 sm:text-sm">
                        {dato.label}
                      </span>
                      <input
                        id={dato.id}
                        type="text"
                        name={dato.id}
                        className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded sm:text-sm "
                        placeholder="Ejemplo: ¿Cuál de estos tipos de datos es mutable?"
                        onChange={(e) =>
                          setDatos({
                            ...datos,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  {/* Preguntas con inciso */}
                  {/* Inciso A */}
                  <div>
                    <label
                      htmlFor={dato.htmlForA}
                      className="block text-sm font-medium my-3 text-amber-400  "
                    ></label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 bg-[#1f1f24] border-[#333333]  text-gray-400 sm:text-sm">
                        Inciso A
                      </span>
                      <input
                        id={dato.idA}
                        type="text"
                        name={dato.idA}
                        className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded sm:text-sm "
                        placeholder="Ejemplo: Booleano"
                        onChange={(e) =>
                          setDatos({
                            ...datos,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  {/* Inciso A */}
                  {/* Inciso B */}
                  <div>
                    <label
                      htmlFor={dato.htmlForB}
                      className="block text-sm font-medium my-3 text-amber-400  "
                    ></label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 bg-[#1f1f24] border-[#333333]  text-gray-400 sm:text-sm">
                        Inciso B
                      </span>
                      <input
                        id={dato.idB}
                        type="text"
                        name={dato.idB}
                        className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded sm:text-sm "
                        placeholder="Ejemplo: Decimal"
                        onChange={(e) =>
                          setDatos({
                            ...datos,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  {/* Inciso B */}
                  {/* Inciso C */}
                  <div>
                    <label
                      htmlFor={dato.htmlForC}
                      className="block text-sm font-medium my-3 text-amber-400  "
                    ></label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 bg-[#1f1f24] border-[#333333]  text-gray-400 sm:text-sm">
                        Inciso C
                      </span>
                      <input
                        id={dato.idC}
                        type="text"
                        name={dato.idC}
                        className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded sm:text-sm "
                        placeholder="Ejemplo: Número en coma flotante"
                        onChange={(e) =>
                          setDatos({
                            ...datos,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  {/* Inciso C */}
                  {/* Inciso D */}
                  <div>
                    <label
                      htmlFor={dato.htmlForD}
                      className="block text-sm font-medium my-3 text-amber-400  "
                    ></label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 bg-[#1f1f24] border-[#333333]  text-gray-400 sm:text-sm">
                        Inciso D
                      </span>
                      <input
                        id={dato.idD}
                        type="text"
                        name={dato.idD}
                        className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded sm:text-sm "
                        placeholder="Ejemplo: Ninguna de las anteriores"
                        onChange={(e) =>
                          setDatos({
                            ...datos,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* Inciso D */}
              {/* Preguntas con inciso */}
              {/* Preguntas abierta*/}
              {preguntasAbiertas.map((dato) => (
                <div key={dato.label}>
                  <label
                    htmlFor={dato.htmlFor}
                    className="block text-sm font-medium my-3 text-amber-400 "
                  >
                    {dato.label}
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm ">
                    <input
                      id={dato.id}
                      type="text"
                      name={dato.id}
                      className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded sm:text-sm "
                      placeholder="Ejemplo: ¿Cuál de estos tipos de datos es mutable?"
                      onChange={(e) =>
                        setDatos({ ...datos, [e.target.name]: e.target.value })
                      }
                    />
                  </div>
                </div>
              ))}
              {/* Preguntas abierta */}
              <input
                value="Crear Evaluación"
                type="submit"
                className="mt-6 w-full flex justify-center items-center px-4 py-2 border border-[#1f2023] shadow-sm text-sm font-medium rounded-md text-white bg-[#1f2023] hover:bg-[#323336]"
              />
            </form>
            <div className="py-5">{msg && <Alerta alerta={alerta} />}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CrearFormulario;
