import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ExperienceSection from "../components/ExperienceSection";
import Technologies from "../components/Technologies";
import ProjectSection from "../components/ProjectSection";
import LanguagesSection from "../components/LanguagesSection";
import ContactSection from "../components/ContactSection";

export const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">

            <Navbar />

            <HeroSection />

            <ExperienceSection />

            <Technologies />

            <ProjectSection/>

            <LanguagesSection/>

            <ContactSection/>

            <Footer />
            
        </div>
    );
};
