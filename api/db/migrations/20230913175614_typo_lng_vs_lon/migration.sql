/*
  Warnings:

  - You are about to drop the column `lng` on the `Asset` table. All the data in the column will be lost.
  - Added the required column `lon` to the `Asset` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Asset" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "assetName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "axisTracker" TEXT NOT NULL,
    "hemisphere" TEXT NOT NULL,
    "panelTilt" INTEGER NOT NULL,
    "panelType" TEXT NOT NULL,
    "totalDc" REAL NOT NULL,
    "totalAc" REAL NOT NULL,
    "lat" REAL NOT NULL,
    "lon" REAL NOT NULL
);
INSERT INTO "new_Asset" ("address", "assetName", "axisTracker", "hemisphere", "id", "lat", "panelTilt", "panelType", "totalAc", "totalDc") SELECT "address", "assetName", "axisTracker", "hemisphere", "id", "lat", "panelTilt", "panelType", "totalAc", "totalDc" FROM "Asset";
DROP TABLE "Asset";
ALTER TABLE "new_Asset" RENAME TO "Asset";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
