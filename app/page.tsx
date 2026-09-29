import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero/>
    </main>
  );
}
