import About from "./_components/about";
import HeroSection from "./_components/hero-section";
import Impact from "./_components/impact";
import Team from "./_components/team";
import Video from "./_components/video";

const page = () => {
  return (
    <div>
      <HeroSection />
      <div className="lg:px-32 px-16 font-medium scroll-smooth">
        <About />
        <Impact />
        <Video />
        <Team />
      </div>
    </div>
  );
};

export default page;
