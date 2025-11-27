import { useState } from 'react';
import { Form, Button, Card, Alert, Spinner } from 'react-bootstrap';

function Login({ setGirisYapildi, setKullanici }) {
  const [form, setForm] = useState({
    kullaniciAdi: '',
    sifre: ''
  });

  const [hata, setHata] = useState('');
  const [yukleniyor, setYukleniyor] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHata('');
    setYukleniyor(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        setHata(data.hata || 'Giriş başarısız.');
        setYukleniyor(false);
        return;
      }

      // Kullanıcıyı kaydet
      localStorage.setItem('kullanici', JSON.stringify(data.kullanici));
      setKullanici(data.kullanici);
      setGirisYapildi(true);

    } catch (error) {
      setHata('Bağlantı hatası: ' + error.message);
      setYukleniyor(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "#eef1f5" }}>
      <Card style={{ width: '380px' }} className="shadow-lg border-0 p-3">
        <Card.Body>
          <h3 className="text-center mb-3">Personel Bilgi Sistemi</h3>
          <p className="text-center text-muted mb-4">Devam etmek için giriş yapın</p>

          {hata && (
            <Alert variant="danger" className="text-center py-2">
              {hata}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Kullanıcı Adı</Form.Label>
              <Form.Control
                type="text"
                value={form.kullaniciAdi}
                onChange={(e) => setForm({ ...form, kullaniciAdi: e.target.value })}
                placeholder="Kullanıcı adınızı girin"
                required
                disabled={yukleniyor}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Şifre</Form.Label>
              <Form.Control
                type="password"
                value={form.sifre}
                onChange={(e) => setForm({ ...form, sifre: e.target.value })}
                placeholder="Şifrenizi girin"
                required
                disabled={yukleniyor}
              />
            </Form.Group>

            <Button
              type="submit"
              className="w-100"
              disabled={yukleniyor}
            >
              {yukleniyor ? (
                <>
                  <Spinner animation="border" size="sm" /> Giriş yapılıyor...
                </>
              ) : (
                'Giriş Yap'
              )}
            </Button>
          </Form>

          <p className="text-center mt-3 text-muted" style={{ fontSize: "14px" }}>
            Demo: <strong>admin</strong> / <strong>12345</strong>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
