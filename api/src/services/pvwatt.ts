import {fetch} from '@whatwg-node/fetch'

type PvWattResponse = {
  ac_monthly: number[]
  poa_monthly: number[]
  solrad_monthly: number[]
  dc_monthly: number[]
  ac_annual: number
  solrad_annual: number
  capacity_factor: number
}

export const getPvWattData = async ({
                                      systemCapacity,
                                      moduleType,
                                      systemLosses,
                                      arrayType,
                                      panelTilt,
                                      azimuth,
                                      lat,
                                      lon,
                                    }): Promise<PvWattResponse> => {
  const response = await fetch(
    `https://developer.nrel.gov/api/pvwatts/v8.json?parameters&api_key=${process.env.NREL_API_KEY}&lat=${lat}&lon=${lon}&azimuth=${azimuth}&system_capacity=${systemCapacity}&losses=${systemLosses}&array_type=${arrayType}&module_type=${moduleType}&tilt=${panelTilt}`
  )
  const json = await response.json()


  return {
    ac_monthly: json.outputs.ac_monthly as number[],
    poa_monthly: json.outputs.poa_monthly as number[],
    solrad_monthly: json.outputs.solrad_monthly as number[],
    dc_monthly: json.outputs.dc_monthly as number[],
    ac_annual: json.outputs.ac_annual as number,
    solrad_annual: json.outputs.solrad_annual as number,
    capacity_factor: json.outputs.capacity_factor as number,
  }
}
