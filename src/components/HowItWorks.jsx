// src/components/HowItWorks.jsx
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="min-h-screen p-8 bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
      <ul className="list-disc ml-6 text-lg">
        <li>Submit your book donation</li>
        <li>Admin approves and publishes it</li>
        <li>Other users can contact you to get the book</li>
      </ul>
    </section>
  );
}
