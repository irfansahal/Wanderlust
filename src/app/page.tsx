
import Hero from "@/components/Hero";
import WhyChoose from "@/components/whyChoceUs";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <main className="flex flex-1 flex-col">
        <Hero />
        <WhyChoose/>
        <CtaSection />
      </main>
      
    </div>
  );
}
