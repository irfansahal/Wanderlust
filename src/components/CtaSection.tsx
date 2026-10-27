import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CtaSection() {
  return (
    <section className="w-full">
      <div className="relative flex min-h-[300px] w-full items-center justify-center overflow-hidden md:min-h-[380px]">
        {/* Background image */}
        <Image
          src="/image/CTA.png"
          alt="Aerial view of a plane flying over a tropical island"
          fill
          sizes="100vw"
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0b1b24]/60" />

        {/* Dashed content box */}
        <div className="relative mx-4 w-full max-w-[1080px] border border-dashed border-white/40 px-6 py-14 text-center md:px-12 md:py-16">
          <h2 className="font-['Marcellus',Georgia,serif] text-3xl leading-tight text-white md:text-[44px]">
            Ready To Start Your Journey?
          </h2>

          <p className="mt-2.5 text-[13px] font-light text-white/80">
            Join thousands of travelers who have discovered the world with us
          </p>

          <button
            type="button"
            className="mt-7 inline-flex items-center gap-2 bg-white px-7 py-3 text-[11px] font-semibold tracking-wider text-[#0b1b24] transition-colors hover:bg-white/90"
          >
            BOOK YOUR TRIP TODAY
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
