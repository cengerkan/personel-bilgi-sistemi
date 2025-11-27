<!-- Personel Bilgi Sistemi — README HTML -->
<section style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#0f172a; line-height:1.5; max-width:980px; margin:18px auto; padding:20px;">
  <header style="display:flex; gap:16px; align-items:center;">
    <img src="https://img.shields.io/badge/Project-Personel%20Bilgi%20Sistemi-blue?style=flat-square" alt="badge" style="height:28px;">
    <h1 style="font-size:28px; margin:0; font-weight:700;">Personel Bilgi Sistemi</h1>
  </header>

  <p style="margin-top:12px; color:#334155;">
    Modern kurumlar için geliştirilmiş kullanıcı girişli (login), personel ekleme/düzenleme/silme işlemlerini
    destekleyen tam kapsamlı bir Personel Yönetim Sistemidir. <strong>React (Frontend)</strong> + <strong>Node.js / Express (Backend)</strong>
    ile geliştirilmiş olup, sade, hızlı ve kurumsal bir arayüz sunar.
  </p>

  <hr style="border:none; height:1px; background:#e2e8f0; margin:18px 0;">

  <section>
    <h2 style="font-size:18px; margin-bottom:8px;">🚀 Özellikler</h2>
    <ul style="margin-top:6px; color:#475569;">
      <li>🔐 <strong>Güvenli kullanıcı giriş sistemi (Authentication)</strong></li>
      <li>👤 <strong>Personel ekleme, düzenleme ve silme</strong></li>
      <li>📋 <strong>Personel listesi tablosu (Responsive)</strong></li>
      <li>🏢 Departman, maaş, iletişim ve işe başlama tarihi yönetimi</li>
      <li>🎨 Bootstrap tabanlı modern ve kurumsal UI</li>
      <li>⚡ Node.js + Express ile REST API</li>
      <li>💾 MySQL desteği</li>
    </ul>
  </section>

  <hr style="border:none; height:1px; background:#e2e8f0; margin:18px 0;">

  <section>
    <h2 style="font-size:18px; margin-bottom:8px;">🛠️ Kullanılan Teknolojiler</h2>

  <table>
  <tr>
      <h3>Frontend</h3>
      <ul>
        <li>React</li>
        <li>React-Bootstrap</li>
        <li>Bootstrap</li>
        <li>Fetch API</li>
        <li>Vite (React dev server)</li>
      </ul>
      <h3>Backend</h3>
      <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>CORS</li>
        <li>MySQL</li>
      </ul>
  </tr>
</table>

  </section>

<hr>

<h2>📦 Kurulum & Çalıştırma</h2>

<p>
  Aşağıdaki adımları terminalde sırasıyla uygulayın. 
  Frontend ve backend <strong>ayrı terminal</strong> pencerelerinde çalıştırılmalıdır.
</p>

<details>
  <summary><strong>1) Reposu klonla</strong></summary>

  <pre>
git clone https://github.com/kullaniciAdin/personel-bilgi-sistemi.git
cd personel-bilgi-sistemi
  </pre>
</details>

<details>
  <summary><strong>2) Backend kurulumu & çalıştırma</strong></summary>

  <p>Yeni bir terminal açın ve aşağıdakileri çalıştırın:</p>

  <pre>
cd backend
npm install
npm run dev
  </pre>

  <p>
    Backend çalıştıktan sonra API şu adreste olacaktır:
    <strong>http://localhost:5000</strong>
  </p>
</details>

<details>
  <summary><strong>3) Frontend kurulumu & çalıştırma</strong></summary>

  <p>Başka bir terminal açın ve şunları çalıştırın:</p>

  <pre>
cd frontend
npm install
npm run dev
  </pre>

  <p>
    Frontend çalıştıktan sonra arayüz şu adreste olacaktır:
    <strong>http://localhost:5173</strong>
  </p>
</details>

<p>
  Özetle: <strong>2 ayrı terminal</strong> açık olacak — 
  biri backend (port 5000), diğeri frontend (port 5173).
</p>

<hr>

<h2>🔐 Test Hesabı</h2>

<pre>
Kullanıcı adı: admin
Şifre: 12345
</pre>
