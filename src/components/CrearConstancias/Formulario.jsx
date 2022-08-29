const Formulario = () => {
  return (
    <>
      <section aria-labelledby="announcements-title">
        <div className="mt-6 rounded-lg bg-[#27282d] overflow-hidden shadow">
          <div className="p-6">
            <h2
              className="text-base font-medium text-[#cfcfcf]"
              id="announcements-title"
            >
              Datos del Usuario y Curso
            </h2>
            <form id="myform" /* onSubmit={handleSubmit} */>
              <div className="border-t-2 border-[#333333] my-3">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium my-3 text-[#cfcfcf]"
                  >
                    Nombre/s
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm ">
                    <input
                      id="nombreEvaluacion"
                      type="text"
                      name="nombreEvaluacion"
                      /*   onChange={(e) =>
                      setDatos({ ...datos, [e.target.name]: e.target.value })
                    } */
                      className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded sm:text-sm "
                      placeholder="Ejemplo: SASISOPA"
                    />
                  </div>
                </div>
                {/* Nombre */}
                {/* Apellidos */}
                <div>
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium my-3 text-[#cfcfcf]"
                  >
                    Apellido/s
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm ">
                    <input
                      id="nombreEvaluacion"
                      type="text"
                      name="nombreEvaluacion"
                      /*   onChange={(e) =>
                      setDatos({ ...datos, [e.target.name]: e.target.value })
                    } */
                      className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded sm:text-sm "
                      placeholder="Ejemplo: SASISOPA"
                    />
                  </div>
                </div>
                {/* Apellidos */}
                {/* Curso */}
                <div>
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium my-3 text-[#cfcfcf]"
                  >
                    Curso
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm ">
                    <input
                      id="nombreEvaluacion"
                      type="text"
                      name="nombreEvaluacion"
                      /*   onChange={(e) =>
                      setDatos({ ...datos, [e.target.name]: e.target.value })
                    } */
                      className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded sm:text-sm "
                      placeholder="Ejemplo: SASISOPA"
                    />
                  </div>
                </div>
                {/* Curso */}
                {/* Descripcion */}
                <div>
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium my-3 text-[#cfcfcf]"
                  >
                    Descripción del Curso
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm ">
                    <input
                      id="nombreEvaluacion"
                      type="text"
                      name="nombreEvaluacion"
                      /*   onChange={(e) =>
                      setDatos({ ...datos, [e.target.name]: e.target.value })
                    } */
                      className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded sm:text-sm "
                      placeholder="Ejemplo: SASISOPA"
                    />
                  </div>
                </div>
                {/* Descripcion */}
                {/* Finalizacion */}
                <div>
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium my-3 text-[#cfcfcf]"
                  >
                    Fecha de Finalización
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm ">
                    <input
                      id="nombreEvaluacion"
                      type="text"
                      name="nombreEvaluacion"
                      /*   onChange={(e) =>
                      setDatos({ ...datos, [e.target.name]: e.target.value })
                    } */
                      className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded sm:text-sm "
                      placeholder="Ejemplo: SASISOPA"
                    />
                  </div>
                </div>
                {/* Finalizacion */}
                {/* Calificacion */}
                <div>
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium my-3 text-[#cfcfcf]"
                  >
                    Calificación
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm ">
                    <input
                      id="nombreEvaluacion"
                      type="text"
                      name="nombreEvaluacion"
                      /*   onChange={(e) =>
                      setDatos({ ...datos, [e.target.name]: e.target.value })
                    } */
                      className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded sm:text-sm "
                      placeholder="Ejemplo: SASISOPA"
                    />
                  </div>
                </div>
                {/* Calificacion */}
                {/* Calificacion */}
                <div>
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium my-3 text-[#cfcfcf]"
                  >
                    Estatus
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm ">
                    <input
                      id="nombreEvaluacion"
                      type="text"
                      name="nombreEvaluacion"
                      /*   onChange={(e) =>
                      setDatos({ ...datos, [e.target.name]: e.target.value })
                    } */
                      className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded sm:text-sm "
                      placeholder="Ejemplo: SASISOPA"
                    />
                  </div>
                </div>
                {/* Calificacion */}
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Datos del PDF */}
      <section aria-labelledby="announcements-title">
        <div className="mt-5 rounded-lg bg-[#27282d] overflow-hidden shadow">
          <div className="p-6">
            <h2
              className="text-base font-medium text-[#cfcfcf]"
              id="announcements-title"
            >
              Estructura del PDF
            </h2>
            <form id="myform" /* onSubmit={handleSubmit} */>
              <div className="border-t-2 border-[#333333] my-3">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium my-3 text-[#cfcfcf]"
                  >
                    Puesto Lado Derecho
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm ">
                    <input
                      id="nombreEvaluacion"
                      type="text"
                      name="nombreEvaluacion"
                      /*   onChange={(e) =>
                      setDatos({ ...datos, [e.target.name]: e.target.value })
                    } */
                      className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded sm:text-sm "
                      placeholder="Ejemplo: SASISOPA"
                    />
                  </div>
                </div>
                {/* Nombre */}
                {/* Apellidos */}
                <div>
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium my-3 text-[#cfcfcf]"
                  >
                    Puesto Lado Izquierdo
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm ">
                    <input
                      id="nombreEvaluacion"
                      type="text"
                      name="nombreEvaluacion"
                      /*   onChange={(e) =>
                      setDatos({ ...datos, [e.target.name]: e.target.value })
                    } */
                      className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded sm:text-sm "
                      placeholder="Ejemplo: SASISOPA"
                    />
                  </div>
                </div>
                {/* Apellidos */}
                {/* Curso */}
                <div>
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium my-3 text-[#cfcfcf]"
                  >
                    Empresa Lado Derecho
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm ">
                    <input
                      id="nombreEvaluacion"
                      type="text"
                      name="nombreEvaluacion"
                      /*   onChange={(e) =>
                      setDatos({ ...datos, [e.target.name]: e.target.value })
                    } */
                      className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded sm:text-sm "
                      placeholder="Ejemplo: SASISOPA"
                    />
                  </div>
                </div>
                {/* Curso */}
                {/* Descripcion */}
                <div>
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium my-3 text-[#cfcfcf]"
                  >
                    Empresa Lado Izquierdo
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm ">
                    <input
                      id="nombreEvaluacion"
                      type="text"
                      name="nombreEvaluacion"
                      /*   onChange={(e) =>
                      setDatos({ ...datos, [e.target.name]: e.target.value })
                    } */
                      className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded sm:text-sm "
                      placeholder="Ejemplo: SASISOPA"
                    />
                  </div>
                </div>
                {/* Descripcion */}
                {/* Finalizacion */}
                <div>
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium my-3 text-[#cfcfcf]"
                  >
                    Subir Archivos
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm ">
                    <input
                      id="nombreEvaluacion"
                      type="text"
                      name="nombreEvaluacion"
                      /*   onChange={(e) =>
                      setDatos({ ...datos, [e.target.name]: e.target.value })
                    } */
                      className="border border-r-0 bg-[#404044] border-[#333333] text-gray-50 flex-1 min-w-0 block w-full px-3 py-2 rounded sm:text-sm "
                      placeholder="Ejemplo: SASISOPA"
                    />
                  </div>
                </div>
                {/* Finalizacion */}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Formulario;
