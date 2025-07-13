import { motion } from "framer-motion";
import BookCard from "../components/BookCard";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Home = () => (
  <div>
    {/* Hero Section */}
    <section className="h-[100vh] bg-gradient-to-br from-blue-100 to-pink-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center text-center px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="text-4xl md:text-6xl font-bold">Donate Books. Build Futures.</h1>
        <p className="text-lg mt-4">Help children and students by giving your books a second life.</p>
        <div className="mt-6 space-x-4">
          <a href="/donate" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300">Donate Now</a>
          <a href="/my-donations" className="border border-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-all duration-300">My Donations</a>
        </div>
      </motion.div>
    </section>

    {/* How It Works */}
    <section className="py-16 px-4 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {["📥 Donate a Book", "🕵️ We Review & Approve", "🎁 Delivered to Child"].map((text, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 + i * 0.2 }}
            className="p-6 bg-pink-100 dark:bg-pink-800 rounded-2xl shadow text-lg font-semibold"
          >
            {text}
          </motion.div>
        ))}
      </div>
    </section>

    {/* Book Cards */}
    <section className="py-16 px-4 bg-blue-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Popular Categories</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[{
          title: "Math - Class 8", level: "8th", board: "CBSE"
        }, {
          title: "Physics - Class 12", level: "12th", board: "MP Board"
        }, {
          title: "English - Nursery", level: "Nursery", board: "NCERT"
        }, {
          title: "Economics - B.Com", level: "College", board: "UGC"
        }].map((book, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 + i * 0.2 }}
          >
            <BookCard
              title={book.title}
              classLevel={book.level}
              board={book.board}
              image="https://via.placeholder.com/150"
            />
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Home;
