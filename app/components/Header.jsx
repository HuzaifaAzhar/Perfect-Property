import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      {/* Top bar */}
      <div className="bg-neutral-900 text-neutral-100 text-sm py-3">
        <div className="max-w-7xl mx-auto px-4 text-center">
          Email:{" "}
          <a
            href="mailto:admin@citadelhousingandhomelessservices.org.uk"
            className="underline"
          >
            admin@citadelhousingandhomelessservices.org.uk
          </a>{" "}
          | Phone:{" "}
          <a href="tel:+447447914864" className="underline">
            +44 7447 914864
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-[#d9d5cd]">
        <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/CITADEL-HOUSING.png"
              alt="Citadel Housing"
              width={228}
              height={101}
              priority
            />
          </Link>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-black">
            <Link href="/">About Us</Link>
            <Link href="/candidate-services">Candidate Services</Link>
            <Link href="/cv">
              Quick Drop CV
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
