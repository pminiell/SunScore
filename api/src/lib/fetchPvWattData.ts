import { fetch } from '@whatwg-node/fetch'


type PvWattInput = {
  assetId: number,
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
  acMonthly: number[]
  poaMonthly: number[]
  solradMonthly: number[]
  dcMonthly: number[]
  acAnnual: number
  solradAnnual: number
  capacityFactor: number
}

export const fetchPvWattData = async (input: PvWattInput): Promise<PvWattResponse> => {
  const response = await fetch(
    `https://developer.nrel.gov/api/pvwatts/v8.json?parameters&api_key=${process.env.NREL_API_KEY}&lat=${input.lat}&lon=${input.lon}&azimuth=${input.azimuth}&system_capacity=${input.systemCapacity}&losses=${input.systemLosses}&array_type=${input.arrayType}&module_type=${input.moduleType}&tilt=${input.panelTilt}`
  )
  const json = await response.json();
  return {
    acMonthly: json.outputs.ac_monthly as number[],
    poaMonthly: json.outputs.poa_monthly as number[],
    solradMonthly: json.outputs.solrad_monthly as number[],
    dcMonthly: json.outputs.dc_monthly as number[],
    acAnnual: json.outputs.ac_annual as number,
    solradAnnual: json.outputs.solrad_annual as number,
    capacityFactor: json.outputs.capacity_factor as number,
  }
}

