import React from "react";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";

export const metadata = {
  title: "Projects | Portfolio",
  description: "Explore my projects and work",
};

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}