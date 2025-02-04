export const schema = gql`
  type Asset {
    id: Int!
    user: User!
    assetName: String!
    systemCapacity: Float!
    moduleType: Int!
    systemLosses: Float!
    arrayType: Int!
    panelTilt: Float!
    address: String!
    lat: Float!
    lon: Float!
    azimuth: Float!
    reportGenerated: Boolean!
    assetReport: AssetReport
  }

  type Query {
    assets: [Asset!]! @requireAuth
    asset(id: Int!): Asset @requireAuth
  }

  input CreateAssetInput {
    assetName: String!
    systemCapacity: Float!
    moduleType: Int!
    systemLosses: Float!
    arrayType: Int!
    panelTilt: Float!
    address: String!
    azimuth: Float!
  }

  input UpdateAssetInput {
    assetName: String!
    systemCapacity: Float!
    moduleType: Int!
    systemLosses: Float!
    arrayType: Int!
    panelTilt: Float!
    address: String!
    azimuth: Float!
    reportGenerated: Boolean
  }

  input updateAssetReportGenerationInput {
    reportGenerated: Boolean!
  }

  type Mutation {
    createAsset(input: CreateAssetInput!): Asset! @requireAuth
    updateAsset(id: Int!, input: UpdateAssetInput!): Asset! @requireAuth
    updateAssetReportGeneration(id: Int!, input: updateAssetReportGenerationInput!): Asset! @requireAuth
    deleteAsset(id: Int!): Asset! @requireAuth
  }
`
