import { fetch } from '@whatwg-node/fetch'

type IrradianceResponse = {
  annualDni: number
  annualGhi: number
  annualTilt: number
  monthlyDni: Record<string, number>
  monthlyGhi: Record<string, number>
  monthlyTilt: Record<string, number>
}

export const getIrradiance = async ({
  lat,
  lon,
}): Promise<IrradianceResponse> => {
  const response = await fetch(
    `https://developer.nrel.gov/api/solar/solar_resource/v1.json?parameters&api_key=${process.env.NREL_API_KEY}&lat=${lat}&lon=${lon}`
  )
  const json = await response.json()
  console.log(json)

  return {
    annualDni: json.outputs.avg_dni.annual,
    annualGhi: json.outputs.avg_ghi.annual,
    annualTilt: json.outputs.avg_lat_tilt.annual,
    monthlyDni: json.outputs.avg_dni.monthly,
    monthlyGhi: json.outputs.avg_ghi.monthly,
    monthlyTilt: json.outputs.avg_lat_tilt.monthly,
  }
}
