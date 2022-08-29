/* This example requires Tailwind CSS v2.0+ */
const plans = [
  {
    id: 1,
    name: "Antonio de Jesus Sanchez Suarez",
    memory: "6306e3eaf58a9cbc1ea2bdc9",
    price: "GS5H",
    isCurrent: false,
  },
  {
    id: 2,
    name: "Victor Hugo Garcia Rodriguez",
    memory: "6306e3eaf58a9cbc1ea2bdc9",
    price: "MD35G",
    isCurrent: false,
  },
  {
    id: 3,
    name: "Felipe de Jesus Medina Rodriguez",
    memory: "6306e3eaf58a9cbc1ea2bdc9",
    price: "MD35G",
    isCurrent: false,
  },
  {
    id: 4,
    name: "Citlali del Carmen Canche Arroyo",
    memory: "6306e3eaf58a9cbc1ea2bdc9",
    price: "MD35G",
    isCurrent: false,
  },
  {
    id: 4,
    name: "Nahum Alonso Sanchez Canche",
    memory: "6306e3eaf58a9cbc1ea2bdc9",
    price: "MD35G",
    isCurrent: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ListIKTAN() {
  return (
    <div>
      <div className="bg-[#27282d] mt-6  sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="min-w-full divide-y divide-[#3d3d3d]">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-200 sm:pl-6"
              >
                Nombre
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-200 lg:table-cell"
              >
                Folio
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200"
              >
                Siglas Curso
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Select</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, planIdx) => (
              <tr key={plan.id}>
                <td
                  className={classNames(
                    planIdx === 0 ? "" : "border-t border-transparent",
                    "relative py-4 pl-4 sm:pl-6 pr-3 text-sm"
                  )}
                >
                  <div className="font-medium text-amber-400">
                    {plan.name}
                    {plan.isCurrent ? (
                      <span className="text-indigo-600">(Current Plan)</span>
                    ) : null}
                  </div>
                  <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
                    <span>
                      {plan.memory} / {plan.cpu}
                    </span>
                    <span className="hidden sm:inline"> · </span>
                    <span>{plan.storage}</span>
                  </div>
                  {planIdx !== 0 ? (
                    <div className="absolute right-0 left-6 -top-px h-px bg-[#3d3d3d]" />
                  ) : null}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? "" : "border-t border-[#3d3d3d]",
                    "hidden px-3 py-3.5 text-sm text-gray-400 lg:table-cell"
                  )}
                >
                  {plan.memory}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? "" : "border-t border-[#3d3d3d]",
                    "px-3 py-3.5 text-sm text-gray-400"
                  )}
                >
                  <div className="sm:hidden">{plan.price}/mo</div>
                  <div className="hidden sm:block">{plan.price} </div>
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? "" : "border-t border-transparent",
                    "relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium"
                  )}
                >
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-[#3d3d3d] bg-red-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                    disabled={plan.isCurrent}
                  >
                    .PDF<span className="sr-only">, {plan.name}</span>
                  </button>
                  {planIdx !== 0 ? (
                    <div className="absolute right-6 left-0 -top-px h-px bg-[#3d3d3d]" />
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
