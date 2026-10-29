
import { auth } from "@/lib/auth";
import PopoverCard from "./Popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { headers } from "next/headers";

type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

interface User {
   name : string ;
    email : string ; 
    image : string | null | undefined }

const navLinks: NavItem[] = [
  { label: "Home", href: "/", active: true },
  { label: "Destinations", href: "/destinations", active: false },
  { label: "My Bookings", href: "/my-booking", active: false },
  { label: "Add Destination", href: "/addDestination", active: false },
];

const authLinks: NavItem[] = [
  { label: "All Places", href: "#", active: false },
  { label: "Login", href: "/signIn", active: false },
  { label: "Sign Up", href: "/signUp", active: false },
];

function NavLink({ label, href, active = false }: NavItem) {
  return (
    <a
      href={href}
      className={`transition-colors hover:text-sky-600 ${
        active ? "font-semibold text-sky-600" : "text-zinc-600"
      }`}
    >
      {label}
    </a>
  );
}

function Brand() {
  return (
    <a
      href="#"
      className="font-serif text-2xl font-bold tracking-tight text-sky-600 sm:text-3xl"
    >
      Wanderlust
    </a>
  );
}

export default async function Header() {

   const session = await auth.api.getSession({
    headers : await headers()
   })
    
   const user  = session?.user
   console.log("user", session?.user);
   
  return (
    <header className="flex w-full items-center justify-between gap-6 bg-white px-4 py-3 text-sm sm:px-6">
      <nav className="flex items-center gap-4 sm:gap-6">
        {navLinks.map((link) => (
          <NavLink key={link.label} {...link} />
        ))}
      </nav>
      <Brand />

      <nav className="flex items-center gap-4 sm:gap-6">
     
     {user ? <div className="flex gap-5 justify-center items-center">
        <PopoverCard user={user}/>
        <h1 className="font-bold text-blue-700">{user.email}</h1>
      </div> : <>
        {authLinks.map((link) => (
          <NavLink key={link.label} {...link} />
        ))}
      </>}

      
      </nav>
    </header>
  );
}
