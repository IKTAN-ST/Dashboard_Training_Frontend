import useEvaluaciones from "../hooks/useEvaluaciones";
import Evaluacion from "./Evaluacion";

const ListadoEvaluaciones = () => {
  const { clientes } = useEvaluaciones();

  return (
    <>
      {clientes.length ? (
        <>
          <section aria-labelledby="quick-links-title">
            <div className="rounded-lg bg-[#3d3d3d] overflow-hidden shadow divide-y divide-[#3d3d3d] sm:divide-y-0 sm:grid  sm:gap-px">
              {clientes.map((cliente) => (
                <Evaluacion key={cliente._id} cliente={cliente} />
              ))}
            </div>
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ListadoEvaluaciones;
