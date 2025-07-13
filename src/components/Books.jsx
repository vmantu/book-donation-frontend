import React, { useEffect, useState } from "react";
import { GraduationCap, Layers, BookOpen } from "lucide-react";
import axios from "axios";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  useEffect(() => {
    axios
    axios.get("https://apnavilla.org/bookdonation/wp-json/wp/v2/book?per_page=100&_embed")

      .then((res) => {
        setBooks(res.data);
        setFilteredBooks(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Filter logic
  useEffect(() => {
    let filtered = books;

    if (selectedClass) {
      filtered = filtered.filter((book) =>
        book.title.rendered.toLowerCase().includes(selectedClass.toLowerCase())
      );
    }

    if (selectedSubject) {
      filtered = filtered.filter((book) =>
        book.title.rendered.toLowerCase().includes(selectedSubject.toLowerCase())
      );
    }

    setFilteredBooks(filtered);
  }, [selectedClass, selectedSubject, books]);

  return (
    <section id="books" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white text-center">
          📚 Available Books
        </h2>

        {/* Filter Bar */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mb-10 bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border dark:border-gray-700">
          {/* Class Filter */}
          <div>
            <label className="flex items-center gap-2 mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <GraduationCap size={16} /> Class
            </label>
            <select
              className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white px-3 py-2 rounded-md text-sm"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="">All</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="5th">5th</option>
              <option value="8th">8th</option>
              <option value="10th">10th</option>
              <option value="12th">12th</option>
              <option value="college">College</option>
            </select>
          </div>

          {/* Subject Filter */}
          <div>
            <label className="flex items-center gap-2 mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <Layers size={16} /> Subject
            </label>
            <select
              className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white px-3 py-2 rounded-md text-sm"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="">All</option>
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
              <option value="math">Math</option>
              <option value="science">Science</option>
              <option value="history">History</option>
            </select>
          </div>

          {/* Reset Button */}
          <div className="flex items-end justify-end">
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
              onClick={() => {
                setSelectedClass("");
                setSelectedSubject("");
              }}
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Books Grid */}
        {filteredBooks.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">No books found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book) => {
              const featuredMedia = book._embedded?.["wp:featuredmedia"]?.[0];
              const coverImage = featuredMedia?.source_url;

              return (
                <div
                  key={book.id}
                  className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-xl"
                >
                  {coverImage ? (
                    <img
                      src={coverImage}
                      alt={book.title.rendered}
                      className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
                      <BookOpen size={32} />
                    </div>
                  )}
                  <div className="p-4">
                    <h3
                      className="text-md font-semibold text-gray-800 dark:text-white mb-2"
                      dangerouslySetInnerHTML={{ __html: book.title.rendered }}
                    />
                    <a
                      href={book.link}
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Book
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
