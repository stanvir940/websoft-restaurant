import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto px-6 py-12">
        <Link to="/">
          <button className="py-2 px-4 bg-[#79ADDC] rounded text-white my-4">
            ◀️ Home
          </button>
        </Link>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your interest in our services. We'd love to hear from
          you!
        </p>

        {/* Company Info */}
        <div className="space-y-4 text-gray-700 mb-12">
          <p>
            <span className="font-semibold">📍 Address:</span> Majid Sarani,
            Khulna, Bangladesh
          </p>
          <p>
            <span className="font-semibold">📞 Phone:</span> +880 1814-067593
          </p>
          <p>
            <span className="font-semibold">📧 Email:</span>{" "}
            web.soft003@gmail.com
          </p>
          <p>
            <span className="font-semibold">🌐 Website:</span>{" "}
            <a
              href="https://yourcompany.com"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://web-soft.com
            </a>
          </p>
          <p>
            <span className="font-semibold">🕒 Business Hours:</span> Mon - Fri:
            11:00 AM – 11:30 PM
          </p>
        </div>

        {/* Office Gallery */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4"></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src="/image.png"
              alt="Office 1"
              className="rounded-xl shadow-md object-cover w-full h-48"
            />
            <img
              src="/image1.png"
              alt="Office 2"
              className="rounded-xl shadow-md object-cover w-full h-48"
            />
            <img
              src="/image2.png"
              alt="Office 3"
              className="rounded-xl shadow-md object-cover w-full h-48"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
