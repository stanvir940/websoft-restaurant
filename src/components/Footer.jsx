import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12 py-6 text-center text-sm text-gray-600">
      <div className="max-w-7xl mx-auto">
        <p>
          &copy; {new Date().getFullYear()} RedFort Web Agency. All rights
          reserved.
        </p>
        <p className="mt-2">Built with ❤️ using React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
