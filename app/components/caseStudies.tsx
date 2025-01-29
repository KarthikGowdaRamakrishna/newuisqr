import React from "react";

const caseStudies = [
  {
    id: 1,
    percentage: "43%",
    title: "Enhancement in Customer Engagement",
    description:
      "With the aim of optimizing customer interactions and boosting brand loyalty, the team at Preline leveraged Mailchimp's powerful tools and expertise to deliver exceptional results.",
    icon: "/icons/mailchimp.svg", // Replace with actual icon path
    link: "#",
  },
  {
    id: 2,
    percentage: "20%",
    title: "Rise in E-commerce",
    description:
      'In collaboration with Shopify, Preline embarked on a mission to revolutionize the e-commerce experience for a fictitious fashion brand, "StyleAura."',
    icon: "/icons/shopify.svg", // Replace with actual icon path
    link: "#",
  },
  {
    id: 3,
    percentage: "12%",
    title: "Streamlining Development",
    description:
      "With the goal of accelerating project delivery and enhancing collaboration among development teams, Preline leveraged GitLab's comprehensive suite of tools and expertise in digital product development.",
    icon: "/icons/gitlab.svg", // Replace with actual icon path
    link: "#",
  },
];

const CaseStories: React.FC = () => {
  return (
    <div className="bg-neutral-900 bg-gradient-to-t from-black to-transparent">
      <div className="max-w-5xl px-4 xl:px-0 py-24 mx-auto">
        {/* Title Section */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Success stories</h2>
          <p className="mt-1 text-neutral-400">
            Global brands see measurable success when they collaborate with us. From higher conversion and payment approval rates to faster processing speeds. Discover their stories here.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map(({ id, percentage, title, description, icon, link }) => (
            <a
              key={id}
              href={link}
              className="group relative z-10 p-6 flex flex-col bg-neutral-900 border border-neutral-700 rounded-xl transition-all hover:bg-neutral-800"
            >
              {/* Icon */}
              <div className="mb-5">
                <img src={icon} alt={title} className="w-10 h-10" />
              </div>

              {/* Content */}
              <div className="mt-5">
                <p className="font-semibold text-5xl text-white">{percentage}</p>
                <h3 className="mt-5 font-medium text-lg text-white">{title}</h3>
                <p className="mt-1 text-neutral-400">{description}</p>
              </div>

              {/* Link */}
              <p className="mt-auto">
                <span className="font-medium text-sm text-[#9CCF6A] pb-1 border-b-2 border-neutral-700 group-hover:border-[#9CCF6A] transition">
                  Case study
                </span>
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStories;
