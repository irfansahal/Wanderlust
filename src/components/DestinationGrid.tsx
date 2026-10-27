//"use client";

import { useState } from "react";
import { ArrowUpRight, CalendarDays, MapPin, Star } from "lucide-react";
import Image from "next/image";
import type { Destination } from "@/lib/destinations";
import Link from "next/link";

type DestinationGridProps = {
  destinations: Destination[];
};

function DestinationImage({ src, alt }: { src: string; alt: string }) {
  const [optimizedFailed, setOptimizedFailed] = useState(false);

  // The image optimizer gives up after 7 seconds on slow hosts, which would
  // leave the card broken. Fall back to letting the browser fetch the
  // original directly (browsers are far more patient).
  if (optimizedFailed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="object-cover transition-transform duration-300 group-hover:scale-105"
      onError={() => setOptimizedFailed(true)}
    />
  );
}

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="group">
      <div className="relative h-52 overflow-hidden rounded-lg bg-slate-100">
        {destination.image ? (
          <DestinationImage src={destination.image} alt={destination.title} />
        ) : null}

        <span className="absolute top-3 right-3 flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[11px] font-medium text-[#0b1b24] shadow-sm">
          {destination.rating.toFixed(1)}
          <Star className="h-3 w-3 fill-current text-[#0b1b24]" />
        </span>
      </div>

      <div className="mt-3">
        <p className="flex items-center gap-1 text-[11px] font-light text-[#6b7a85]">
          <MapPin className="h-3 w-3" />
          {destination.location}
        </p>

        <div className="mt-1 flex items-baseline justify-between gap-3">
          <h3 className="text-[17px] font-medium text-[#0b1b24]">
            {destination.title}
          </h3>
          <p className="shrink-0 text-[15px] font-semibold text-[#0b1b24]">
            ${destination.price}
            <span className="text-[11px] font-light text-[#6b7a85]">
              /Person
            </span>
          </p>
        </div>

        <p className="mt-1.5 flex items-center gap-1.5 text-[11px] font-light text-[#6b7a85]">
          <CalendarDays className="h-3 w-3" />
          {destination.duration}
        </p>

        <button
          type="button"
          className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider text-[#1f9bb8] transition-colors hover:text-[#1a869f]"
          >
          <Link href={`/destinations/${destination.id}`}> 
          BOOK NOW at the tine
          </Link> 
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}

export default function DestinationGrid({ destinations }: DestinationGridProps) {
  const count = destinations.length;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-4 pb-16 md:px-6">
      <p className="text-[13px] font-light text-[#6b7a85]">
        Showing {count} destination{count === 1 ? "" : "s"}
      </p>

      {count === 0 ? (
        <div className="mt-6 rounded-md border border-dashed border-slate-200 py-16 text-center">
          <p className="text-sm font-light text-[#6b7a85]">
            No destinations found. Try adjusting your filters.
          </p>
        </div>
      ) : (
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      )}
    </section>
  );
}
