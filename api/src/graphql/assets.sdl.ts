export const schema = gql`
  type Asset {
    id: Int!
    userId: Int
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
    assets: [Asset!]! @skipAuth
    asset(id: Int!): Asset @skipAuth
  }

  input CreateAssetInput {
    userId: Int!
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
    createAsset(input: CreateAssetInput!): Asset! @skipAuth
    updateAsset(id: Int!, input: UpdateAssetInput!): Asset! @skipAuth
    deleteAsset(id: Int!): Asset! @skipAuth
  }
`
