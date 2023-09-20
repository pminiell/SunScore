export const schema = gql`
  type Irradiance {
    annualDni: Float
    annualGhi: Float
    annualTilt: Float
    monthlyDni: JSONObject
    monthlyGhi: JSONObject
    monthlyTilt: JSONObject
  }
  type Query {
    getIrradiance(lat: Float!, lon: Float!): Irradiance! @skipAuth
  }
`
