// app/page.tsx
import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import Projects from "@/components/shared/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-foreground/10 ">
      <Header />
      <main className="container mx-auto px-6 ">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}