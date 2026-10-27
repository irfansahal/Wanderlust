const features = [
  {
    title: "Safe & Secure",
    text: "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
    icon: (
      <>
        <path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.2 7.5 9.5 4.4-1.3 7.5-4.9 7.5-9.5V6L12 3Z" />
        <path d="m8.8 12 2.4 2.4 4.2-4.6" />
      </>
    ),
  },
  {
    title: "Expert Guides",
    text: "Local experts who bring destinations to life with authentic cultural insights.",
    icon: (
      <>
        <path d="M3 6.5v13l6-2.5 6 2.5 6-2.5v-13L15 9 9 6.5 3 9Z" />
        <path d="M9 6.5V17M15 9v10.5" />
      </>
    ),
  },
  {
    title: "24/7 Support",
    text: "Round-the-clock customer service to assist you wherever your journey takes you.",
    icon: (
      <>
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <rect x="3" y="13" width="4" height="6" rx="1.5" />
        <rect x="17" y="13" width="4" height="6" rx="1.5" />
        <path d="M19 19c0 1.7-1.8 2.5-4 2.5h-1.5" />
      </>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#eefaff] px-4 py-12 text-center md:px-6 md:py-[72px]">
      <h2 className="font-['Marcellus',Georgia,serif] text-4xl leading-tight text-[#0b1b24] md:text-[44px]">
        Why Choose Wanderlust
      </h2>
      <p className="mt-2.5 text-[13px] font-light text-[#6b7a85]">
        Your trusted partner for exceptional travel experiences
      </p>

      <div className="mx-auto mt-10 grid max-w-[1080px] grid-cols-1 gap-5 md:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-sm bg-white px-6 pb-6 pt-7 text-left shadow-[0_1px_0_rgba(11,27,36,0.06),0_1px_6px_rgba(11,27,36,0.04)]"
          >
            <svg
              className="h-6 w-6 text-[#1f9bb8]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {f.icon}
            </svg>

            <h3 className="mb-2 mt-[18px] font-['Marcellus',Georgia,serif] text-lg text-[#0b1b24]">
              {f.title}
            </h3>
            <p className="max-w-[30ch] text-[12.5px] font-light leading-relaxed text-[#6b7a85]">
              {f.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}