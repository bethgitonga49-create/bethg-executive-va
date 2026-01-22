import Link from "next/link";

export const metadata = {
  title: "Blog | Beth G — Executive Virtual Assistant",
  description:
    "Insights on executive assistance, digital work, productivity, and building sustainable online support systems.",
};

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>

      <p className="text-lg text-gray-600 mb-16 max-w-2xl">
        Thoughts, lessons, and practical guidance from my work supporting
        founders, consultants, and growing teams.
      </p>

      {/* BLOG LIST */}
      <div className="space-y-10">
        {/* BLOG ITEM */}
        <article className="border-b pb-8">
          <h2 className="text-2xl font-semibold mb-2">
            <Link
              href="/blog/why-founders-need-an-executive-va"
              className="hover:underline"
            >
              Why Founders Eventually Need an Executive Virtual Assistant
            </Link>
          </h2>

          <p className="text-gray-600 mb-4">
            As businesses grow, the cost of context switching, inbox overload,
            and operational chaos becomes expensive.
          </p>

          <Link
            href="/blog/why-founders-need-an-executive-va"
            className="text-sm font-medium underline"
          >
            Read article →
          </Link>
        </article>

        {/* PLACEHOLDER */}
        <p className="text-sm text-gray-400">
          More articles coming soon.
        </p>
      </div>
    </div>
  );
}
