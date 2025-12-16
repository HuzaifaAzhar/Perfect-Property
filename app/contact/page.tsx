import ContactForm from "@/components/ContactForm";
export default function ContactPage() {
  return (
    <main className="bg-gray-50 text-gray-800">
      <section className="bg-neutral-900 text-white py-24 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-6 text-gray-300">
          Get in touch to discuss recruitment, staffing, or consultancy support.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Company Details</h2>
          <p className="text-sm">
            <strong>Business Name:</strong><br />
            PERFECT PROPERTY AND RELOCATION SOLUTIONS LTD
          </p>
          <p className="text-sm">
            <strong>Address:</strong><br />
            Ace Carpentry Unit 9j, Eley Road,<br />
            London, United Kingdom, N18 3BB
          </p>
          <p className="text-sm">
            <strong>Telephone:</strong><br />
            07447 914864
          </p>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
