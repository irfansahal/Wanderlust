import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const searchFields = [
  { label: "Destination", placeholder: "Where are you going?" },
  { label: "Check-in", placeholder: "Add dates" },
  { label: "Check-out", placeholder: "Add dates" },
  { label: "Guests", placeholder: "Add guests" },
];

export default function Hero() {
  return (
    <section className="relative flex flex-1 items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/image/Banner.png)",
        }}
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center px-4 pb-40 pt-24 text-center text-white sm:px-6">
        <h1 className="text-4xl font-light leading-tight tracking-tight drop-shadow sm:text-5xl md:text-6xl">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mt-4 max-w-xl text-sm text-white/85 sm:text-base">
          Explore breathtaking destinations around the world and plan your
          perfect getaway with Wanderlust.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Button className="rounded-none bg-sky-600 px-6 py-6.5 text-sm font-semibold text-white hover:bg-sky-700">
            Explore Now
          </Button>
          <Button className="rounded-none border border-white/70 bg-transparent px-6 py-6.5 text-sm font-semibold text-white hover:bg-white/10 hover:text-white">
            Watch Video
          </Button>
        </div>
      </div>

      <form className="absolute inset-x-0 bottom-0 z-10 w-full bg-zinc-500 px-4 py-4 shadow-lg sm:px-6 text-white">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-3 text-left sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-end">
          {searchFields.map((field) => (
            <label key={field.label} className="flex flex-col gap-1 bg-zinc-500 ">
              <span className="text-xs font-semibold text-white">
                {field.label}
              </span>
              <Input
                type="text"
                placeholder={field.placeholder}
                className="rounded-none bg-zinc-500"
              />
            </label>
          ))}
          <Button
            type="submit"
            className="rounded-none bg-sky-600 px-8 py-2.5 text-sm font-semibold text-white hover:bg-sky-700"
          >
            Search
          </Button>
        </div>
      </form>
    </section>
  );
}
