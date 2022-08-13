const announcements = [
  {
    id: 1,
    title: "Oficina cerrada el July 2nd",
    href: "#",
    preview:
      "Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.",
  },
  {
    id: 2,
    title: "Nueva política de contraseñas",
    href: "#",
    preview:
      "Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.",
  },
];

const Announcements = () => {
  return (
    <section aria-labelledby="announcements-title">
      <div className="rounded-lg bg-[#27282d] overflow-hidden shadow">
        <div className="p-6">
          <h2
            className="text-base font-medium text-[#cfcfcf]"
            id="announcements-title"
          >
            Anuncios
          </h2>
          <div className="flow-root mt-6">
            <ul role="list" className="-my-5 divide-y divide-[#3d3d3d]">
              {announcements.map((announcement) => (
                <li key={announcement.id} className="py-5">
                  <div className="relative focus-within:ring-2 focus-within:ring-amber-400">
                    <h3 className="text-sm font-semibold text-[#cfcfcf]">
                      <a
                        href={announcement.href}
                        className="hover:underline focus:outline-none"
                      >
                        {/* Extend touch target to entire panel */}
                        <span className="absolute inset-0" aria-hidden="true" />
                        {announcement.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                      {announcement.preview}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="w-full flex justify-center items-center px-4 py-2 border border-[#1f2023] shadow-sm text-sm font-medium rounded-md text-white bg-[#1f2023] hover:bg-[#323336]"
            >
              Ver más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
