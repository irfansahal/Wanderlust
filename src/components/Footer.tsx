import { MapPin, Send } from "lucide-react";

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Press", href: "#" },
];

const supportLinks = [
  { label: "Help Center", href: "#" },
  { label: "Cancellation Options", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
          <div className="pb-5">
            <a
              href="#"
              className="font-serif text-5xl font-bold tracking-tight text-white "
            >
              Wanderlust
            </a>
            <p className="mt-4 flex items-start gap-2 text-sm text-zinc-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                Explore breathtaking destinations around the world and plan
                your perfect getaway with Wanderlust.
              </span>
            </p>
            
          </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
        
        <div className=" flex flex-col gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support */}
          <nav aria-label="Support">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Support
            </h3>
            <ul className="mt-4 space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Stay in the loop
            </h3>
            <p className="mt-4 text-sm text-zinc-400">
              Subscribe for travel deals, new destinations, and hidden gems.
            </p>
            <form className="mt-4 flex items-stretch gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email address"
                className="w-full rounded-none bg-zinc-800 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="rounded-none bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-zinc-400 sm:flex-row sm:px-6">
          <p>© 2026 Wanderlust. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
