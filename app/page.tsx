import React from "react";

export default function CitadelLayout() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <img
          src="/house.jpeg"
          alt="Housing support"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Supporting Housing Across the UK</h1>
          <p className="mt-6 text-lg text-gray-200">
            Specialist recruitment and consultancy for housing, homelessness, and community services.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold">Who We Are</h2>
        </div>
        <div className="md:col-span-2 space-y-6 text-base leading-relaxed">
          <p>
            Perfect Property & Relocation Solutions partners with local authorities,
            housing associations, and charities to deliver reliable, compliant,
            and experienced professionals.
          </p>
          <p>
            Our consultants understand frontline pressure, regulation, and service
            delivery. We place talent that strengthens teams, improves outcomes,
            and protects vulnerable communities.
          </p>
        </div>
      </section>

      {/* Value Cards */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {["Sector Expertise", "Compliance First", "People Focused"].map((title) => (
            <div key={title} className="rounded-2xl border p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <p className="text-sm text-gray-600">
                We combine deep housing knowledge with transparent processes to
                deliver professionals you can trust.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
