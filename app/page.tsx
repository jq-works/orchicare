import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSolution/>
      
      {/* Nanti kita letakkan section lain di bawah sini */}
      {/* <ProblemSolutionSection /> */}
      {/* <LinkHubSection /> */}
      {/* <TeamSection /> */}
    </>
  );
}