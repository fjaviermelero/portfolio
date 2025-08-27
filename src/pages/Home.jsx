import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectSection from "../components/ProjectSection";

export const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">

            <Navbar />

            <HeroSection />

            <ExperienceSection />

            <ProjectSection/>

            <Footer />
            
        </div>
    );
};
