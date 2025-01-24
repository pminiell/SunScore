import { fetch } from '@whatwg-node/fetch'

export type PvWattData = {
  systemCapacity: number,
  moduleType: number,
  systemLosses: number,
  arrayType: number,
  panelTilt: number,
  azimuth: number,
  lat: number,
  lon: number,
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



export const generatePvData = async (input: PvWattData): Promise<PvWattResponse> => {
  const response = await fetch(
    `https://developer.nrel.gov/api/pvwatts/v8.json?parameters&api_key=${process.env.NREL_API_KEY}&lat=${input.lat}&lon=${input.lon}&azimuth=${input.azimuth}&system_capacity=${input.systemCapacity}&losses=${input.systemLosses}&array_type=${input.arrayType}&module_type=${input.moduleType}&tilt=${input.panelTilt}`
  )
  const json = await response.json();
  console.log(json, "JSON");
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

