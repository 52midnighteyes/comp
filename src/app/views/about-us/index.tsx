import CompanyProfileSection from "./sections/company-history";
import CultureSection from "./sections/culture";
import TeamSection from "./sections/team-section";

export default function AboutUsView() {
  return (
    <div className="relative">
      <h1 className="flex items-center justify-center text-4xl font-extrabold text-[#4B3B00] bg-white drop-shadow-sm pt-20">
        Who’s Behind the Magic?
      </h1>{" "}
      <CompanyProfileSection />
      <TeamSection />
      <CultureSection />
    </div>
  );
}
