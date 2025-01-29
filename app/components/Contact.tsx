import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="bg-neutral-900">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
        {/* Title */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Contact us</h2>
          <p className="mt-1 text-neutral-400">Whatever your goal - we will get you there.</p>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
            <form>
              <div className="space-y-4">
                {/* Input Fields */}
                {[
                  { id: "name", label: "Name", type: "text" },
                  { id: "email", label: "Email", type: "email" },
                  { id: "company", label: "Company", type: "text" },
                  { id: "phone", label: "Phone", type: "text" },
                ].map(({ id, label, type }) => (
                  <div key={id} className="relative">
                    <input
                      type={type}
                      id={`hs-tac-input-${id}`}
                      className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-transparent
                      focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2"
                      placeholder={label}
                    />
                    <label
                      htmlFor={`hs-tac-input-${id}`}
                      className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100
                      peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400
                      peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5"
                    >
                      {label}
                    </label>
                  </div>
                ))}

                {/* Textarea */}
                <div className="relative">
                  <textarea
                    id="hs-tac-message"
                    className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-transparent
                    focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2"
                    placeholder="Tell us about your project"
                  ></textarea>
                  <label
                    htmlFor="hs-tac-message"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100
                    peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5"
                  >
                    Tell us about your project
                  </label>
                </div>
                {/* End Textarea */}
              </div>

              <div className="mt-2">
                <p className="text-xs text-neutral-500">All fields are required</p>
                <p className="mt-5">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#9CCF6A] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                  >
                    Submit
                    <svg className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </p>
              </div>
            </form>
          </div>
          {/* End Col */}

          {/* Contact Details */}
          <div className="space-y-14">
            {[
              {
                iconPath: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z M12 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
                title: "Our address:",
                content: (
                  <address className="mt-1 text-neutral-400 text-sm not-italic">
                    300 Bath Street, Tay House<br />
                    Glasgow G2 4JR, United Kingdom
                  </address>
                ),
              },
              {
                iconPath: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z M22 10l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",
                title: "Email us:",
                content: <a className="mt-1 text-neutral-400 text-sm" href="mailto:hello@example.so">hello@example.so</a>,
              },
              {
                iconPath: "m3 11 18-5v12L3 14v-3z M11.6 16.8a3 3 0 1 1-5.8-1.6",
                title: "We're hiring",
                content: (
                  <>
                    <p className="mt-1 text-neutral-400">We're thrilled to announce that we're expanding our team and looking for talented individuals like you to join us.</p>
                    <p className="mt-2">
                      <a className="group inline-flex items-center gap-x-2 font-medium text-sm text-[#9CCF6A] decoration-2 hover:underline focus:outline-none focus:underline" href="#">
                        Job openings
                        <svg className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </p>
                  </>
                ),
              },
            ].map(({ iconPath, title, content }, index) => (
              <div key={index} className="flex gap-x-5">
                <svg className="flex-shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={iconPath} />
                </svg>
                <div className="grow">
                  <h4 className="text-white font-semibold">{title}</h4>
                  {content}
                </div>
              </div>
            ))}
          </div>
          {/* End Contact Details */}
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
};

export default Contact;
