export const schema = gql`
  type PvWatt {
    ac_monthly: JSONObject
    poa_monthly: JSONObject
    solrad_monthly: JSONObject
    dc_monthly: JSONObject
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
