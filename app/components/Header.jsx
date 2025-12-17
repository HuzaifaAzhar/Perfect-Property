import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Preheader */}
      <div className="bg-neutral-900 text-gray-100 text-md">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <span>Email: admin@perfectpropertyandsolutionltd.net</span>
          <span>Phone: +44 7447914864</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Perfect Property & Relocation Solutions"
              width={160}
              height={70}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
            <Link href="/services" className="hover:text-black">Services</Link>
            <Link href="/candidates" className="hover:text-black">Candidates</Link>
            <Link href="/contact" className="hover:text-black">Contact</Link>
          </nav>

          <Link
            href="/cv"
            className="rounded-full bg-neutral-900 px-6 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            Submit CV
          </Link>
        </div>
      </header>
    </>
  );
}
