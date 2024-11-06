// src/services/combinedService.ts
import { fetch } from '@whatwg-node/fetch'
import { db } from 'src/lib/db'

type IrradianceResponse = {
  annualDni: number
  annualGhi: number
  annualTilt: number
  monthlyDni: Record<string, number>
  monthlyGhi: Record<string, number>
  monthlyTilt: Record<string, number>
}

type PvWattResponse = {
  ac_monthly: number[]
  poa_monthly: number[]
  solrad_monthly: number[]
  dc_monthly: number[]
  ac_annual: number
  solrad_annual: number
  capacity_factor: number
}

type CombinedResponse = {
  irradiance: IrradianceResponse
  pvWatt: PvWattResponse
}

export const getReportData = async (params): Promise<CombinedResponse> => {
  const irradianceResponse = await fetch(
    `https://developer.nrel.gov/api/solar/solar_resource/v1.json?parameters&api_key=${process.env.NREL_API_KEY}&lat=${lat}&lon=${lon}`
  )
  const irradianceData = await irradianceResponse.json()

  const pvWattResponse = await fetch(
    `https://developer.nrel.gov/api/pvwatts/v8.json?parameters&api_key=${process.env.NREL_API_KEY}&lat=${params.lat}&lon=${params.lon}&azimuth=${params.azimuth}&system_capacity=${params.systemCapacity}&losses=${params.systemLosses}&array_type=${params.arrayType}&module_type=${params.moduleType}&tilt=${params.panelTilt}`
  )
  const pvWattData = await pvWattResponse.json()

  // Store the combined response in the database
  await db.combinedResponse.create({
    data: {
      requestParams: JSON.stringify(params),
      irradianceData: JSON.stringify(irradianceData),
      pvWattData: JSON.stringify(pvWattData.outputs),
    },
  })

  return {
    irradiance: irradianceData,
    pvWatt: pvWattData,
  }
}
