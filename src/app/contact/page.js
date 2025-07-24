import React from "react";
import Navbar from "../components/Navbar";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact | Portfolio",
  description: "Get in touch with me",
};

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}