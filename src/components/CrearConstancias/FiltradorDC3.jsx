import { SearchIcon } from "@heroicons/react/solid";

const FiltradorDC3 = () => {
  return (
    <div className="mt-5">
      <label htmlFor="search" className="sr-only">
        Filtrador de cosntancias
      </label>
      <div className="relative  text-gray-200 focus-within:text-gray-400">
        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
          <SearchIcon className="h-5 w-5" aria-hidden="true" />
        </div>
        <input
          className="block w-full bg-[#3d3d3d] py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 focus:text-gray-400 placeholder-gray-400 focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Filtrador de Constancias DC-3"
          type="text"
          value=""
          onChange=""
        />
      </div>
    </div>
  );
};

export default FiltradorDC3;
