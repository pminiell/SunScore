export const schema = gql`
  type PvWatt {
    ac_monthly: [Float]
    poa_monthly: [Float]
    solrad_monthly: [Float]
    dc_monthly: [Float]
    ac_annual: Float
    solrad_annual: Float
    capacity_factor: Float
  }
  type Query {
    getPvWattData(
      systemCapacity: Float!
      moduleType: Int!
      systemLosses: Float!
      arrayType: Int!
      panelTilt: Float!
      azimuth: Float!
      lat: Float!
      lon: Float!
    ): PvWatt! @skipAuth
  }
`
