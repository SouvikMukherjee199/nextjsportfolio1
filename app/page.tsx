import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="relative overflow-clip bg-black-100 flex justify-center items-center flex-col mx-auto  px-5 sm:px-10 ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        {/* <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome size={24} color="white"/> }
        ]}/> */}
        <Hero/>
        <Grid/>
        <RecentProjects/>
        {/* <Clients/> */}
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}
