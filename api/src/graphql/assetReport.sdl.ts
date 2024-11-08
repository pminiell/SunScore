export const schema = gql`
  type AssetReport {
    id: Int!
    assetId: Int!
    acMonthly: [Float!]!
    poaMonthly: [Float!]!
    solradMonthly: [Float!]!
    dcMonthly: [Float!]!
    acAnnual: Float!
    solradAnnual: Float!
    capacityFactor: Float!
    asset: Asset!
  }

  type Query {
    assetReports: [AssetReport!]! @requireAuth
    assetReport(id: Int!): AssetReport @requireAuth
  }

  input CreateAssetReportInput {
    assetId: Int!
    acMonthly: [Float!]!
    poaMonthly: [Float!]!
    solradMonthly: [Float!]!
    dcMonthly: [Float!]!
    acAnnual: Float!
    solradAnnual: Float!
    capacityFactor: Float!
  }

  input UpdateAssetReportInput {
    assetId: Int
    acMonthly: [Float!]
    poaMonthly: [Float!]
    solradMonthly: [Float!]
    dcMonthly: [Float!]
    acAnnual: Float
    solradAnnual: Float
    capacityFactor: Float
  }

  type Mutation {
    createAssetReport(input: CreateAssetReportInput!): AssetReport! @requireAuth
    updateAssetReport(id: Int!, input: UpdateAssetReportInput!): AssetReport! @requireAuth
    deleteAssetReport(id: Int!): AssetReport! @requireAuth
  }
`
