export const schema = gql`
  type AssetReport {
    id: Int!
    assetId: Int
    ac_monthly: [Float]
    poa_monthly: [Float]
    solrad_monthly: [Float]
    dc_monthly: [Float]
    ac_annual: Float
    solrad_annual: Float
    capacity_factor: Float
    asset: Asset
  }

  type Query {
    generateAssetReport(
      systemCapacity: Float!,
      moduleType: Int!,
      systemLosses: Float!,
      arrayType: Int!,
      panelTilt: Float!,
      azimuth: Float!,
      lat: Float!,
      lon: Float!,
    ): AssetReport! @requireAuth
    assetReports: [AssetReport!]! @requireAuth
    assetReport(id: Int!): AssetReport @requireAuth
  }
`
