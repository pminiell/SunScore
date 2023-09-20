/*
  Warnings:

  - The primary key for the `Asset` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `assetId` on the `Asset` table. All the data in the column will be lost.
  - Added the required column `id` to the `Asset` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Asset" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
INSERT INTO "new_Asset" ("address", "arrayType", "assetName", "azimuth", "lat", "lon", "moduleType", "panelTilt", "systemCapacity", "systemLosses", "userId") SELECT "address", "arrayType", "assetName", "azimuth", "lat", "lon", "moduleType", "panelTilt", "systemCapacity", "systemLosses", "userId" FROM "Asset";
DROP TABLE "Asset";
ALTER TABLE "new_Asset" RENAME TO "Asset";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
