import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <Image src="/logo.png" alt="Perfect Property & Relocation Solutions" width={180} height={80} />
          <p className="mt-6 text-sm text-gray-400">
            Delivering trusted housing professionals across the UK.
          </p>
        </div>

        <div className="space-y-4 text-sm">
          <p className="font-semibold text-white">Company</p>
          <Link href="/services" className="block hover:text-white">Services</Link>
          <Link href="/candidates" className="block hover:text-white">Candidates</Link>
          <Link href="/contact" className="block hover:text-white">Contact</Link>

        </div>

        <div className="space-y-4 text-sm">
          <p className="font-semibold text-white">Contact</p>
          <p>Email: admin@perfectpropertyandsolutionltd.net</p>
          <p>Phone: +44 7447 914864</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()}  Perfect Property & Relocation Solutions
      </div>
    </footer>
  );
}
