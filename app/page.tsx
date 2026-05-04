import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      
      {/* Nanti kita letakkan section lain di bawah sini */}
      {/* <ProblemSolutionSection /> */}
      {/* <LinkHubSection /> */}
      {/* <TeamSection /> */}
    </>
  );
}