import { fetchPvWattData } from 'src/lib/fetchPvWattData'
import { db } from 'src/lib/db'

export const getAndStorePvWattData = async (input) => {
  console.log(input);
  const pvData = await fetchPvWattData(input);
  console.log(pvData);
  // TODO - the report contains scalar lists which will need specific handling to store within our db. We need to determine if this is even supported.
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

export const createAssetReport = async ({ input }) => {
  return await getAndStorePvWattData(input)
}

export const assetReport = async ({ assetId }) => {
  return await db.assetReport.findUnique({
    where: { assetId },
  })
}
