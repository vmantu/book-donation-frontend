// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BannerSlider from './components/BannerSlider';
import HowItWorks from './components/HowItWorks';
import Books from './components/Books'; // ✅ Newly added

function App() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Header />

      <main className="pt-20 space-y-20">
        <section id="home">
          <BannerSlider />
        </section>

        <section id="books">
          <Books />
        </section>

        <section id="about" className="p-10">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p>We are on a mission to donate educational books free of cost to those in need.</p>
        </section>

        <section id="how-it-works">
          <HowItWorks />
        </section>


        <section id="contact" className="p-10">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p>Email: support@pustakdaan.org | Phone: 123-456-7890</p>
        </section>

        <section id="account" className="p-10">
          <h2 className="text-3xl font-bold">My Account</h2>
          <p>Check your donations via mobile number.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
