export const schema = gql`
  type Irradiance {
    annualDni: Float
    annualGhi: Float!
    annualTilt: Float!
  }
  type Query {
    getIrradiance(lat: Int!, lon: Int!): Irradiance! @skipAuth
  }
`
