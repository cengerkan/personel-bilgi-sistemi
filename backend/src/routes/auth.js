import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const router = express.Router();
const prisma = new PrismaClient();

// Login
router.post('/login', async (req, res) => {
  try {
    const { kullaniciAdi, sifre } = req.body;
    
    const kullanici = await prisma.kullanici.findUnique({
      where: { kullaniciAdi }
    });

    if (!kullanici) {
      return res.status(401).json({ hata: 'Kullanıcı adı veya şifre hatalı' });
    }

    const sifreDogruMu = await bcrypt.compare(sifre, kullanici.sifre);

    if (!sifreDogruMu) {
      return res.status(401).json({ hata: 'Kullanıcı adı veya şifre hatalı' });
    }

    res.json({ 
      mesaj: 'Giriş başarılı',
      kullanici: {
        id: kullanici.id,
        kullaniciAdi: kullanici.kullaniciAdi,
        adSoyad: kullanici.adSoyad
      }
    });
  } catch (error) {
    res.status(500).json({ hata: error.message });
  }
});

// Kayıt (ilk kullanıcı için)
router.post('/register', async (req, res) => {
  try {
    const { kullaniciAdi, sifre, adSoyad } = req.body;
    
    const mevcutKullanici = await prisma.kullanici.findUnique({
      where: { kullaniciAdi }
    });

    if (mevcutKullanici) {
      return res.status(400).json({ hata: 'Bu kullanıcı adı zaten kullanılıyor' });
    }

    const hashedSifre = await bcrypt.hash(sifre, 10);

    const kullanici = await prisma.kullanici.create({
      data: {
        kullaniciAdi,
        sifre: hashedSifre,
        adSoyad
      }
    });

    res.status(201).json({ 
      mesaj: 'Kullanıcı oluşturuldu',
      kullanici: {
        id: kullanici.id,
        kullaniciAdi: kullanici.kullaniciAdi,
        adSoyad: kullanici.adSoyad
      }
    });
  } catch (error) {
    res.status(400).json({ hata: error.message });
  }
});

export default router;