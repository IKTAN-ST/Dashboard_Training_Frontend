import CrearFormulario from "../components/CrearFormulario";
import Data from "../components/EvaluationListCreate/Data";

const Evaluaciones = () => {
  return (
    <>
      <main className="bg-[#1e1f22] border-t-2 border-[#333333] -mt-24 pb-8">
        <div className="md:mt-10 max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              <CrearFormulario />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <Data />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Evaluaciones;
