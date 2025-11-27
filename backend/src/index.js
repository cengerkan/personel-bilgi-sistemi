import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import personelRoutes from './routes/personel.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/personel', personelRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});