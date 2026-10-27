import { Destination } from "@/app/destinations/[destinationId]/page";
import { ArrowRight, CalendarDays, Check, MapPin, Star } from "lucide-react";

const highlights = [
  "Luxury beachfront accommodation",
  "Visit Uluwatu Temple at sunset",
  "Traditional Balinese spa treatment",
  "Private beach dinner experience",
  "Sunrise trek to Mount Batur",
  "Traditional Balinese cooking class",
];

const bookingPerks = [
  "Free cancellation up to 7 days",
  "Travel insurance included",
  "24/7 customer support",
];

export default function DestinationDetailsContent({ destinationDetailsData } : {destinationDetailsData : Destination}) {
  return (
    <div className="grid grid-cols-1 gap-8 pt-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
      {/* Left column — destination info */}
      <div>
        <p className="flex items-center gap-2 text-[13px] font-light text-[#6b7a85]">
          <MapPin className="h-4 w-4" />
          {destinationDetailsData?.country}
        </p>

        <h1 className="mt-2 text-4xl leading-tight font-normal tracking-tight text-[#0b1b24] md:text-[44px]">
          {destinationDetailsData?.name}
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-light text-[#6b7a85]">
          <span className="flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-emerald-600 text-emerald-600" />
            <span className="font-medium text-[#0b1b24]">4.9</span>
            (234 reviews)
          </span>

          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" />
            7 Days / 6 Nights
          </span>
        </div>

        {/* Overview */}
        <section className="mt-8">
          <h2 className="text-xl font-medium text-[#0b1b24]">Overview</h2>
          <p className="mt-2.5 max-w-3xl text-[13px] leading-relaxed font-light text-[#6b7a85]">
           {destinationDetailsData?.description}
          </p>
        </section>

        {/* Highlights */}
        <section className="mt-8">
          <h2 className="text-xl font-medium text-[#0b1b24]">Highlights</h2>
          <p className="mt-2.5 max-w-3xl text-[13px] leading-relaxed font-light text-[#6b7a85]">
            Discover the magic of Bali with pristine beaches, ancient temples,
            and vibrant culture. Experience luxury resorts, tropical landscapes,
            and unforgettable sunsets.
          </p>

          <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[13px] font-light text-[#6b7a85]"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Right column — booking card */}
      <aside className="h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
        <p className="text-[13px] font-light text-[#6b7a85]">Starting from</p>
        <p className="mt-1 text-[32px] leading-none font-semibold text-[#1f9bb8]">
          ${destinationDetailsData?.price}
        </p>
        <p className="mt-1.5 text-[13px] font-light text-[#6b7a85]">
          per person
        </p>

        <div className="mt-5 rounded-md bg-slate-50 px-3 py-2.5 text-[13px] font-light text-[#6b7a85]">
          {destinationDetailsData?.date}
        </div>

        <button
          type="button"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#1f9bb8] px-6 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-[#1a869f]"
        >
          Book Now
          <ArrowRight className="h-4 w-4" />
        </button>

        <ul className="mt-5 space-y-3 border-t border-slate-100 pt-5">
          {bookingPerks.map((perk) => (
            <li
              key={perk}
              className="flex items-start gap-2 text-[12px] font-light text-[#6b7a85]"
            >
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
              {perk}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
