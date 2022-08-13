export default function Support() {
  return (
    <div className="mt-8 bg-[#27282d] shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="border-b border-[#3d3d3d]">
          <h3 className="text-lg leading-6  pb-3 font-medium text-red-400">
            Eliminar cuenta permanentemente
          </h3>
        </div>

        <div className="mt-2 max-w-xl text-sm text-gray-400">
          <p>
            Una vez que elimine su cuenta, perderá todos los datos asociados con
            ella.
          </p>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
          >
            Eliminar cuenta
          </button>
        </div>
      </div>
    </div>
  );
}
