import BlogPage from "./sections/blog-list";
import TopThreeBlogSneakPeek from "./sections/blog-list";
import OverviewSection from "./sections/company-overview-section";
import HeroSection from "./sections/hero-section";
import ProductSection from "./sections/prodcut:service section";
import TestimonialSection from "./sections/testimonials (dummy)";

export default function HomeView() {
  return (
    <div>
      <HeroSection />
      <OverviewSection />
      <ProductSection />
      <TestimonialSection />
      <BlogPage />
    </div>
  );
}
