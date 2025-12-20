import React from "react";

export default function CitadelLayout() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <img
          src="/house.jpeg"
          alt="Serviced apartments and short-let accommodation"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Apartment & Short-Let Accommodation Across the UK
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Flexible apartment and short-stay solutions for individuals, families,
            and organisations nationwide.
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
            Perfect Property & Relocation Solutions works with apartment providers,
            short-let operators, and local partners to source high-quality,
            fully managed accommodation.
          </p>
          <p>
            We understand the importance of flexibility, compliance, and comfort.
            Our focus is on well-located apartments that support short-term stays
            while maintaining high living standards.
          </p>
        </div>
      </section>

      {/* Image Break */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <img
            src="/image4.jpg"
            alt="Modern serviced apartment interior"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Value Cards */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {["Apartment Expertise", "Flexible Short-Lets", "Guest-Focused"].map((title) => (
            <div key={title} className="rounded-2xl border p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <p className="text-sm text-gray-600">
                We specialise in serviced apartments and short-let accommodation,
                delivering flexible stays with consistent quality and care.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
