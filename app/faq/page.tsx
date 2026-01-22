export const metadata = {
  title: "Frequently Asked Questions | Beth G — Executive VA",
  description:
    "Find answers to common questions about working with Beth G as your Executive Virtual Assistant.",
};

const faqs = [
  {
    question: "Who can benefit from your executive support?",
    answer:
      "Business owners, consultants, startup founders, and executives who want more clarity, time, and organization can benefit from my services.",
  },
  {
    question: "How do we communicate and collaborate?",
    answer:
      "I work primarily through email, messaging apps, and video calls. I set up systems tailored to your workflow, ensuring smooth communication and minimal disruptions.",
  },
  {
    question: "Can you handle confidential tasks?",
    answer:
      "Absolutely. Discretion and confidentiality are core to my services. You can trust me with sensitive documents, communications, and decisions.",
  },
  {
    question: "What kind of tasks can you handle?",
    answer:
      "Scheduling, email management, project coordination, research, document preparation, reminders, online tools management, and more — basically anything that helps you focus on strategic work.",
  },
  {
    question: "How do I get started?",
    answer:
      "Visit the <a href='/contact' className='text-blue-600 underline'>Contact page</a> and send a message. We’ll discuss your needs, goals, and how we can work together.",
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h1>

      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p className="text-gray-700 prose prose-lg">
              <span
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
