import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "@/app/data/dummy";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | MoversHub`,
    description: service.shortDescription,
  };
}

export default async function ProductDetail({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">{service.title}</h1>
      <Image
        src={service.image}
        alt={`Ilustrasi layanan ${service.title} MoversHub`}
        width={800}
        height={450}
        className="rounded-xl w-full h-80 object-cover my-6"
      />
      <p className="text-slate-600">{service.description}</p>
      <p className="text-xl font-semibold text-emerald-600 mt-4">
        {service.price}
      </p>

      <section className="py-8">
        <h2 className="text-xl font-semibold text-emerald-600 mt-4">
          Fitur Layanan {service.title}
        </h2>
        <ul className="text-slate-600 space-y list-disc list-insidee">
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
