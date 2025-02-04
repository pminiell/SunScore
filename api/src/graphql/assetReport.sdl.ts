export const schema = gql`
  type AssetReport {
    id: Int!
    assetId: Int!
    acMonthly: [Float]
    poaMonthly: [Float]
    solradMonthly: [Float]
    dcMonthly: [Float]
    acAnnual: Float
    capacityFactor: Float
    solradAnnual: Float
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
    assetReport(assetId: Int!): AssetReport @requireAuth
  }

  type PvData {
    acMonthly: [Float]
    poaMonthly: [Float]
    solradMonthly: [Float]
    dcMonthly: [Float]
    acAnnual: Float
    solradAnnual: Float
    capacityFactor: Float
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

  input UpdateAssetReportInput {
    arrayType: Int!
    assetName: String!
    azimuth: Float!
    moduleType: Int!
    panelTilt: Float!
    systemCapacity: Float!
    systemLosses: Float!
    address: String!
}

  type Mutation {
    createAssetReport(input: CreateAssetReportInput!): AssetReport! @requireAuth
    updateAssetReport(id: Int!, input: UpdateAssetReportInput!): AssetReport! @requireAuth
    deleteAssetReport(id: Int!): AssetReport! @requireAuth
  }
`
