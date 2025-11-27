-- CreateTable
CREATE TABLE `Personel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ad` VARCHAR(191) NOT NULL,
    `soyad` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefon` VARCHAR(191) NULL,
    `departman` VARCHAR(191) NOT NULL,
    `maas` DOUBLE NULL,
    `iseBaslama` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `olusturma` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `guncelleme` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Personel_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
