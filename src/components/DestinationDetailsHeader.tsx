
import { Destination } from "@/app/destinations/[destinationId]/page";
import { ArrowLeft, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DialogForm } from "./dialog";
import DeleteingButton from "./deleteing";


export default function DestinationDetailsHeader({destinationDetailsData}: {destinationDetailsData: Destination}) {
  
  console.log(destinationDetailsData);
  
  

  return (
    <header>
      {/* Top action bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5">
        <Link
          href="/destinations"
          className="inline-flex items-center gap-2 text-[13px] font-light text-[#6b7a85] transition-colors hover:text-[#1f9bb8]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Destinations
        </Link>

        <div className="flex items-center gap-2">
          <DialogForm destinationDetailsData={destinationDetailsData}/>

          <DeleteingButton destinationDetailsData={destinationDetailsData}/>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-[220px] w-full overflow-hidden rounded-xl bg-slate-100 sm:h-[320px] lg:h-[420px]">
        <Image
          src={destinationDetailsData?.image}
          alt={destinationDetailsData?.name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1152px"
          className="object-cover"
        />
      </div>
    </header>
  );
}
