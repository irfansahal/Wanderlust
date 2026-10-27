import DestinationsSection from "@/components/DestinationsSection";
import { fetchDestinations } from "@/lib/destinations";

export default async function DestinationsPage() {
  const destinations = await fetchDestinations();

  return (
    <main className="flex flex-1 flex-col bg-white">
      <DestinationsSection destinations={destinations} />
    </main>
  );
}
