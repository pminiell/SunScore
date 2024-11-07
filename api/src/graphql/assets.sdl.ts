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
    lat: Float!
    lon: Float!
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
    lat: Float!
    lon: Float!
    azimuth: Float!
  }

  type Mutation {
    createAsset(input: CreateAssetInput!): Asset! @requireAuth
    updateAsset(id: Int!, input: UpdateAssetInput!): Asset! @requireAuth
    deleteAsset(id: Int!): Asset! @requireAuth
  }
`
