type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

const navLinks: NavItem[] = [
  { label: "Home", href: "/", active: true },
  { label: "Destinations", href: "/destinations", active: false },
  { label: "My Bookings", href: "#", active: false },
  { label: "Add Destination", href: "/addDestination", active: false },
];

const authLinks: NavItem[] = [
  { label: "All Places", href: "#", active: false },
  { label: "Login", href: "#", active: false },
  { label: "Sign Up", href: "#", active: false },
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

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between gap-6 bg-white px-4 py-3 text-sm sm:px-6">
      <nav className="flex items-center gap-4 sm:gap-6">
        {navLinks.map((link) => (
          <NavLink key={link.label} {...link} />
        ))}
      </nav>
      <Brand />
      <nav className="flex items-center gap-4 sm:gap-6">
        {authLinks.map((link) => (
          <NavLink key={link.label} {...link} />
        ))}
      </nav>
    </header>
  );
}
