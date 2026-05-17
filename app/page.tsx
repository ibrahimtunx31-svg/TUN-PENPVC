export default function TuncPenPVC() {
  return (
    <div className="bg-white text-neutral-900 min-h-screen font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur border-b z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Tunç Pen PVC
            </h1>
            <p className="text-sm text-neutral-500">Ankara / Mamak</p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#anasayfa" className="hover:text-yellow-500 transition">Ana Sayfa</a>
            <a href="#hizmetler" className="hover:text-yellow-500 transition">Hizmetler</a>
            <a href="#galeri" className="hover:text-yellow-500 transition">Galeri</a>
            <a href="#hakkimizda" className="hover:text-yellow-500 transition">Hakkımızda</a>
            <a href="#iletisim" className="hover:text-yellow-500 transition">İletişim</a>
          </nav>

          <div className="flex gap-3">
            <a
              href="tel:+905439561711"
              className="px-4 py-2 rounded-2xl border text-sm font-semibold hover:bg-neutral-100 transition"
            >
              Hemen Ara
            </a>

            <a
              href="https://wa.me/905439561711"
              target="_blank"
              className="px-4 py-2 rounded-2xl bg-yellow-400 text-black text-sm font-semibold hover:scale-105 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        id="anasayfa"
        className="pt-36 pb-24 bg-neutral-100"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-yellow-500 text-sm font-semibold mb-4">
              Pimapen • Sineklik • Cam Balkon
            </p>

            <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Modern ve
              <br />
              Güvenilir
              <br />
              PVC Çözümleri
            </h2>

            <p className="text-neutral-600 text-lg leading-relaxed mb-8 max-w-xl">
              Tunç Pen PVC olarak Ankara / Mamak bölgesinde profesyonel pimapen,
              sineklik ve cam balkon hizmetleri sunuyoruz.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/905439561711"
                target="_blank"
                className="px-7 py-4 rounded-2xl bg-yellow-400 text-black font-semibold hover:scale-105 transition"
              >
                WhatsApp’tan Ulaş
              </a>

              <a
                href="tel:+905439561711"
                className="px-7 py-4 rounded-2xl border border-neutral-300 font-semibold hover:bg-white transition"
              >
                Hemen Ara
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-lg">Ücretsiz Keşif</h3>
                <p className="text-sm text-neutral-500 mt-2">
                  Yerinde ölçü ve keşif hizmeti.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-lg">Garantili İşçilik</h3>
                <p className="text-sm text-neutral-500 mt-2">
                  Kaliteli malzeme ve profesyonel montaj.
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop"
              alt="Cam Balkon"
              className="rounded-[2rem] shadow-2xl object-cover h-[650px] w-full"
            />
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section id="hizmetler" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-yellow-500 font-semibold uppercase tracking-[0.2em] text-sm mb-4">
              Hizmetlerimiz
            </p>
            <h2 className="text-4xl lg:text-5xl font-black">
              Profesyonel Hizmetler
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Pimapen Sistemleri',
                text: 'Kaliteli PVC pencere ve kapı çözümleri.'
              },
              {
                title: 'Sineklik Sistemleri',
                text: 'Pileli, sürgülü ve özel ölçü sineklikler.'
              },
              {
                title: 'Cam Balkon',
                text: 'Şık ve dayanıklı cam balkon sistemleri.'
              },
              {
                title: 'Tamir & Bakım',
                text: 'Pimapen ayarı ve bakım hizmetleri.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-neutral-100 rounded-[2rem] p-8 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-yellow-400 mb-6"></div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section id="galeri" className="py-24 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-yellow-500 font-semibold uppercase tracking-[0.2em] text-sm mb-4">
              Galeri
            </p>
            <h2 className="text-4xl lg:text-5xl font-black">
              Yaptığımız İşler
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop'
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Proje"
                className="rounded-[2rem] h-[350px] object-cover w-full hover:scale-[1.02] transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hakkımızda */}
      <section id="hakkimizda" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
            alt="PVC"
            className="rounded-[2rem] h-[600px] object-cover w-full"
          />

          <div>
            <p className="text-yellow-500 font-semibold uppercase tracking-[0.2em] text-sm mb-4">
              Hakkımızda
            </p>

            <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
              Kaliteli İşçilik,
              <br />
              Güvenilir Hizmet
            </h2>

            <p className="text-neutral-600 leading-relaxed text-lg mb-8">
              Tunç Pen PVC olarak Ankara / Mamak bölgesinde pimapen,
              sineklik ve cam balkon alanında profesyonel hizmet veriyoruz.
              Modern çözümler ve müşteri memnuniyeti odaklı çalışma anlayışıyla
              kaliteli işler teslim ediyoruz.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {[
                'Kaliteli Malzeme',
                'Uygun Fiyat',
                'Hızlı Montaj',
                'Profesyonel Ekip'
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-neutral-100 rounded-2xl p-5 font-semibold"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* İletişim */}
      <section id="iletisim" className="py-24 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-yellow-400 uppercase tracking-[0.2em] text-sm font-semibold mb-4">
            İletişim
          </p>

          <h2 className="text-4xl lg:text-6xl font-black mb-8">
            Hemen Bizimle
            <br />
            İletişime Geçin
          </h2>

          <p className="text-neutral-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Ankara / Mamak bölgesinde ücretsiz keşif ve fiyat bilgisi almak için
            bize ulaşabilirsiniz.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+905439561711"
              className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              📞 Hemen Ara
            </a>

            <a
              href="https://wa.me/905439561711"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-yellow-400 text-black font-semibold hover:scale-105 transition"
            >
              🟢 WhatsApp
            </a>
          </div>

          <div className="mt-16 border-t border-neutral-700 pt-8 text-neutral-400 text-sm">
            © 2026 Tunç Pen PVC • Tüm Hakları Saklıdır.
          </div>
        </div>
      </section>
    </div>
  )
}
