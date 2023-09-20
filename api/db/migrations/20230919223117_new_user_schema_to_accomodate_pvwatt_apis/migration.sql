/*
  Warnings:

  - The primary key for the `Asset` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `axisTracker` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `hemisphere` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `panelType` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `totalAc` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `totalDc` on the `Asset` table. All the data in the column will be lost.
  - You are about to alter the column `panelTilt` on the `Asset` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - Added the required column `arrayType` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assetId` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `azimuth` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moduleType` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `systemCapacity` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `systemLosses` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Asset` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Asset" (
    "assetId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "assetName" TEXT NOT NULL,
    "systemCapacity" REAL NOT NULL,
    "moduleType" INTEGER NOT NULL,
    "systemLosses" REAL NOT NULL,
    "arrayType" INTEGER NOT NULL,
    "panelTilt" REAL NOT NULL,
    "address" TEXT NOT NULL,
    "lat" REAL NOT NULL,
    "lon" REAL NOT NULL,
    "azimuth" REAL NOT NULL
);
INSERT INTO "new_Asset" ("address", "assetName", "lat", "lon", "panelTilt") SELECT "address", "assetName", "lat", "lon", "panelTilt" FROM "Asset";
DROP TABLE "Asset";
ALTER TABLE "new_Asset" RENAME TO "Asset";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
