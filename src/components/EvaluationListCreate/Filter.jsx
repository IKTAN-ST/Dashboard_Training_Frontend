import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import List from "./List";

function Filter({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      const Folio = value.nombreEvaluacion;

      return Folio.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord >= 0) {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <>
      {/* Search */}
      <div className="">
        <label htmlFor="search" className="sr-only">
          Filtrador de cosntancias
        </label>
        <div className="relative  text-gray-200 focus-within:text-gray-400">
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
            <SearchIcon className="h-5 w-5" aria-hidden="true" />
          </div>
          <input
            className="block w-full bg-[#3d3d3d] py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 focus:text-gray-400 placeholder-gray-400 focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Filtrador de Evaluaciones"
            type="text"
            value={wordEntered}
            onChange={handleFilter}
          />
        </div>
      </div>
      <div>
        <section>
          <div className="rounded-lg bg-[#3d3d3d] overflow-hidden shadow divide-y divide-[#3d3d3d] sm:divide-y-0 sm:grid  sm:gap-px">
            {filteredData.slice(0, 18).map((value) => {
              return (
                <>
                  <List key={value._id} cliente={value} />
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default Filter;
