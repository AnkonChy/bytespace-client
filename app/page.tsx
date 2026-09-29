
import Courses from "./components/Courses";
import FeaturesOverview from "./components/FeaturesOverview";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LearningPath from "./components/LearningPath";
import Navbar from "./components/Navbar";
import Partner from "./components/Partner";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Partner />
      <Courses />
      <LearningPath/>
      {/* <FeaturesOverview/> */}
      <Testimonials/>
      <Footer />
    </main>
  );
}
