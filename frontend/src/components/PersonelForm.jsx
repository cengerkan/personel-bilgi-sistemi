import { useState, useEffect } from 'react';

function PersonelForm({ duzenle, setDuzenle, yenile }) {
  const [form, setForm] = useState({
    ad: '',
    soyad: '',
    email: '',
    telefon: '',
    departman: '',
    maas: '',
    iseBaslama: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    if (duzenle) {
      setForm({
        ad: duzenle.ad,
        soyad: duzenle.soyad,
        email: duzenle.email,
        telefon: duzenle.telefon || '',
        departman: duzenle.departman,
        maas: duzenle.maas || '',
        iseBaslama: new Date(duzenle.iseBaslama).toISOString().split('T')[0]
      });
    }
  }, [duzenle]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...form,
      maas: form.maas ? parseFloat(form.maas) : null,
      iseBaslama: new Date(form.iseBaslama).toISOString()
    };

    try {
      const url = duzenle 
        ? `http://localhost:5000/api/personel/${duzenle.id}`
        : 'http://localhost:5000/api/personel';
      const method = duzenle ? 'PUT' : 'POST';

      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      setForm({
        ad: '',
        soyad: '',
        email: '',
        telefon: '',
        departman: '',
        maas: '',
        iseBaslama: new Date().toISOString().split('T')[0]
      });
      setDuzenle(null);
      yenile();
    } catch (error) {
      alert('Hata: ' + error.message);
    }
  };

  return (
  <form onSubmit={handleSubmit}>
    <h2>{duzenle ? 'Personel Düzenle' : 'Yeni Personel Ekle'}</h2>

    <input
      type="text"
      placeholder="Ad"
      value={form.ad}
      onChange={(e) => setForm({ ...form, ad: e.target.value })}
      required
    />

    <input
      type="text"
      placeholder="Soyad"
      value={form.soyad}
      onChange={(e) => setForm({ ...form, soyad: e.target.value })}
      required
    />

    <input
      type="email"
      placeholder="Email"
      value={form.email}
      onChange={(e) => setForm({ ...form, email: e.target.value })}
      required
    />

    <input
      type="tel"
      placeholder="Telefon"
      value={form.telefon}
      onChange={(e) => setForm({ ...form, telefon: e.target.value })}
    />

    <input
      type="text"
      placeholder="Departman"
      value={form.departman}
      onChange={(e) => setForm({ ...form, departman: e.target.value })}
      required
    />

    <input
      type="number"
      placeholder="Maaş"
      value={form.maas}
      onChange={(e) => setForm({ ...form, maas: e.target.value })}
    />

    <input
      type="date"
      value={form.iseBaslama}
      onChange={(e) => setForm({ ...form, iseBaslama: e.target.value })}
      required
    />

    <button type="submit">{duzenle ? 'Güncelle' : 'Ekle'}</button>
    {duzenle && (
      <button type="button" onClick={() => setDuzenle(null)}>
        İptal
      </button>
    )}
  </form>
);
}

export default PersonelForm;