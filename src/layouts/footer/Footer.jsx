import React from "react";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="px-4 py-20 text-white bg-accent">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 mb-3 md:grid-cols-5">
          <a href="/" className="col-span-2 mb-12 md:col-span-1">
            <img src={Logo} alt="Logo" className="-mt-10 h-28" />
          </a>
          <nav className="mb-8">
            <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">
              Product
            </p>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Features
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Integrations
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Documentation
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              FAQs
            </a>
          </nav>
          <nav className="mb-8">
            <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">
              Tech
            </p>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Kutty
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Tailwind
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              React js
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Blog
            </a>
          </nav>
          <nav className="mb-8">
            <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">
              Contact
            </p>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Twitter
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Instagram
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Email
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Advertising
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Chat
            </a>
          </nav>
          <nav className="mb-8">
            <p className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase">
              Legal
            </p>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Affiliate Program
            </a>
            <a
              href="#"
              className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary"
            >
              Manage Cookies
            </a>
          </nav>
        </div>
        <p className="text-sm font-medium text-left text-gray-600 md:text-center">
          © Copyright 2023 Vocasia, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
