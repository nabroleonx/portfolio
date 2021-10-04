const profile = {
  name: "Ricardo Cooper",
  imageUrl:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  coverImageUrl:
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  about: `
    <p>Hello there, I am Abel. I am a software developer based in Ethiopia. I currently currently enrolled as a third year Software Engineering student Bahir Dar Institute of Technology.</p>
    <p>I was born and raised in a rural area. However, I have always been fascinated with technology. I love maths and physics. When I was a kid, I was always tinkering with broken radios and other gadgets in our house. My family and other people who knew me used to say, he is going to be an engineer one day.
    I believe that played a large role to where I am now. I didn't have a phone let alone a computer for almost my entire adulthood. Despite all of that, my curiousty was fueling my passion for technology day after day.</p>
  <p>I remember the first time I touched a computer. A guy who used to live in our compound was learning his MSc and his brother sent him a PC for his thesis. I used to sit with him and watch how it all works. I was a quick learner and quite an experimenter so I end up helping him navigate things.
  </p>
  <p>One day I was watching a show called "Tech-Talk with Solomon" and lucky for me the guest was Prof. Jelani Nelson. I remember him explaning binary seach algorithms using the famous phone book analogy, and then I was hooked. It was like a revelation for me. From that day on, I took his pc when he was not using it and started teaching myself some HTML. That was when I was in grade 9.</p>
    `,
  // fields: {
  //   ["Tech-Stack"]: "Full-Stack Developer",
  //   Location: "Bahir Dar, Amhara, Ethiopia",
  // },x
};

const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    {
      skill: (
        <div className="flex">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24"
        height="24"
        viewBox="0 0 48 48"
        style={{ fill: "#000000" }}
        >
          <path
            fill="#0277BD"
            d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
          ></path>
          <path
            fill="#FFC107"
            d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
          ></path>
        </svg> 
        <p>Python</p>
        </div>
      ),
      rating: 5,
      count: 1300,
    },
    { skill: "React.js", rating: 4, count: 1150 },
    { skill: "Next.js", rating: 1, count: 1100 },
    { skill: "GraphQL", rating: 3, count: 1000 },
    { skill: "Tailwind", rating: 2, count: 1056 },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function About() {
  return (
    <>
      <dl className="grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2">
        {/* {Object.keys(profile.fields).map((field) => (
          <div key={field} className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">{field}</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {profile.fields[field]}
            </dd>
          </div>
        ))} */}
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">About</dt>
          <dd
            className="mt-1 max-w-prose text-justify text-sm text-gray-900 space-y-5"
            dangerouslySetInnerHTML={{ __html: profile.about }}
          />
        </div>
        <div className="sm:col-span-1 ">
          <div className="mt-3 flex items-center">
            <div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-gray-900">Skills</p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>

            <dl className="space-y-3">
              {reviews.counts.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <dt className="flex-1 flex items-center">
                    <p className="w-16 font-medium text-gray-900">
                      {count.skill}
                    </p>
                    <div
                      aria-hidden="true"
                      className="ml-1 flex-1 flex items-center"
                    >
                      <div className="ml-3 relative flex-1">
                        <div className="h-3 bg-gray-100 border border-gray-200 rounded-full" />
                        {count.count > 0 ? (
                          <div
                            className="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
                            style={{
                              width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </dl>
    </>
  );
}
