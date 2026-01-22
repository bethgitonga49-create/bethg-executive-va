export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-6">
          Thank You
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your payment was successful. I’ll reach out shortly to get started.
        </p>

        <a
          href="/"
          className="text-green-600 underline"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
