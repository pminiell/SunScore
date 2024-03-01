import { fetch } from '@whatwg-node/fetch'

interface GeocodeResponse {
  results: {
    geometry: {
      location: {
        lat: number
        lng: number
      }
    }
  }[]
}

export const getLatLngFromAddress = async (
  address: string
): Promise<[number, number]> => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${process.env.GOOGLE_API_KEY}`
  )

  const data: GeocodeResponse = await response.json()

  const { lat, lng } = data.results[0].geometry.location

  return [lat, lng]
}