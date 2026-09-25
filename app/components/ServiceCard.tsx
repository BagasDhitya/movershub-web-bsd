import Link from "next/link";
import Image from "next/image";
import { Service } from "../data/dummy";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="border rounded-xl overflow-hidden hover:shadow-lg transition">
      <Image
        src={service.image}
        alt={`Layanan ${service.title} oleh MoversHub`}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-900">
          {service.title}
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          {service.shortDescription}
        </p>
        <p className="text-emerald-600 font-medium mt-2">{service.price}</p>
        <Link
          href={`/product/${service.slug}`}
          className="inline-block mt-3 text-sm text-emerald-700 underline"
        >
          Lihat Detail
        </Link>
      </div>
    </article>
  );
}
