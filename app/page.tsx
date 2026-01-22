import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 font-sans">
      {/* Hero Section */}
      <section className="text-center py-32 px-6 sm:px-16">
        <h1 className="text-5xl font-bold mb-4">
          Beth G — Executive Virtual Assistant
        </h1>
        <p className="text-xl max-w-xl mx-auto mb-6">
          I support founders, consultants, and growing businesses with strategic executive assistance built on clarity, discretion, and results. I handle your admin so you can focus on what you do best.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/services" className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Explore Services
          </Link>
          <Link href="/contact" className="px-6 py-3 border border-gray-900 rounded-lg hover:bg-gray-100 transition">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Features / Offerings */}
      <section className="py-24 px-6 sm:px-16 bg-white dark:bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-12">What I Offer</h2>
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Executive Support</h3>
            <p>Calendar management, scheduling, correspondence, and strategic business support tailored to your needs.</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Digital Skills Guidance</h3>
            <p>Training and support for online tools, productivity apps, and systems to streamline your workflows.</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Civic & Educational Support</h3>
            <p>Resources and guidance on civic education, online learning, and personal development for you and your team.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 sm:px-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">What services do you provide?</summary>
            <p className="mt-2">I provide executive assistance, online skills guidance, digital tools support, and civic education.</p>
          </details>
          <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">How do I hire you?</summary>
            <p className="mt-2">You can contact me via the contact page or email. Payment options will be available through Flutterwave integration soon.</p>
          </details>
          <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">Can I request custom services?</summary>
            <p className="mt-2">Absolutely! I tailor support packages to your business needs. Contact me for a consultation.</p>
          </details>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 sm:px-16 text-center bg-gray-100 dark:bg-gray-700">
        <h2 className="text-3xl font-semibold mb-6">Ready to get started?</h2>
        <p className="mb-6 max-w-xl mx-auto">Let’s work together to streamline your business, save your time, and grow your impact.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact" className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Hire Me
          </Link>
          <Link href="/services" className="px-6 py-3 border border-gray-900 rounded-lg hover:bg-gray-100 transition">
            View Services
          </Link>
        </div>
      </section>

      {/* Social & Contact */}
      <section className="py-16 px-6 sm:px-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Connect with Me</h2>
        <div className="flex justify-center gap-6 flex-wrap mb-6">
          <a href="mailto:bethgexecutiveva@gmail.com" className="hover:underline">Email</a>
          <a href="https://instagram.com/bethgexecutiveva" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
          <a href="https://twitter.com/bethexecutiveva" target="_blank" rel="noopener noreferrer" className="hover:underline">X</a>
          <a href="https://www.youtube.com/@BethGExecutiveVA" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a>
          <a href="https://www.tiktok.com/@bethgexecutiveva" target="_blank" rel="noopener noreferrer" className="hover:underline">TikTok</a>
          <a href="https://www.facebook.com/bethgtheexecutiveva" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
          <a href="https://www.linkedin.com/in/beth-g-/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Beth G. All rights reserved.
        </p>
      </section>
    </div>
  );
}
