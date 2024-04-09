import { siteConfig } from "@/lib/siteConfig";
import About from "./_components/about";
import HeroSection from "./_components/hero-section";
import Impact from "./_components/impact";
import Team from "./_components/team";
import Video from "./_components/video";
import Footer from "./_components/footer";

const page = () => {
  return (
    <div>
      <HeroSection />
      <div className="lg:px-32 px-16 font-medium scroll-smooth">
        <About />
        <Impact />
        <Video
          url={siteConfig.videos[0].url}
          title={siteConfig.videos[0].title}
        />
        <Team />
        <Footer/>
      </div>
    </div>
  );
};

export default page;
