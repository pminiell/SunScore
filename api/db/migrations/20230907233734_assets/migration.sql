-- CreateTable
CREATE TABLE "Asset" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "assetName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "axisTracker" TEXT NOT NULL,
    "hemisphere" TEXT NOT NULL,
    "panelTilt" INTEGER NOT NULL,
    "panelType" TEXT NOT NULL,
    "totalDc" REAL NOT NULL,
    "totalAc" REAL NOT NULL
);
