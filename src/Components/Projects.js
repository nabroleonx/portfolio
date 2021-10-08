import { Menu } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";

const projects = [
  {
    name: "Automated File Organizer",
    href: "https://github.com/nabroleonx/Automated-file-organizer",
    repoHref: "https://github.com/nabroleonx/Automated-file-organizer",
    repo: "nabroleonx/Automated-file-organizer",
    tech: "Python",
    active: true,
  },
  {
    name: "Archiver tool",
    href: "https://github.com/nabroleonx/Archive-Manager",
    repoHref: "https://github.com/nabroleonx/Archive-Manager",
    repo: "nabroleonx/Archive-Manager",
    tech: "Python",
    active: true,
  },
  {
    name: "Portfolio",
    href: "https://github.com/nabroleonx/portfolio",
    repoHref: "https://github.com/nabroleonx/portfolio",
    repo: "nabroleonx/portfolio",
    tech: "React.js, Tailwind CSS",
    active: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Projects() {
  return (
    <div className="bg-white lg:min-w-0 lg:flex-1">
      <div className="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
        <div className="flex items-center">
          <h1 className="flex-1 text-lg font-medium">Projects</h1>
          <Menu as="div" className="relative">
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Name
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
        </div>
      </div>
      <ul
        role="list"
        className="relative z-0 divide-y divide-gray-200 border-b border-gray-200"
      >
        {projects.map((project) => (
          <li
            key={project.repo}
            className="relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
          >
            <div className="flex items-center justify-between space-x-4">
              <div className="min-w-0 space-y-3">
                <div className="flex items-center space-x-3">
                  <span
                    className={classNames(
                      project.active ? "bg-green-100" : "bg-gray-100",
                      "h-4 w-4 rounded-full flex items-center justify-center"
                    )}
                    aria-hidden="true"
                  >
                    <span
                      className={classNames(
                        project.active ? "bg-green-400" : "bg-gray-400",
                        "h-2 w-2 rounded-full"
                      )}
                    />
                  </span>

                  <span className="block">
                    <h2 className="text-sm font-medium">
                      <a href={project.href}>
                        <span className="absolute inset-0" aria-hidden="true" />
                        {project.name}{" "}
                        <span className="sr-only">
                          {project.active ? "Running" : "Not running"}
                        </span>
                      </a>
                    </h2>
                  </span>
                </div>
                <a
                  href={project.repoHref}
                  className="relative group flex items-center space-x-2.5"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.99917 0C4.02996 0 0 4.02545 0 8.99143C0 12.9639 2.57853 16.3336 6.15489 17.5225C6.60518 17.6053 6.76927 17.3277 6.76927 17.0892C6.76927 16.8762 6.76153 16.3104 6.75711 15.5603C4.25372 16.1034 3.72553 14.3548 3.72553 14.3548C3.31612 13.316 2.72605 13.0395 2.72605 13.0395C1.9089 12.482 2.78793 12.4931 2.78793 12.4931C3.69127 12.5565 4.16643 13.4198 4.16643 13.4198C4.96921 14.7936 6.27312 14.3968 6.78584 14.1666C6.86761 13.5859 7.10022 13.1896 7.35713 12.965C5.35873 12.7381 3.25756 11.9665 3.25756 8.52116C3.25756 7.53978 3.6084 6.73667 4.18411 6.10854C4.09129 5.88114 3.78244 4.96654 4.27251 3.72904C4.27251 3.72904 5.02778 3.48728 6.74717 4.65082C7.46487 4.45101 8.23506 4.35165 9.00028 4.34779C9.76494 4.35165 10.5346 4.45101 11.2534 4.65082C12.9717 3.48728 13.7258 3.72904 13.7258 3.72904C14.217 4.96654 13.9082 5.88114 13.8159 6.10854C14.3927 6.73667 14.7408 7.53978 14.7408 8.52116C14.7408 11.9753 12.6363 12.7354 10.6318 12.9578C10.9545 13.2355 11.2423 13.7841 11.2423 14.6231C11.2423 15.8247 11.2313 16.7945 11.2313 17.0892C11.2313 17.3299 11.3937 17.6097 11.8501 17.522C15.4237 16.3303 18 12.9628 18 8.99143C18 4.02545 13.97 0 8.99917 0Z"
                      fill="currentcolor"
                    />
                  </svg>
                  <span className="text-sm text-gray-500 group-hover:text-gray-900 font-medium truncate">
                    {project.repo}
                  </span>
                </a>
              </div>
              <div className="sm:hidden">
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <div className="hidden sm:flex flex-col flex-shrink-0 items-end space-y-3">
                <p className="flex text-gray-500 text-sm space-x-2">
                  <span>{project.tech}</span>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
