import { fetchPvWattData } from 'src/lib/fetchPvWattData'
import { db } from 'src/lib/db'

export const getAndStorePvWattData = async (input) => {

  console.log('DB Object:', db)
  console.log('DB AssetReport Model:', db.assetReport)


  const pvData = await fetchPvWattData(input);

  // TODO - the report contains scalar lists which will need specific handling to store within our db. We need to determine if this is even supported.
  return db.assetReport.create({
    data: {
      assetId: input.assetId,
      acMonthly: pvData.ac_monthly,
      poaMonthly: pvData.poa_monthly,
      solradMonthly: pvData.solrad_monthly,
      dcMonthly: pvData.dc_monthly,
      acAnnual: pvData.ac_annual,
      solradAnnual: pvData.solrad_annual,
      capacityFactor: pvData.capacity_factor,
    },
  })
}

export const createAssetReport = async ({ input }) => {
  return await getAndStorePvWattData(input)
}
