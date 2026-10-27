"use client";

import { useState } from "react";
import DestinationGrid from "@/components/DestinationGrid";
import DestinationsFilter from "@/components/DestinationsFilter";
import {
  applyFilters,
  type Destination,
  type DestinationFilters,
} from "@/lib/destinations";

type DestinationsSectionProps = {
  destinations: Destination[];
};

export default function DestinationsSection({
  destinations,
}: DestinationsSectionProps) {
  const [filters, setFilters] = useState<DestinationFilters>({
    category: null,
    price: null,
    sort: null,
  });

  const visibleDestinations = applyFilters(destinations, filters);
  console.log("form",destinations);
  
  return (
    <>
      <DestinationsFilter filters={filters} onChange={setFilters} />
      <DestinationGrid destinations={visibleDestinations} />
    </>
  );
}
