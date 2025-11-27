-- CreateTable
CREATE TABLE `Kullanici` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kullaniciAdi` VARCHAR(191) NOT NULL,
    `sifre` VARCHAR(191) NOT NULL,
    `adSoyad` VARCHAR(191) NOT NULL,
    `olusturma` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Kullanici_kullaniciAdi_key`(`kullaniciAdi`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
