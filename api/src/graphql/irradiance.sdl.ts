export const schema = gql`
  type Irradiance {
    annualDni: Float
    annualGhi: Float
    annualTilt: Float
  }
  type Query {
    getIrradiance(lat: Float!, lon: Float!): Irradiance! @skipAuth
  }
`
