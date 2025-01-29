import React from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "To say that switching to Preline has been life-changing is an understatement. My business has tripled since then.",
    name: "Nicole Grazioso",
    position: "Director Payments & Risk | Airbnb",
    image:
      "https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    largeImage:
      "https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
//   {
//     id: 2,
//     quote:
//       "Preline provided an innovative approach that changed how we scale payments. The impact has been incredible.",
//     name: "James O'Connor",
//     position: "VP of Finance | Stripe",
//     image:
//       "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     largeImage:
//       "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-neutral-900 py-16">
      <div className="max-w-5xl px-4 xl:px-0 mx-auto">
        {/* Title Section */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
            Preline Reviews
          </h2>
          <p className="mt-1 text-neutral-400">
            With over 30 awards and achievements, we proudly demonstrate our
            unwavering dedication to excellence and client success.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {testimonials.map(({ id, quote, name, position, image, largeImage }) => (
            <div key={id} className="flex flex-col md:flex-row items-center gap-6">
              {/* Quote Section */}
              <div className="flex-1">
                <blockquote className="relative">
                  <p className="font-medium text-xl text-white md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal">
                    "{quote}"
                  </p>
                  <footer className="mt-6 flex items-center">
                    <div className="md:hidden flex-shrink-0">
                      <img className="size-12 rounded-full" src={image} alt={name} />
                    </div>
                    <div className="ms-4 md:ms-0">
                      <div className="text-base font-semibold text-white">{name}</div>
                      <div className="text-xs text-neutral-400">{position}</div>
                    </div>
                  </footer>
                </blockquote>
              </div>

              {/* Image Section */}
              <div className="hidden md:block">
                <img className="rounded-xl w-full max-w-xs lg:max-w-md" src={largeImage} alt={name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
