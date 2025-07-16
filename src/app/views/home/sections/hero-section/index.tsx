import Video from "next-video";
import bcsProfile from "/videos/profile-bcs.mp4";
import bgBcs from "/public/bg-saul.jpg";

export default function HeroSection() {
  return (
    <section className="h-[700px] bg-[<bgBcs>] min-w-screen flex justify-center items-center gap-10">
      <div className=" bg-blue-700 flex flex-col items-center justify-center h-[700px] w-[600px]">
        <div className="flex font-bold text-left text-2xl">
          better call saul law firm
        </div>
        <div className="flex text-justify">
          Better Call Saul Law Firm is a boutique legal practice led by James
          "Saul" Goodman, a street-smart lawyer known for his bold courtroom
          tactics and creative legal solutions. Based in Albuquerque, New
          Mexico, we serve clients across a wide spectrum of legal needs — with
          a particular focus on criminal defense, civil litigation, and "problem
          solving" in legally gray areas.
        </div>
      </div>
      <div className=" bg-red-700 flex items-center h-[700px] w-auto">
        <Video width={400} src={bcsProfile} />
      </div>
    </section>
  );
}
