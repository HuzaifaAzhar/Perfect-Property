export default function ServicesPage() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-neutral-900 text-white py-24 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
        <p className="mt-6 max-w-3xl mx-auto text-gray-300">
          Specialist recruitment and operational support for housing, homelessness,
          and community-based services across the UK.
        </p>
      </section>

      {/* Image Section */}
      <section className="max-w-6xl mx-auto px-6 -mt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/image6.jpg"
              alt="Housing and community services"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/image7.jpg"
              alt="Professional housing consultancy"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-10">
        {[{
          title: "Temporary & Contract Staffing",
          text: "Reliable interim professionals to maintain service continuity during change, growth, or high demand."
        },{
          title: "Permanent Recruitment",
          text: "Carefully vetted candidates who align with your organisation’s culture, values, and regulatory requirements."
        },{
          title: "Operational Consultancy",
          text: "Support across housing management, homelessness prevention, ASB, income recovery, and service improvement."
        }].map((item) => (
          <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
