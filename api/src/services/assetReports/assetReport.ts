import { fetchPvWattData } from 'src/lib/fetchPvWattData'
import { db } from 'src/lib/db'
import getLatLngFromAddress from 'src/services/getLatLngFromAddress';

export const getPvWattData = async (input) => {
  console.log(input);
  const pvData = await fetchPvWattData(input);
  console.log(pvData);
  return pvData;
}
export const createAssetReport = async ({ input }) => {
  const pvData = await getPvWattData(input);

  const assetReport = await db.assetReport.create({
    data: {
      assetId: input.assetId,
      acMonthly: pvData.acMonthly,
      poaMonthly: pvData.poaMonthly,
      solradMonthly: pvData.solradMonthly,
      dcMonthly: pvData.dcMonthly,
      acAnnual: pvData.acAnnual,
      solradAnnual: pvData.solradAnnual,
      capacityFactor: pvData.capacityFactor,
    },
  })


  return assetReport;
}

export const updateAssetReport = async ({ id, input }) => {
  const [lat, lon] = await getLatLngFromAddress(input.address);

  const data = {
    systemCapacity: input.systemCapacity,
    moduleType: input.moduleType,
    systemLosses: input.systemLosses,
    arrayType: input.arrayType,
    panelTilt: input.panelTilt,
    azimuth: input.azimuth,
    lat,
    lon,
  }

  console.log('data', data);

  const pvData = await getPvWattData(data);
  console.log('pvdata', pvData);
  const assetReport = await db.assetReport.update({
    data: {
      acMonthly: pvData.acMonthly,
      poaMonthly: pvData.poaMonthly,
      solradMonthly: pvData.solradMonthly,
      dcMonthly: pvData.dcMonthly,
      acAnnual: pvData.acAnnual,
      solradAnnual: pvData.solradAnnual,
      capacityFactor: pvData.capacityFactor,
    },
    where: { id },
  })

  return assetReport;
}

export const assetReport = async ({ assetId }) => {
  return await db.assetReport.findUnique({
    where: { assetId },
  })
}
