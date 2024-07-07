import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/Floating-Navbar";
import Grid from "@/components/Grid";
import { navItems } from "@/data";
import RecentProjects from "@/components/Recent-Projects";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex relative bg-black-100 justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}