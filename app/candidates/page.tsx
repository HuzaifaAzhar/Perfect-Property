import Link from "next/link";

export default function CandidatesPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="bg-gray-100 py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Candidates</h1>
        <p className="mt-6 max-w-2xl mx-auto text-gray-600">
          Find meaningful work within housing and homelessness services, supported by consultants who understand your experience.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-12">
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
