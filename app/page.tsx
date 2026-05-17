export default function Home() {
  return (
    <>
      {/* Üst İletişim Çubuğu (Top Bar) */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div>
            <span><i className="fas fa-phone"></i> +90 535 526 14 31</span>
            <span><i className="fas fa-envelope"></i> info@acrsineklik.com.tr</span>
          </div>
          <div>
            <span><i className="fas fa-map-marker-alt"></i> Batıkent, Yenimahalle / Ankara</span>
          </div>
        </div>
      </div>

      {/* Navigasyon Menüsü */}
      <header>
        <div className="container header-content">
          <div className="logo">
            <a href="#">ACR <span>SİNEKLİK</span></a>
          </div>
          <nav>
            <ul>
              <li><a href="#" className="active">Ana Sayfa</a></li>
              <li><a href="#kurumsal">Kurumsal</a></li>
              <li><a href="#urunler">Sineklik Çeşitleri</a></li>
              <li><a href="#hizmetler">Kedi Sineklikleri</a></li>
              <li><a href="#iletisim">İletişim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Giriş Alanı (Hero) */}
      <section className="hero">
        <div className="hero-text">
          <h1>Modern Yaşam Alanlarında Konfor</h1>
          <p>Evinizin konfor ve güvenliğini artıran akıllı sineklik çözümleri ile tanışın. Sinek, böcek ve haşerelere karşı kesin koruma.</p>
          <a href="#urunler" className="btn">Hemen Keşfedin</a>
        </div>
      </section>

      {/* Kurumsal / Hakkımızda Bölümü */}
      <section id="kurumsal" className="about container">
        <div className="section-title">
          <h2>Hakkımızda</h2>
          <p>Yıllardır ev ve iş yerleriniz için yenilikçi çözümler sunuyoruz.</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Evinizde Özgürlük Hissi, Dışarıya Karşı Akıllı Koruma</h3>
            <p>Müşterilerimizin ihtiyaçlarını en ince detayına kadar analiz ederek, her mekana uygun, estetik ve fonksiyonel sineklikler tasarlamakta ve üretmekteyiz. Kaliteli malzeme kullanımı ve profesyonel işçiliğimiz ile uzun ömürlü kullanım garantisi sunuyoruz.</p>
            <div className="features">
              <div className="feature-item"><i className="fas fa-check-circle"></i> %100 Dayanıklı Malzeme</div>
              <div className="feature-item"><i className="fas fa-check-circle"></i> Profesyonel Ölçü ve Montaj</div>
              <div className="feature-item"><i className="fas fa-check-circle"></i> Uygun Fiyat Garantisi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ürünler Bölümü */}
      <section id="urunler" className="products-section">
        <div className="container">
          <div className="section-title">
            <h2>Sineklik Çeşitlerimiz</h2>
            <p>İhtiyacınıza uygun, yüksek kaliteli sineklik modellerimiz</p>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-icon"><i className="fas fa-border-all"></i></div>
              <h3>Pileli Kapı Sinekliği</h3>
              <p>Kullanımı kolay, yer kaplamayan modern akordeon sistem kapı sineklikleri.</p>
              <a href="#iletisim" className="product-btn">Bilgi Al</a>
            </div>
            <div className="product-card">
              <div className="product-icon"><i className="fas fa-window-maximize"></i></div>
              <h3>Menteşeli Pencere Sinekliği</h3>
              <p>Ekonomik, pratik, temizliği son derece kolay klasik sineklik modeli.</p>
              <a href="#iletisim" className="product-btn">Bilgi Al</a>
            </div>
            <div className="product-card">
              <div className="product-icon"><i className="fas fa-sliders-h"></i></div>
              <h3>Sürme (Kayar) Sineklik</h3>
              <p>Geniş balkon kapıları ve sürgülü doğramalar için alttan taşıyıcılı estetik sistemler.</p>
              <a href="#iletisim" className="product-btn">Bilgi Al</a>
            </div>
            <div className="product-card">
              <div className="product-icon"><i className="fas fa-cat"></i></div>
              <h3>Özel Kedi Sinekliği</h3>
              <p>Evcil hayvanlarınızın güvenliği için yırtılmaz çelik/alüminyum telli özel kilitli sistemler.</p>
              <a href="#iletisim" className="product-btn">Bilgi Al</a>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim Bölümü */}
      <section id="iletisim" className="contact container">
        <div className="section-title">
          <h2>İletişim</h2>
          <p>Bizimle hemen iletişime geçerek ücretsiz ölçü ve fiyat teklifi alabilirsiniz.</p>
        </div>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>İletişim Bilgileri</h3>
            <p><i className="fas fa-phone"></i> <strong>Telefon:</strong> +90 535 526 14 31</p>
            <p><i className="fas fa-envelope"></i> <strong>E-Posta:</strong> info@acrsineklik.com.tr</p>
            <p><i className="fas fa-map-marked-alt"></i> <strong>Adres:</strong> Turgut Özal Mah. Batıkent, Yenimahalle / Ankara</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div className="contact-form">
            <h3>Talep Formu</h3>
            <form>
              <input type="text" placeholder="Adınız Soyadınız" required />
              <input type="email" placeholder="E-Posta Adresiniz" required />
              <input type="tel" placeholder="Telefon Numaranız" required />
              <textarea placeholder="Mesajınız veya İstediğiniz Ölçüler" rows={5} required></textarea>
              <button type="submit" className="btn">Gönder</button>
            </form>
          </div>
        </div>
      </section>

      {/* Alt Bilgi (Footer) */}
      <footer>
        <p>&copy; 2026 ACR Sineklik Sistemleri. Tüm Hakları Saklıdır.</p>
      </footer>

      {/* WhatsApp Sabit Butonu */}
      <a href="https://wa.me/905355261431" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}