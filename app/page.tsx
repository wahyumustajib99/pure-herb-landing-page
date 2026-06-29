"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { 
  IoMenu, IoClose, IoLeaf, IoCheckmarkCircle, 
  IoCall, IoMail, IoLocation, IoLogoWhatsapp,
  IoChevronDown
} from "react-icons/io5";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  // State untuk Counter (Statistik)
  const [counts, setCounts] = useState({ clients: 0, products: 0, experts: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        clients: prev.clients < 1500 ? prev.clients + 25 : 1500,
        products: prev.products < 45 ? prev.products + 1 : 45,
        experts: prev.experts < 12 ? prev.experts + 1 : 12,
      }));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Data Slide Gambar (Minimal 5 Gambar)
  const slides = [
    { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80", title: "Kebaikan Alami untuk Tubuh Anda", desc: "Diproses dari ekstrak tanaman herbal pilihan tanpa bahan kimia berbahaya." },
    { url: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1200&q=80", title: "Ekstrak Murni 100% Organik", desc: "Menjaga imunitas dan vitalitas keluarga Anda secara natural setiap hari." },
    { url: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1200&q=80", title: "Warisan Leluhur Teknologi Modern", desc: "Standardisasi laboratorium tinggi untuk menghasilkan khasiat maksimal." },
    { url: "https://images.unsplash.com/photo-1563483783225-b46183d2c184?auto=format&fit=crop&w=1200&q=80", title: "Suplemen Kesehatan Premium", desc: "Telah teruji klinis aman dikonsumsi untuk investasi kesehatan jangka panjang." },
    { url: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=1200&q=80", title: "Hidup Sehat Mulai Dari Sekarang", desc: "Kembali ke alam bersama Pure Herb demi kualitas hidup yang lebih baik." }
  ];

  // Data Produk
  const products = [
    { name: "Pure Herb ImmunCaps", cat: "capsule", price: "Rp 145.000", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80" },
    { name: "Teh Hijau Matcha Organik", cat: "tea", price: "Rp 85.000", img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=400&q=80" },
    { name: "Madu Hutan Multiflora", cat: "liquid", price: "Rp 120.000", img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80" },
    { name: "Curcuma Detox Capsule", cat: "capsule", price: "Rp 110.000", img: "https://images.unsplash.com/photo-1611070973770-b1a6726b0c6a?auto=format&fit=crop&w=400&q=80" },
  ];

  // Data FAQ Toggle State Helper (Disederhanakan menggunakan index)
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      
      <nav className="fixed top-0 inset-x-0 bg-white/90 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-emerald-700 font-black text-2xl tracking-wide">
            <IoLeaf /> PURE<span className="text-stone-800 font-medium">HERB</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 font-medium text-sm text-stone-600">
            <a href="#home" className="hover:text-emerald-600 transition">Home</a>
            <a href="#tentang" className="hover:text-emerald-600 transition">Tentang</a>
            <a href="#produk" className="hover:text-emerald-600 transition">Produk</a>
            <a href="#tim" className="hover:text-emerald-600 transition">Tim Kami</a>
            <a href="#testimoni" className="hover:text-emerald-600 transition">Testimoni</a>
            <a href="#faq" className="hover:text-emerald-600 transition">FAQ</a>
            <a href="#kontak" className="bg-emerald-600 text-white px-5 py-2.5 rounded-full shadow-md shadow-emerald-600/10 hover:bg-emerald-700 transition">Hubungi Kami</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-2xl text-stone-800">
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-4 flex flex-col gap-4 font-semibold text-stone-700">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#tentang" onClick={() => setIsMenuOpen(false)}>Tentang</a>
            <a href="#produk" onClick={() => setIsMenuOpen(false)}>Produk</a>
            <a href="#tim" onClick={() => setIsMenuOpen(false)}>Tim Kami</a>
            <a href="#testimoni" onClick={() => setIsMenuOpen(false)}>Testimoni</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <a href="#kontak" onClick={() => setIsMenuOpen(false)} className="bg-emerald-600 text-white text-center py-2.5 rounded-xl">Hubungi Kami</a>
          </div>
        )}
      </nav>

      <section id="home" className="pt-20">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="h-[550px] sm:h-[650px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative w-full h-full">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url('${slide.url}')` }}
              >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
              </div>
              <div className="relative max-w-5xl mx-auto h-full flex flex-col justify-center items-center text-center px-6 text-white space-y-6">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight max-w-4xl">{slide.title}</h2>
                <p className="text-base sm:text-xl text-stone-200 max-w-2xl">{slide.desc}</p>
                <a href="#produk" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-full transition shadow-lg shadow-emerald-900/20">Lihat Katalog Produk</a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section id="tentang" className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
          <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80" alt="About Pure Herb" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-6">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs block">Tentang Pure Herb</span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 leading-tight">Berdedikasi Menyediakan Solusi Kesehatan Alami Terbaik</h2>
          <p className="text-stone-600 leading-relaxed">Pure Herb lahir dari visi mendalam untuk menyatukan khasiat herbal tradisional Indonesia dengan standar pemrosesan modern. Kami memastikan siklus rantai produksi bebas dari kontaminasi zat kimia sintetis buatan.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 font-semibold text-stone-800"><IoCheckmarkCircle className="text-emerald-500 text-xl" /> 100% Organik & Alami</div>
            <div className="flex items-center gap-2 font-semibold text-stone-800"><IoCheckmarkCircle className="text-emerald-500 text-xl" /> Lolos Uji Laboratorium</div>
            <div className="flex items-center gap-2 font-semibold text-stone-800"><IoCheckmarkCircle className="text-emerald-500 text-xl" /> Sertifikasi BPOM & Halal</div>
            <div className="flex items-center gap-2 font-semibold text-stone-800"><IoCheckmarkCircle className="text-emerald-500 text-xl" /> Ramah Lingkungan</div>
          </div>
        </div>
      </section>

      <section className="bg-parallax relative py-28 text-white flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80')" }}>
        <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-xs" />
        <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-4xl sm:text-5xl font-black text-emerald-400">{counts.clients.toLocaleString()}+</h3>
            <p className="text-sm uppercase font-semibold tracking-wider text-stone-300">Konsumen Puas</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl sm:text-5xl font-black text-emerald-400">{counts.products}+</h3>
            <p className="text-sm uppercase font-semibold tracking-wider text-stone-300">Varian Produk</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl sm:text-5xl font-black text-emerald-400">{counts.experts}+</h3>
            <p className="text-sm uppercase font-semibold tracking-wider text-stone-300">Formulator Ahli</p>
          </div>
        </div>
      </section>

      <section id="produk" className="py-24 bg-stone-100/60">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs block">Koleksi Produk</span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900">Produk Unggulan Pilihan Kami</h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-4 text-sm font-semibold">
            {["all", "capsule", "tea", "liquid"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full transition capitalize ${activeTab === tab ? "bg-emerald-600 text-white" : "bg-white text-stone-600 shadow-xs hover:bg-stone-100"}`}
              >
                {tab === "all" ? "Semua" : tab}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.filter(p => activeTab === "all" || p.cat === activeTab).map((prod, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-xs border border-stone-200/60 group hover:shadow-lg transition flex flex-col">
                <div className="h-56 overflow-hidden bg-stone-200 relative">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="font-bold text-stone-900 group-hover:text-emerald-700 transition">{prod.name}</h4>
                    <p className="text-sm font-black text-emerald-600 mt-1">{prod.price}</p>
                  </div>
                  <button className="w-full bg-stone-900 hover:bg-emerald-600 text-white text-xs font-bold py-2.5 rounded-xl transition flex items-center justify-center gap-2">
                    <IoLogoWhatsapp /> Beli Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tim" className="py-24 max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs block">Para Pakar</span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900">Di Balik Formulasi Pure Herb</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { name: "Dr. Herbalis Amalia", role: "Head of Research", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80" },
            { name: "Budi Santoso, Apt.", role: "Apoteker & QC", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80" },
            { name: "Prof. Wijaya", role: "Product Advisor", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80" },
          ].map((member, idx) => (
            <div key={idx} className="text-center space-y-4 bg-white p-6 rounded-2xl border border-stone-200/60 shadow-xs">
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto shadow-md">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900">{member.name}</h4>
                <p className="text-xs text-stone-500 font-semibold">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="testimoni" className="py-24 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-center">
          <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs block">Testimoni Real</span>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            className="w-full"
          >
            {[
              { quote: "Sejak rutin konsumsi ImmunCaps dari Pure Herb, tubuh rasanya tidak gampang lelah dan jarang terkena flu meskipun cuaca lagi ekstrim.", user: "Hendra Wijaya, Wiraswasta" },
              { quote: "Teh hijau organiknya juara banget! Aromanya sangat menenangkan dan membantu sekali dalam program detoksifikasi tubuh saya.", user: "Siti Rahma, Ibu Rumah Tangga" }
            ].map((testi, idx) => (
              <SwiperSlide key={idx} className="pb-12 space-y-4">
                <p className="text-lg sm:text-2xl font-medium italic leading-relaxed text-stone-100">"{testi.quote}"</p>
                <h5 className="font-bold text-emerald-400 text-sm tracking-wide">— {testi.user}</h5>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section id="faq" className="py-24 max-w-3xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs block">Tanya Jawab</span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900">Pertanyaan yang Sering Diajukan</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "Apakah produk Pure Herb aman dikonsumsi jangka panjang?", a: "Ya, seluruh produk kami diformulasikan dari 100% bahan alami organik murni tanpa campuran bahan kimia obat (BKO) sehingga aman untuk konsumsi harian sesuai dosis." },
            { q: "Apakah Pure Herb sudah terdaftar di BPOM?", a: "Seluruh varian komoditas produk Pure Herb telah mengantongi izin edar resmi resmi dari BPOM RI serta sertifikasi Halal MUI." },
            { q: "Bagaimana sistem pengiriman barang?", a: "Kami menyediakan jangkauan pengiriman ke seluruh wilayah Indonesia melalui ekspedisi logistik tepercaya, lengkap dengan proteksi lapisan bubble wrap tebal." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-stone-200/80 overflow-hidden">
              <button 
                onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                className="w-full text-left px-6 py-4 font-bold text-stone-900 flex justify-between items-center bg-stone-100/40 hover:bg-stone-100 transition"
              >
                <span>{item.q}</span>
                <IoChevronDown className={`transition-transform ${faqOpen === idx ? "rotate-180" : ""}`} />
              </button>
              {faqOpen === idx && (
                <div className="px-6 py-4 text-stone-600 text-sm leading-relaxed border-t border-stone-200/60 bg-white">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="kontak" className="bg-stone-900 text-stone-300 py-20 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 pb-12 border-b border-stone-800">
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-white font-black text-2xl tracking-wide">
              <IoLeaf className="text-emerald-500" /> PURE<span className="text-stone-400 font-medium">HERB</span>
            </h3>
            <p className="text-sm text-stone-400 leading-relaxed">Menyediakan racikan obat dan suplemen kesehatan herbal organik murni berstandar mutu tinggi demi kesejahteraan hidup Anda.</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Informasi Kontak</h4>
            <div className="space-y-2 text-sm text-stone-400">
              <p className="flex items-center gap-3"><IoLocation className="text-emerald-500 text-base" /> Jl. Sehat Alami No. 45, Jakarta, Indonesia</p>
              <p className="flex items-center gap-3"><IoCall className="text-emerald-500 text-base" /> +62 812-3456-7890</p>
              <p className="flex items-center gap-3"><IoMail className="text-emerald-500 text-base" /> info@pureherb.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Hubungi WhatsApp Resmi</h4>
            <p className="text-sm text-stone-400">Konsultasikan keluhan kesehatan Anda gratis bersama tim konsultan medis kami.</p>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition shadow-lg shadow-emerald-950/40">
              <IoLogoWhatsapp className="text-base" /> Chat Konsultasi Gratis
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 text-center text-xs text-stone-500 font-medium">
          © {new Date().getFullYear()} Pure Herb Indonesia. All Rights Reserved.
        </div>
      </section>

    </div>
  );
}