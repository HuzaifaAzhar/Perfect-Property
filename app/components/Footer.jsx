import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#d9d5cd] py-16">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-10">
        <Image
          src="/CITADEL-HOUSING.png"
          alt="Citadel Housing"
          width={390}
          height={174}
          className="mx-auto"
        />

        <div className="flex flex-col md:flex-row justify-center gap-8 text-sm text-black">
          <Link href="/about-us">About Us</Link>
          <Link href="/candidate-services">Candidate Services</Link>
          <Link href="/cv">Quick Drop CV</Link>
        </div>
      </div>
    </footer>
  );
}
