export default function ServicesPage() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-neutral-900 text-white py-24 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
        <p className="mt-6 max-w-3xl mx-auto text-gray-300">
          Specialist recruitment and operational support for serviced apartments,
          short-let accommodation, and property operators across the UK.
        </p>
      </section>

      {/* Image Section */}
      <section className="max-w-6xl mx-auto px-6 -mt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/image6.jpg"
              alt="Serviced apartment operations"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/image7.jpg"
              alt="Short-let and property consultancy"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Temporary & Contract Staffing",
            text: "Skilled interim professionals to support serviced apartment and short-let operations during peak demand, expansion, or change."
          },
          {
            title: "Permanent Recruitment",
            text: "Carefully vetted candidates aligned with your brand standards, operational needs, and guest experience expectations."
          },
          {
            title: "Operational Consultancy",
            text: "Expert support across property operations, short-let compliance, guest services, housekeeping coordination, and service optimisation."
          }
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
