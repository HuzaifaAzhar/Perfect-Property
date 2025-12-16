"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("subject", "Contact Enquiry");

    const res = await fetch("/api/send-cv", {
      method: "POST",
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.target.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 shadow-sm border space-y-6"
    >
      {success && (
        <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-sm text-green-700">
          Your message has been sent successfully.
        </div>
      )}

      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          name="name"
          required
          className="mt-2 w-full rounded-lg border px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          className="mt-2 w-full rounded-lg border px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          name="message"
          required
          className="mt-2 w-full rounded-lg border px-4 py-2 h-32"
        />
      </div>

      <button
        disabled={loading}
        className="rounded-full bg-neutral-900 px-8 py-3 text-white font-semibold hover:bg-neutral-800 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
