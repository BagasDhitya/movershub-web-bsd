// data/dummy.ts

export interface Service {
  id: string;
  slug: string;
  title: string;
  category:
    | "Angkut Rumahan"
    | "Angkut Kantor"
    | "Angkut Kendaraan"
    | "Logistik Bisnis";
  shortDescription: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  message: string;
  rating: number;
  avatar: string;
}

// ==================== HOME PAGE ====================
export const heroContent = {
  title: "Solusi Pindahan & Angkut Barang Terpercaya",
  subtitle:
    "MoversHub membantu Anda memindahkan rumah, kantor, hingga kendaraan dengan aman, cepat, dan harga transparan di seluruh Indonesia.",
  ctaText: "Pesan Sekarang",
  heroImage:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
};

export const stats = [
  { id: "1", label: "Pindahan Selesai", value: "12,500+" },
  { id: "2", label: "Kota Terjangkau", value: "80+" },
  { id: "3", label: "Rating Pelanggan", value: "4.9/5" },
  { id: "4", label: "Armada Aktif", value: "350+" },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Dewi Anggraini",
    location: "Jakarta Selatan",
    message:
      "Proses pindahan rumah jadi jauh lebih mudah. Tim MoversHub datang tepat waktu dan barang sampai tanpa lecet sedikit pun.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: "t2",
    name: "Rizky Pratama",
    location: "Bandung",
    message:
      "Harga jelas dari awal, tidak ada biaya tersembunyi. Sangat recommended untuk pindahan kantor.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    id: "t3",
    name: "Siti Nurhaliza",
    location: "Surabaya",
    message:
      "Driver ramah dan profesional. Barang antik saya dibungkus dengan sangat hati-hati.",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

// ==================== ABOUT PAGE ====================
export const companyInfo = {
  name: "MoversHub",
  tagline: "Mitra Logistik Terpercaya Sejak 2015",
  description:
    "MoversHub adalah perusahaan jasa angkut dan logistik yang berfokus pada layanan pindahan rumah, kantor, kendaraan, dan pengiriman barang bisnis. Kami hadir untuk menghilangkan stres dari proses pindahan Anda.",
  mission:
    "Menjadi platform logistik terdepan yang menghubungkan masyarakat Indonesia dengan layanan angkut barang yang aman, efisien, dan terjangkau.",
  foundedYear: 2015,
  address: "Jl. Gatot Subroto No. 45, Jakarta Selatan, DKI Jakarta",
  aboutImage:
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80",
};

export const teamMembers: TeamMember[] = [
  {
    id: "tm1",
    name: "Andi Wijaya",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    id: "tm2",
    name: "Maria Ulfah",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: "tm3",
    name: "Fajar Nugroho",
    role: "Head of Logistics",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
];

export const companyValues = [
  {
    id: "v1",
    title: "Keamanan Barang",
    description:
      "Setiap barang diasuransikan dan dikemas sesuai standar keamanan.",
  },
  {
    id: "v2",
    title: "Ketepatan Waktu",
    description: "Jadwal penjemputan dan pengantaran yang selalu tepat waktu.",
  },
  {
    id: "v3",
    title: "Harga Transparan",
    description: "Tidak ada biaya tersembunyi, semua rincian jelas di awal.",
  },
];

// ==================== PRODUCT / SERVICES PAGE ====================
export const services: Service[] = [
  {
    id: "s1",
    slug: "angkut-pindahan-rumah",
    title: "Jasa Angkut Pindahan Rumah",
    category: "Angkut Rumahan",
    shortDescription: "Pindahan rumah tanpa ribet dengan tim profesional.",
    description:
      "Layanan pindahan rumah lengkap mulai dari packing, angkut, hingga penataan barang di lokasi baru. Cocok untuk rumah tipe studio hingga rumah besar.",
    price: "Mulai Rp 500.000",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    features: [
      "Packing profesional",
      "Asuransi barang",
      "Tim berpengalaman",
      "Armada tertutup",
    ],
  },
  {
    id: "s2",
    slug: "angkut-pindahan-kantor",
    title: "Jasa Angkut Pindahan Kantor",
    category: "Angkut Kantor",
    shortDescription:
      "Relokasi kantor cepat tanpa mengganggu operasional bisnis.",
    description:
      "Kami membantu pemindahan peralatan kantor, dokumen, dan furnitur dengan jadwal fleksibel di luar jam kerja agar bisnis Anda tetap berjalan.",
    price: "Mulai Rp 1.500.000",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    features: [
      "Jadwal fleksibel",
      "Tim khusus dokumen",
      "Bongkar pasang furnitur",
      "Garansi keamanan",
    ],
  },
  {
    id: "s3",
    slug: "jasa-angkut-kendaraan",
    title: "Jasa Angkut Kendaraan",
    category: "Angkut Kendaraan",
    shortDescription: "Kirim mobil atau motor antar kota dengan aman.",
    description:
      "Layanan towing dan pengiriman kendaraan menggunakan car carrier untuk mobil dan truk tertutup untuk motor, menjangkau seluruh Pulau Jawa dan Sumatra.",
    price: "Mulai Rp 800.000",
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80",
    features: [
      "Car carrier",
      "Asuransi kendaraan",
      "Tracking real-time",
      "Jangkauan antar pulau",
    ],
  },
  {
    id: "s4",
    slug: "logistik-bisnis",
    title: "Logistik & Pengiriman Bisnis",
    category: "Logistik Bisnis",
    shortDescription: "Solusi pengiriman rutin untuk kebutuhan bisnis Anda.",
    description:
      "Layanan logistik B2B untuk pengiriman stok barang, bahan baku, dan distribusi produk secara berkala dengan kontrak kerja sama jangka panjang.",
    price: "Custom (hubungi sales)",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    features: [
      "Kontrak berlangganan",
      "Armada besar",
      "Dashboard tracking",
      "Dedicated support",
    ],
  },
];

// ==================== SEO / METADATA HELPERS ====================
export const seoData = {
  home: {
    title: "MoversHub — Jasa Angkut & Pindahan Terpercaya di Indonesia",
    description:
      "MoversHub menyediakan jasa angkut rumah, kantor, kendaraan, dan logistik bisnis dengan harga transparan dan tim profesional di 80+ kota.",
  },
  about: {
    title: "Tentang Kami | MoversHub",
    description:
      "Kenali MoversHub, perusahaan jasa logistik dan pindahan terpercaya sejak 2015 yang telah melayani lebih dari 12.500 pelanggan di Indonesia.",
  },
  product: {
    title: "Layanan Kami | MoversHub",
    description:
      "Jelajahi layanan MoversHub: angkut pindahan rumah, kantor, kendaraan, hingga logistik bisnis dengan harga terjangkau dan aman.",
  },
};
