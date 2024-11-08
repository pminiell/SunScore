import type { QueryResolvers, MutationResolvers } from 'types/graphql'
import getLatLngFromAddress from 'src/services/getLatLngFromAddress'
import { getPvWattData } from "src/services/pvwatt";

import { db } from 'src/lib/db'

// acAnnual: Scalars['Float'];
// acMonthly: Array<Scalars['Float']>;
// assetId: Scalars['Int'];
// capacityFactor: Scalars['Float'];
// dcMonthly: Array<Scalars['Float']>;
// poaMonthly: Array<Scalars['Float']>;
// solradAnnual: Scalars['Float'];
// solradMonthly: Array<Scalars['Float']>;
export const createAssetReport: MutationResolvers['createAssetReport'] = async ({ input }) => {
  const { address, systemCapacity, moduleType, systemLosses, arrayType, panelTilt, azimuth } = input
  const [lat, lon] = await getLatLngFromAddress(address)
  const assetReportData = await getPvWattData({
    systemCapacity,
    moduleType,
    systemLosses,
    arrayType,
    panelTilt,
    azimuth,
    lat,
    lon,
  })

  return db.assetReport.create({
    data: {
      acAnnual: assetReportData.ac_annual,
      acMonthly: assetReportData.ac_monthly,
      poaMonthly: assetReportData.poa_monthly,
      solradMonthly: assetReportData.solrad_monthly,
      dcMonthly: assetReportData.dc_monthly,
      solradAnnual: assetReportData.solrad_annual,
      capacityFactor: assetReportData.capacity_factor,
      assetId: input.assetId as number,
    }
  })
}
