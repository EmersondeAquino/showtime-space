import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <ContactForm />
      <Contact />
    </div>
  );
};

export default Index;
