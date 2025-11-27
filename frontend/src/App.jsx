import { useState, useEffect } from 'react';
import PersonelList from './components/PersonelList';
import PersonelForm from './components/PersonelForm';
import Login from './components/Login';
import './App.css';
import { Container, Navbar, Nav, Button, Row, Col, Card } from 'react-bootstrap';

function App() {
  const [personeller, setPersoneller] = useState([]);
  const [duzenle, setDuzenle] = useState(null);
  const [girisYapildi, setGirisYapildi] = useState(false);
  const [kullanici, setKullanici] = useState(null);

  // Sayfa yüklendiğinde oturum kontrolü
  useEffect(() => {
    const kaydedilmisKullanici = localStorage.getItem('kullanici');
    if (kaydedilmisKullanici) {
      setKullanici(JSON.parse(kaydedilmisKullanici));
      setGirisYapildi(true);
    }
  }, []);

  const personelleriGetir = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/personel');
      const data = await response.json();
      setPersoneller(data);
    } catch (error) {
      console.error('Hata:', error);
    }
  };

  useEffect(() => {
    if (girisYapildi) {
      personelleriGetir();
    }
  }, [girisYapildi]);

  const personelSil = async (id) => {
    if (window.confirm('Silmek istediğinizden emin misiniz?')) {
      try {
        await fetch(`http://localhost:5000/api/personel/${id}`, {
          method: 'DELETE'
        });
        personelleriGetir();
      } catch (error) {
        console.error('Hata:', error);
      }
    }
  };

  const cikisYap = () => {
    localStorage.removeItem('kullanici');
    setGirisYapildi(false);
    setKullanici(null);
    setPersoneller([]);
  };

  // Login ekranı
  if (!girisYapildi) {
    return <Login setGirisYapildi={setGirisYapildi} setKullanici={setKullanici} />;
  }

  return (
    <>
      {/* Üst Menü */}
      <Navbar bg="dark" variant="dark" expand="lg" className="px-4">
        <Navbar.Brand className="fw-bold">Personel Bilgi Sistemi</Navbar.Brand>

        <Nav className="ms-auto d-flex align-items-center">
          <span className="text-white me-3">
            Hoş geldiniz, <strong>{kullanici?.adSoyad}</strong>
          </span>
          <Button variant="outline-light" onClick={cikisYap}>
            Çıkış Yap
          </Button>
        </Nav>
      </Navbar>

      <Container className="mt-4 mb-5">

        <Row>
          {/* Form Alanı */}
          <Col md={4}>
            <Card className="shadow-sm p-3 mb-4">
              <PersonelForm
                duzenle={duzenle}
                setDuzenle={setDuzenle}
                yenile={personelleriGetir}
              />
            </Card>
          </Col>

          {/* Liste Alanı */}
          <Col md={8}>
            <Card className="shadow-sm p-3">
              <PersonelList
                personeller={personeller}
                onDuzenle={setDuzenle}
                onSil={personelSil}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
