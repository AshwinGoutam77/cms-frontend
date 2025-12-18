import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import Customer from "@/components/Customer";

export default function Home() {
  return (
    <div className=" bg-[#0d1a2b]">
      <Header />
      <Hero />
      {/* <Partners /> */}
      <Services />
      {/*<Customer />
      <Stats />
      <Footer /> */}
    </div>
  );
}
