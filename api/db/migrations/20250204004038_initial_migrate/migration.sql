-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asset" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "assetName" TEXT NOT NULL,
    "systemCapacity" DOUBLE PRECISION NOT NULL,
    "moduleType" INTEGER NOT NULL,
    "systemLosses" DOUBLE PRECISION NOT NULL,
    "arrayType" INTEGER NOT NULL,
    "panelTilt" DOUBLE PRECISION NOT NULL,
    "address" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lon" DOUBLE PRECISION NOT NULL,
    "azimuth" DOUBLE PRECISION NOT NULL,
    "reportGenerated" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetReport" (
    "id" SERIAL NOT NULL,
    "assetId" INTEGER NOT NULL,
    "acMonthly" DOUBLE PRECISION[],
    "poaMonthly" DOUBLE PRECISION[],
    "solradMonthly" DOUBLE PRECISION[],
    "dcMonthly" DOUBLE PRECISION[],
    "acAnnual" DOUBLE PRECISION NOT NULL,
    "solradAnnual" DOUBLE PRECISION NOT NULL,
    "capacityFactor" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "AssetReport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AssetReport_assetId_key" ON "AssetReport"("assetId");

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetReport" ADD CONSTRAINT "AssetReport_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE CASCADE ON UPDATE CASCADE;
