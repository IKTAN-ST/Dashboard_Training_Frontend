import useEvaluaciones from "../hooks/useEvaluaciones";
import PanelEv from "./PanelEv";

const ListadoPanelEv = () => {
  const { clientes } = useEvaluaciones();

  return (
    <>
      {clientes.length ? (
        <>
          <section>
            <div className="rounded-lg bg-[#3d3d3d]  shadow divide-y divide-[#3d3d3d] sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
              {clientes.map((cliente) => (
                <PanelEv key={cliente._id} cliente={cliente} />
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

export default ListadoPanelEv;
