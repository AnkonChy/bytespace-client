import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partner from "./components/Partner";


export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero/>
      <Partner/>
      <Footer/>
    </main>
  );
}
