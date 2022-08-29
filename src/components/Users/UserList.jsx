/* This example requires Tailwind CSS v2.0+ */
import {
  CheckCircleIcon,
  ChevronRightIcon,
  MailIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/solid";

const applications = [
  {
    applicant: {
      name: "Felipe de Jesus Medina Rodriguez",
      email: "correo@correo.com",
      imageUrl: "https://imgur.com/lZFew0Z.png",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Solicitud pendiente.",
    href: "#",
  },
  {
    applicant: {
      name: "Antonio de Jesus Sanchez Suarez",
      email: "correo@correo.com",
      imageUrl: "https://imgur.com/lZFew0Z.png",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Solicitud pendiente.",
    href: "#",
  },
  {
    applicant: {
      name: "Victor Hugo Garcia Rodriguez",
      email: "correo@correo.com",
      imageUrl: "https://imgur.com/lZFew0Z.png",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Solicitud pendiente.",
    href: "#",
  },
  {
    applicant: {
      name: "Nahum Alonso Sanchez Canche",
      email: "correo@correo.com",
      imageUrl: "https://imgur.com/lZFew0Z.png",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Solicitud pendiente.",
    href: "#",
  },
  {
    applicant: {
      name: "Adrian Sotelo Mendoza",
      email: "correo@correo.com",
      imageUrl: "https://imgur.com/lZFew0Z.png",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Solicitud pendiente.",
    href: "#",
  },
];

export default function UserList() {
  return (
    <div className="bg-[#27282d] shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-[#3d3d3d]">
        {applications.map((application) => (
          <li key={application.applicant.email}>
            <a href={application.href} className="block hover:bg-[#34353b]">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={application.applicant.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p className="text-sm font-medium text-yellow-400 truncate">
                        {application.applicant.name}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <MailIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="truncate">
                          {application.applicant.email}
                        </span>
                      </p>
                    </div>
                    <div className="hidden md:block">
                      <div>
                        <p className="text-sm text-gray-200">
                          Solicitado en{" "}
                          <time dateTime={application.date}>
                            {application.dateFull}
                          </time>
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <ExclamationCircleIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400"
                            aria-hidden="true"
                          />
                          {application.stage}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <ChevronRightIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
