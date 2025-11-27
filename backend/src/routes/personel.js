import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Tüm personeli getir
router.get('/', async (req, res) => {
  try {
    const personeller = await prisma.personel.findMany({
      orderBy: { olusturma: 'desc' }
    });
    res.json(personeller);
  } catch (error) {
    res.status(500).json({ hata: error.message });
  }
});

// Tek personel getir
router.get('/:id', async (req, res) => {
  try {
    const personel = await prisma.personel.findUnique({
      where: { id: parseInt(req.params.id) }
    });
    if (!personel) {
      return res.status(404).json({ hata: 'Personel bulunamadı' });
    }
    res.json(personel);
  } catch (error) {
    res.status(500).json({ hata: error.message });
  }
});

// Yeni personel ekle
router.post('/', async (req, res) => {
  try {
    const personel = await prisma.personel.create({
      data: req.body
    });
    res.status(201).json(personel);
  } catch (error) {
    res.status(400).json({ hata: error.message });
  }
});

// Personel güncelle
router.put('/:id', async (req, res) => {
  try {
    const personel = await prisma.personel.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });
    res.json(personel);
  } catch (error) {
    res.status(400).json({ hata: error.message });
  }
});

// Personel sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.personel.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.json({ mesaj: 'Personel silindi' });
  } catch (error) {
    res.status(400).json({ hata: error.message });
  }
});

export default router;