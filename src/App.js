import { useState } from "react";
import { Tab } from "@headlessui/react";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import Projects from "./Components/Projects";
import Certifications from "./Components/Certifications";
import About from "./Components/About";
import Review from "./Components/Review";

const profile = {
  name: "Abel Ayalew",
  imageUrl:
    "https://media-exp1.licdn.com/dms/image/C4E03AQF0S6xsZlypPA/profile-displayphoto-shrink_100_100/0/1625307791185?e=1639008000&v=beta&t=K5jNCxmu6wsB-hIT-AjXXlM1wj02218NzvAiuNvGyLg",
  coverImageUrl:
    "https://media-exp1.licdn.com/dms/image/C4E16AQFB0O55b6XEnQ/profile-displaybackgroundimage-shrink_350_1400/0/1630188225203?e=1639008000&v=beta&t=kU3xbAEKrVHXgxSFQoA6A_Zgpnn6Mxp0-_Tgq-9poWU",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function App() {
  let [categories] = useState({
    About: <About />,
    Projects: <Projects />,
    Certifications: <Certifications />,
  });

  return (
    <div className="relative h-screen flex overflow-hidden bg-white">
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            <article>
              <div>
                <div>
                  <img
                    className="h-32 w-full object-fill lg:h-32"
                    src={profile.coverImageUrl}
                    alt=""
                  />
                </div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                    <div className="flex">
                      <img
                        className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                        src={profile.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                      <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                        <p className="text-xl drop-shadow-lg font-medium text-gray-900">
                          Abel Gashaw
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          Software Engineer
                        </p>
                      </div>
                      <div className="overflow-hidden mt-6 flex justify-stretch flex-row space-x-4">
                        <a href="mailto:abbygshw@gmail.com">
                        <button
                          type="button"
                          className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          <MailIcon
                            className="-ml-1 md:mr-2 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="hidden md:block">Email</span>
                        </button>
                        </a>
                        <a href="tel:+251922006222">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          <PhoneIcon
                            className="-ml-1 md:mr-2 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="hidden md:block">Call</span>
                        </button>
                        </a>
                        <a href="https://www.linkedin.com/in/abel-ayalew-a564b7210/">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-ml-1 md:mr-2 h-5 w-5 text-gray-400"
                            viewBox="0 0 172 172"
                          >
                            <g
                              fill="none"
                              fillRule="nonzero"
                              stroke="none"
                              strokeWidth="1"
                              strokeLinecap="butt"
                              strokeLinejoin="miter"
                              strokeMiterlimit="10"
                              strokeDasharray=""
                              strokeDashoffset="0"
                              fontFamily="none"
                              fontWeight="none"
                              fontSize="none"
                              textAnchor="none"
                              style={{ mixBlendMode: "normal" }}
                            >
                              <path d="M0,172v-172h172v172z" fill="none"></path>
                              <g>
                                <path
                                  d="M150.5,132.58333c0,9.89717 -8.0195,17.91667 -17.91667,17.91667h-93.16667c-9.89358,0 -17.91667,-8.0195 -17.91667,-17.91667v-93.16667c0,-9.89717 8.02308,-17.91667 17.91667,-17.91667h93.16667c9.89717,0 17.91667,8.0195 17.91667,17.91667z"
                                  fill="#95a5a6"
                                ></path>
                                <path
                                  d="M43,68.08333h17.91667v60.91667h-17.91667zM51.90458,60.91667h-0.10033c-5.34633,0 -8.80425,-3.98467 -8.80425,-8.96192c0,-5.08475 3.56542,-8.95475 9.0085,-8.95475c5.45025,0 8.80783,3.87 8.90817,8.95475c0,4.97367 -3.45792,8.96192 -9.01208,8.96192zM129,129h-17.91667v-32.60475c0,-7.87617 -4.38958,-13.25117 -11.438,-13.25117c-5.37858,0 -8.28825,3.62633 -9.70008,7.13083c-0.516,1.25417 -0.36192,4.72283 -0.36192,6.47508v32.25h-17.91667v-60.91667h17.91667v9.374c2.58358,-3.999 6.62917,-9.374 16.97783,-9.374c12.82117,0 22.43525,8.0625 22.43525,26.06517l0.00358,34.8515z"
                                  fill="#ffffff"
                                ></path>
                              </g>
                            </g>
                          </svg>
                          <span className="hidden md:block">Linkedin</span>
                        </button>
                        </a>
                        <a href="https://twitter.com/nabroleonx">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-ml-1 md:mr-2 h-5 w-5 text-gray-400"
                            viewBox="0 0 172 172"
                          >
                            <g
                              fill="none"
                              fillRule="nonzero"
                              stroke="none"
                              strokeWidth="1"
                              strokeLinecap="butt"
                              strokeLinejoin="miter"
                              strokeMiterlimit="10"
                              strokeDasharray=""
                              strokeDashoffset="0"
                              fontFamily="none"
                              fontWeight="none"
                              fontSize="none"
                              textAnchor="none"
                              style={{ mixBlendMode: "normal" }}
                            >
                              <path d="M0,172v-172h172v172z" fill="none"></path>
                              <g fill="#95a5a6">
                                <path d="M160.53333,39.77213c-5.4868,2.43667 -11.38067,4.0764 -17.56693,4.816c6.31813,-3.784 11.1628,-9.77533 13.44467,-16.91907c-5.90533,3.50307 -12.4528,6.04867 -19.42453,7.42467c-5.57853,-5.94547 -13.52493,-9.66067 -22.31987,-9.66067c-16.8904,0 -30.5816,13.69693 -30.5816,30.5816c0,2.39653 0.2752,4.73573 0.7912,6.966c-25.41587,-1.2728 -47.94787,-13.4504 -63.038,-31.9576c-2.62587,4.51787 -4.13373,9.7696 -4.13373,15.38253c0,10.60667 5.39507,19.9692 13.59947,25.45027c-5.01093,-0.16053 -9.72947,-1.53653 -13.85173,-3.82413c0,0.13187 0,0.25227 0,0.38413c0,14.82067 10.53787,27.18173 24.53293,29.98533c-2.5628,0.69947 -5.26893,1.07213 -8.06107,1.07213c-1.96653,0 -3.8872,-0.19493 -5.75053,-0.54467c3.89293,12.14893 15.1876,20.99547 28.5692,21.242c-10.46333,8.2044 -23.65,13.09493 -37.98333,13.09493c-2.46533,0 -4.902,-0.14333 -7.29853,-0.43c13.5364,8.67453 29.60693,13.73707 46.88147,13.73707c56.25547,0 87.00907,-46.60053 87.00907,-87.0148c0,-1.3244 -0.02867,-2.64307 -0.086,-3.956c5.97987,-4.3172 11.16853,-9.7008 15.26787,-15.82973z"></path>
                              </g>
                            </g>
                          </svg>
                          <span className="hidden md:block">Twitter</span>
                        </button>
                        </a>
                        <a href="https://github.com/nabroleonx">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-ml-1 md:mr-2 h-5 w-5 text-gray-400"
                            viewBox="0 0 172 172"
                          >
                            <g
                              fill="none"
                              fillRule="nonzero"
                              stroke="none"
                              strokeWidth="1"
                              strokeLinecap="butt"
                              strokeLinejoin="miter"
                              strokeMiterlimit="10"
                              strokeDasharray=""
                              strokeDashoffset="0"
                              fontFamily="none"
                              fontWeight="none"
                              fontSize="none"
                              textAnchor="none"
                              style={{ mixBlendMode: "normal" }}
                            >
                              <path d="M0,172v-172h172v172z" fill="none"></path>
                              <g fill="#95a5a6">
                                <path d="M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,32.23853 22.19947,59.21387 52.12747,66.67867c-0.32107,-0.9288 -0.52747,-2.00667 -0.52747,-3.34253v-11.75907c-2.79213,0 -7.47053,0 -8.64587,0c-4.70707,0 -8.8924,-2.02387 -10.922,-5.78493c-2.2532,-4.1796 -2.64307,-10.57227 -8.22733,-14.4824c-1.65693,-1.30147 -0.3956,-2.7864 1.5136,-2.58573c3.526,0.9976 6.45,3.41707 9.202,7.00613c2.74053,3.5948 4.03053,4.40893 9.1504,4.40893c2.48253,0 6.19773,-0.14333 9.69507,-0.69373c1.88053,-4.77587 5.13133,-9.17333 9.10453,-11.2488c-22.9104,-2.3564 -33.84387,-13.75427 -33.84387,-29.22853c0,-6.66213 2.838,-13.1064 7.65973,-18.53587c-1.5824,-5.38933 -3.57187,-16.38013 0.60773,-20.56547c10.30853,0 16.54067,6.68507 18.03707,8.49107c5.13707,-1.76013 10.77867,-2.75773 16.70693,-2.75773c5.93973,0 11.60427,0.9976 16.7528,2.7692c1.4792,-1.79453 7.71707,-8.50253 18.04853,-8.50253c4.1968,4.19107 2.1844,15.22773 0.5848,20.6056c4.79307,5.418 7.61387,11.84507 7.61387,18.49573c0,15.4628 -10.91627,26.85493 -33.79227,29.2228c6.2952,3.2852 10.8876,12.51587 10.8876,19.4704v15.67493c0,0.59627 -0.13187,1.02627 -0.20067,1.53653c26.80907,-9.39693 46.06733,-34.85293 46.06733,-64.87267c0,-37.9948 -30.8052,-68.8 -68.8,-68.8z"></path>
                              </g>
                            </g>
                          </svg>
                          <span className="hidden md:block">Github</span>
                        </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                    <h1 className="text-2xl font-bold text-gray-900 truncate">
                      {profile.name}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-2 2xl:mt-5">
                <div className="border-b border-gray-200">
                  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Tab.Group>
                      <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                        {Object.keys(categories).map((category) => (
                          <Tab
                            key={category}
                            className={({ selected }) =>
                              classNames(
                                "w-full py-2.5 text-sm leading-5 font-medium",
                                "focus:outline-none",
                                selected
                                  ? "border-teal-400 border-b text-teal-500"
                                  : "border-transparent text-gray-500 hover:border-blue-300 hover:text-gray-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                              )
                            }
                          >
                            {category}
                          </Tab>
                        ))}
                      </Tab.List>
                      <Tab.Panels className="mt-2">
                        {Object.values(categories).map((posts) => (
                          <Tab.Panel
                            key={posts}
                            className={classNames(
                              "bg-white rounded-xl p-3",
                              "focus:outline-none"
                            )}
                          >
                            {posts}
                          </Tab.Panel>
                        ))}
                      </Tab.Panels>
                    </Tab.Group>
                  </div>
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
