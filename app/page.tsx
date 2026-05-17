export default function TuncPenPVC() {
  const services = [
    {
      title: 'Pimapen Sistemleri',
      desc: 'Modern PVC pencere ve kapı çözümleri',
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Sineklik Sistemleri',
      desc: 'Pileli, sürgülü ve özel ölçü sineklikler',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Cam Balkon',
      desc: 'Şık ve dayanıklı cam balkon çözümleri',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  return (
    <div className="bg-white text-neutral-900 overflow-x-hidden w-full min-h-screen">
      {/* TOP BAR */}
      <div className="bg-[#0D1B2A] text-white text-sm py-3 px-6 w-full">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <p>📍 Ankara / Mamak</p>
          <div className="flex gap-5">
            <p>📞 0555 111 22 33</p>
            <p>✉️ info@tuncpenpvc.com</p>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b w-full">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-[#0D1B2A]">
              Tunç Pen PVC
            </h1>
            <p className="text-sm text-neutral-500 mt-1">
              Pimapen • Sineklik • Cam Balkon
            </p>
          </div>

          <nav className="hidden lg:flex gap-8 font-semibold text-sm">
            <a href="#anasayfa" className="hover:text-blue-600 transition">Ana Sayfa</a>
            <a href="#hizmetler" className="hover:text-blue-600 transition">Hizmetler</a>
            <a href="#urunler" className="hover:text-blue-600 transition">Ürünler</a>
            <a href="#hakkimizda" className="hover:text-blue-600 transition">Hakkımızda</a>
            <a href="#galeri" className="hover:text-blue-600 transition">Galeri</a>
            <a href="#iletisim" className="hover:text-blue-600 transition">İletişim</a>
          </nav>

          <a
            href="https://wa.me/905551112233"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="anasayfa" className="relative min-h-[90vh] flex items-center w-full">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/80 to-[#0D1B2A]/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white py-24 w-full">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-blue-300 font-semibold mb-6 text-sm">
              Ankara’nın Profesyonel PVC Çözümleri
            </p>
            <h2 className="text-6xl lg:text-8xl font-black leading-[1.1] mb-8">
              Modern Yaşam Alanları
            </h2>
            <p className="text-xl text-neutral-200 leading-relaxed mb-10 max-w-2xl">
              Tunç Pen PVC olarak pimapen, sineklik ve cam balkon alanında profesyonel çözümler sunuyoruz.
            </p>
            <div className="flex flex-wrap gap-5">
              <a
                href="https://wa.me/905551112233"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 px-8 py-5 rounded-2xl font-bold hover:scale-105 transition"
              >
                🟢 WhatsApp’tan Ulaş
              </a>
              <a
                href="tel:+905551112233"
                className="border border-white/30 px-8 py-5 rounded-2xl font-bold hover:bg-white hover:text-black transition"
              >
                📞 Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="hizmetler" className="py-28 bg-[#F5F7FA] w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">
              Hizmetlerimiz
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-[#0D1B2A] mb-6">
              Profesyonel Çözümler
            </h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Modern yaşam alanları için estetik ve dayanıklı sistemler.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between"
              >
                <div className="w-full h-[300px] overflow-hidden">
                  <img
                    src={item.image}
                    className="h-full w-full object-cover block"
                    alt={item.title}
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-3xl font-black mb-4 text-[#0D1B2A]">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-lg mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <a 
                    href={`/hizmet-${index}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition inline-block text-center w-full"
                  >
                    Detaylı İncele
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-[#0D1B2A] text-white w-full">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            ['500+', 'Tamamlanan Proje'],
            ['10+', 'Yıllık Deneyim'],
            ['100%', 'Müşteri Memnuniyeti'],
            ['7/24', 'Destek Hizmeti']
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[2rem] p-10"
            >
              <h3 className="text-5xl font-black text-blue-400 mb-4">
                {item[0]}
              </h3>
              <p className="text-neutral-300 text-lg">
                {item[1]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="urunler" className="py-28 bg-white w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between gap-10 mb-20">
            <div>
              <p className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">
                Ürünlerimiz
              </p>
              <h2 className="text-5xl lg:text-6xl font-black text-[#0D1B2A] leading-tight">
                Kaliteli ve Modern Sistemler
              </h2>
            </div>
            <p className="text-neutral-600 text-lg max-w-2xl leading-relaxed">
              Dayanıklı malzeme, estetik görünüm ve profesyonel işçilik ile yaşam alanlarınıza değer katıyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Pileli Sineklik',
              'Sürgülü Sineklik',
              'Cam Balkon',
              'PVC Pencere'
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#F5F7FA] rounded-[2rem] p-10 hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600 mb-8"></div>
                <h3 className="text-2xl font-black leading-tight">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeri" className="py-28 bg-[#F5F7FA] w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">
              Galeri
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-[#0D1B2A]">
              Gerçek Projelerimiz
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop'
            ].map((img, index) => (
              <div key={index} className="rounded-[2rem] h-[350px] overflow-hidden w-full">
                <img
                  src={img}
                  className="h-full w-full object-cover hover:scale-[1.02] transition duration-300"
                  alt="galeri"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="hakkimizda" className="py-28 bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="rounded-[3rem] h-[650px] overflow-hidden w-full">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
              className="h-full w-full object-cover"
              alt="about"
            />
          </div>

          <div>
            <p className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">
              Hakkımızda
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-[#0D1B2A] leading-tight mb-8">
              Kaliteli İşçilik<br />Güvenilir Hizmet
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-10">
              Tunç Pen PVC olarak Ankara / Mamak bölgesinde pimapen, sineklik ve cam balkon alanında modern çözümler sunuyoruz.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[
                'Ücretsiz Keşif',
                'Garantili Hizmet',
                'Premium Malzeme',
                'Profesyonel Ekip'
              ].map((item, index) => (
                <div key={index} className="bg-[#F5F7FA] rounded-2xl p-5 font-bold">
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="iletisim" className="py-28 bg-[#0D1B2A] text-white w-full">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
            İletişim
          </p>
          <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
            Hemen<br />İletişime Geçin
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            Ücretsiz keşif ve fiyat bilgisi almak için bize ulaşabilirsiniz.
          </p>
          <div className="flex flex-wrap justify-center gap-5 mb-16">
            <a
              href="tel:+905551112233"
              className="bg-blue-600 px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition"
            >
              📞 Hemen Ara
            </a>
            <a
              href="https://wa.me/905551112233"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition"
            >
              🟢 WhatsApp
            </a>
          </div>
          <div className="border-t border-white/10 pt-10 text-neutral-400">
            © 2026 Tunç Pen PVC • Tüm Hakları Saklıdır.
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/905551112233"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition z-50"
      >
        🟢
      </a>
    </div>
  );
}