export default function QuickDropCV() {
  return (
    <main className="bg-neutral-50">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#8c8e98]">
          Quick Drop Your CV
        </h2>

        <form
          name="quick-drop-cv"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          encType="multipart/form-data"
          className="bg-white rounded-[2rem] shadow-[0_0.5em_5em_-3em_rgba(0,0,0,0.4)] p-8 md:p-12 space-y-6"
        >
          <input type="hidden" name="form-name" value="quick-drop-cv" />

          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          {/* Name */}
          <div>
            <label className="block mb-2 text-sm text-[#8c8e98]">Your name</label>
            <input
              name="name"
              required
              className="w-full bg-[#f4f4f4] rounded-lg px-4 py-3 focus:outline-neutral-700"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm text-[#8c8e98]">Your email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-[#f4f4f4] rounded-lg px-4 py-3"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block mb-2 text-sm text-[#8c8e98]">Subject</label>
            <input
              name="subject"
              required
              className="w-full bg-[#f4f4f4] rounded-lg px-4 py-3"
            />
          </div>

          {/* File */}
          <div>
  <label className="block mb-3 text-sm font-medium text-[#8c8e98]">
    Upload your CV
  </label>

  <label className="flex flex-col items-center justify-center w-full cursor-pointer rounded-xl border-2 border-dashed border-[#cfcfcf] bg-[#f9f9f9] px-6 py-10 text-center hover:bg-[#f4f4f4] transition">
    <span className="text-base font-medium text-[#545054]">
      Click to upload your CV
    </span>

    <span className="mt-2 text-sm text-[#8c8e98]">
      PDF, DOC, DOCX · Max 2MB
    </span>

    <input
      type="file"
      name="cv"
      accept=".pdf,.doc,.docx"
      required
      className="hidden"
    />
  </label>
</div>


          {/* Message */}
          <div>
            <label className="block mb-2 text-sm text-[#8c8e98]">
              Your message (optional)
            </label>
            <textarea
              name="message"
              rows={5}
              className="w-full bg-[#f4f4f4] rounded-lg px-4 py-3"
            />
          </div>

          {/* Submit */}
          <button className="w-full text-[#8c8e98] bg-[#403b40] text-white py-4 rounded-lg shadow-md hover:shadow-none transition">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
