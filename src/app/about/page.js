import React from "react";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Me | Portfolio",
  description: "Learn more about my background, skills, and experience",
};

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}