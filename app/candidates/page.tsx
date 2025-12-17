import Link from "next/link";

export default function CandidatesPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="relative bg-gray-100 py-28 px-6 text-center">
        <img
          src="/image1.jpg"
          alt="Housing professionals at work"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Candidates</h1>
          <p className="mt-6 text-gray-200">
            Find meaningful work within housing and homelessness services, supported by consultants who understand your experience.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-16">
        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          {["Flexible Opportunities", "Transparent Compliance", "Career Progression"].map((title) => (
            <div key={title} className="rounded-xl border p-6">
              <h3 className="font-semibold mb-3">{title}</h3>
              <p className="text-sm text-gray-600">
                We support you from registration to placement, ensuring clarity, fairness, and long-term growth.
              </p>
            </div>
          ))}
        </div>

        {/* Image Row */}
        <div className="grid md:grid-cols-3 gap-6">
          {["/image2.jpg", "/image3.jpg", "/image5.jpg"].map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src={img}
                alt="Housing and support work"
                className="w-full h-[220px] object-cover"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/cv"
            className="inline-block rounded-full bg-neutral-900 px-8 py-3 text-white font-semibold hover:bg-neutral-800"
          >
            Submit Your CV
          </Link>
        </div>
      </section>
    </main>
  );
}
