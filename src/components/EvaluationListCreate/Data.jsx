import Filter from "./Filter";
import useEvaluaciones from "../../hooks/useEvaluaciones";

const Data = () => {
  const { clientes } = useEvaluaciones();

  return (
    <>
      <Filter data={clientes} />
    </>
  );
};

export default Data;
