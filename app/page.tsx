import { Metadata } from "next";
import Hero from "./components/Hero";
import SectionHeading from "./components/SectionHeading";
import ServiceCard from "./components/ServiceCard";
import { heroContent, stats, services, seoData } from "./data/dummy";

export const metadata: Metadata = {
  title: seoData.home.title,
  description: seoData.home.description,
};

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      <Hero
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        image={heroContent.heroImage}
        imageAlt="Tim MoversHub sedang mengangkut barang pindahan rumah"
      />
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
        {stats.map((stat) => (
          <div key={stat.id} className="text-center">
            <p className="text-3xl font-bold text-emerald-600">{stat.value}</p>
            <p className="text-sm text-slate-600">{stat.label}</p>
          </div>
        ))}
      </section>
      <section className="py-10">
        <SectionHeading
          title="Layanan Jasa Angkut MoversHub"
          description="Solusi pindahan rumah, kantor, kendaraan, dan logistik bisnis di seluruh Indonesia."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}
