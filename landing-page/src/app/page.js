import Image from "next/image";
import NavBar from "./components/navbar/NavBar";
import HomepageHero from "./herosection";
import Line from "./components/navbar/Line";

export default function Home() {
  return (
    <>
      <NavBar />
      
      
        <HomepageHero />
        <Line />

        <div className="h-96">

        </div>

      
    </>
  );
}
