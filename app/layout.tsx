import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Beth G — Executive Virtual Assistant",
  description:
    "Strategic executive virtual assistance for founders, consultants, and growing businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* HEADER */}
        <header className="w-full border-b">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              Beth G
            </Link>

            <nav className="space-x-6 text-sm font-medium">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="border-t mt-24">
          <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-600">
            <p className="font-semibold text-gray-900">
              Beth G — Executive Virtual Assistant
            </p>
            <p className="mt-2 max-w-xl">
              Supporting founders and teams with structured, discreet, and
              reliable executive assistance.
            </p>

            <p className="mt-4">
              Email:{" "}
              <a
                href="mailto:bethgexecutiveva@gmail.com"
                className="underline"
              >
                bethgexecutiveva@gmail.com
              </a>
            </p>

            <p className="mt-6 text-xs text-gray-400">
              © {new Date().getFullYear()} Beth G. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
