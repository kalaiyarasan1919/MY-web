import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Link from "next/link";

export const metadata = {
  title: "Portfolio | Home",
  description: "Welcome to my portfolio website",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <div className="flex justify-center mt-8 mb-12">
          <Link
            href="/about"
            className="px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold mr-4"
          >
            Learn More About Me
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold"
          >
            View My Projects
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
