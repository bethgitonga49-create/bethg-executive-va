export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8">
        Executive Virtual Assistant Services
      </h1>

      <p className="text-lg text-gray-600 mb-14">
        I support founders, executives, and growing teams with reliable,
        detail-driven virtual assistance so you can focus on what matters most.
      </p>

      {/* SERVICE CARD */}
      <div className="border rounded-2xl p-8 mb-12 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">
          Monthly Executive VA Support
        </h2>

        <p className="text-gray-600 mb-6">
          Ongoing support tailored to your workflow — inbox management,
          scheduling, research, documentation, follow-ups, and operations.
        </p>

        <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
          <li>Email & calendar management</li>
          <li>Meeting preparation & follow-ups</li>
          <li>Research & reporting</li>
          <li>Process documentation</li>
          <li>Admin & operational support</li>
        </ul>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-xl font-semibold">
            Starting from <span className="text-green-600">$XXX / month</span>
          </p>

          <a
            href="https://checkout.flutterwave.com/v3/hosted/pay/YOUR_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 text-center"
          >
            Pay & Start Working Together
          </a>
        </div>
      </div>

      {/* SECOND CTA */}
      <div className="text-center">
        <p className="text-gray-600 mb-4">
          Not sure which option fits your needs?
        </p>

        <a
          href="/contact"
          className="inline-block px-6 py-3 border border-black rounded-lg hover:bg-black hover:text-white"
        >
          Talk to Me First
        </a>
      </div>
    </div>
  );
}
