export const schema = gql`
  type AssetReport {
    id: Int!
    assetId: Int!
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
    generatePvData(
      systemCapacity: Float!,
      moduleType: Int!,
      systemLosses: Float!,
      arrayType: Int!,
      panelTilt: Float!,
      azimuth: Float!,
      lat: Float!,
      lon: Float!,
    ): PvData! @requireAuth
    assetReports: [AssetReport!]! @requireAuth
    assetReport(id: Int!): AssetReport @requireAuth
  }

  type PvData {
    ac_monthly: [Float]
    poa_monthly: [Float]
    solrad_monthly: [Float]
    dc_monthly: [Float]
    ac_annual: Float
    solrad_annual: Float
    capacity_factor: Float
  }

  input CreateAssetReportInput {
    assetId: Int!
    systemCapacity: Float!,
    moduleType: Int!,
    systemLosses: Float!,
    arrayType: Int!,
    panelTilt: Float!,
    azimuth: Float!,
    lat: Float!,
    lon: Float!,
  }

  type Mutation {
    createAssetReport(input: CreateAssetReportInput!): AssetReport! @requireAuth
    updateAssetReport(id: Int!, input: CreateAssetReportInput!): AssetReport! @requireAuth
    deleteAssetReport(id: Int!): AssetReport! @requireAuth
  }
`
