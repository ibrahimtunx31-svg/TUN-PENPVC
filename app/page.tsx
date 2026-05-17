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

          <div className="flex justify-center items-center bg-white rounded-[2rem] shadow-2xl p-6 h-[650px]">
            <img
              src="logo.png"
              alt="Tunç Pen PVC Logo"
              className="max-h-full max-w-full object-contain"
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
                text: 'Ado Pen, Ado Win ve Erpen kalitesiyle uzun ömürlü kapı ve pencere çözümleri.'
              },
              {
                title: 'Sineklik Sistemleri',
                text: 'Pileli, sürgülü, menteşeli ve kapı tipi özel ölçü sineklik imalatı.'
              },
              {
                title: 'Cam Balkon',
                text: 'Katlanır ve sürme modellerle şık, ısı yalıtımlı cam balkon sistemleri.'
              },
              {
                title: 'Tamir & Bakım',
                text: 'Kilit değişimi, conta yenileme, pimapen ayarı ve izolasyon hizmetleri.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-neutral-100 rounded-[2rem] p-8 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-yellow-400 mb-6 flex items-center justify-between px-4 font-bold text-xl">✓</div>
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
            <p className="text-neutral-500 mt-2">Ado Pen, Ado Win, Erpen Profil ve Sineklik Uygulamalarımız</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'galeri1.jpg',
              'galeri2.webp',
              'galeri3.webp',
              'galeri4.webp',
              'galeri5.webp',
              'galeri6.jpg',
              'galeri7.jfif',
              'galeri8.jfif',
              'galeri9.jfif',
              'galeri10.jpg'
            ].map((img, index) => (
              <div key={index} className="overflow-hidden rounded-[2rem] bg-white shadow-sm hover:shadow-xl transition duration-300">
                <img
                  src={img}
                  alt={`Tunç Pen PVC Uygulama ${index + 1}`}
                  className="h-[350px] object-cover w-full hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hakkımızda */}
      <section id="hakkimizda" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="galeri-1.jpg"
            alt="Tunç Pen PVC Atölye Çalışması"
            className="rounded-[2rem] h-[600px] object-cover w-full shadow-lg"
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
              Modern çözümler and müşteri memnuniyeti odaklı çalışma anlayışıyla
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