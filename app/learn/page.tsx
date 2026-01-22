export const metadata = {
  title: "Learn Remote Work & Online Skills | Beth G",
  description:
    "Step-by-step guidance for beginners who want to work online, learn digital tools, and succeed in remote jobs.",
};

const lessons = [
  {
    topic: "Essential Skills to Start Working Online",
    content: "Time management, communication, basic computer literacy, and organization are key starting skills.",
  },
  {
    topic: "Recommended Tools for Beginners",
    content: "Google Workspace, Trello, Asana, Slack, Zoom, Canva, Notion — these help you manage tasks and collaborate online.",
  },
  {
    topic: "Finding Remote Job Opportunities",
    content: "Look on platforms like Upwork, Fiverr, Remote.co, and LinkedIn. Start small, build a portfolio, and network.",
  },
  {
    topic: "Building a Professional Online Presence",
    content: "Have a LinkedIn profile, a simple portfolio, and consistently showcase your skills. Personal branding matters.",
  },
  {
    topic: "Learning Continuously",
    content: "Upskill through free courses, YouTube tutorials, or mentorship programs. Practical experience is just as important as theory.",
  },
];

export default function LearnPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Learn Remote Work & Online Skills
      </h1>

      <div className="space-y-10">
        {lessons.map((lesson, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-semibold mb-3">{lesson.topic}</h2>
            <p className="text-gray-700 prose prose-lg">{lesson.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
