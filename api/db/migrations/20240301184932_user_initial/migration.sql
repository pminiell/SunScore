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
    "azimuth" REAL NOT NULL,
    CONSTRAINT "Asset_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Asset" ("address", "arrayType", "assetName", "azimuth", "id", "lat", "lon", "moduleType", "panelTilt", "systemCapacity", "systemLosses", "userId") SELECT "address", "arrayType", "assetName", "azimuth", "id", "lat", "lon", "moduleType", "panelTilt", "systemCapacity", "systemLosses", "userId" FROM "Asset";
DROP TABLE "Asset";
ALTER TABLE "new_Asset" RENAME TO "Asset";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
