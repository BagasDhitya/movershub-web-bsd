import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}

export default function Hero({ title, subtitle, image, imageAlt }: HeroProps) {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-12">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-600">{subtitle}</p>
      </div>
      <Image
        src={image}
        alt={imageAlt}
        width={800}
        height={500}
        className="rounded-xl object-cover w-full h-80"
      />
    </section>
  );
}
