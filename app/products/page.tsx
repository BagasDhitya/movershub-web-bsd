import { Metadata } from "next";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";

import { services, seoData } from "../data/dummy";

// SSR
// -> proses rendering dilakukan oleh server Next.js
// -> cocok untuk halaman yang butuh refresh data cepat: misal /products

// peraturan menggunakan rendering SSR:
// -- tidak boleh menggunakan useState
// -- tidak boleh memanggil hooks seperti useMemo, useCallback, dll. (termasuk useEffect)

// CSR
// -> proses rendering dilakukan oleh Browser
// -> cocok untuk halaman yang interaktif (seperti admin dashboard)

// -- boleh menggunakan useState ataupun hooks lainnya

export const metadata: Metadata = {
  title: seoData.product.title,
  description: seoData.product.description,
};

console.log(
  "service data: ",
  services.map((item) => item),
);

export default function Products() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">
        Layanan Jasa Angkut & Logistik
      </h1>
      <SectionHeading
        description="Pilih layanan pindahan rumah, kantor, kendaraan, hingga logistik bisnis sesuai kebutuhan Anda."
        title=""
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </main>
  );
}
