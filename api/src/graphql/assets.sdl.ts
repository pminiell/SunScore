export const schema = gql`
  type Asset {
    id: Int!
    assetName: String!
    address: String!
    axisTracker: String!
    hemisphere: String!
    panelTilt: Int!
    panelType: String!
    totalDc: Float!
    totalAc: Float!
    lat: Float!
    lon: Float!
  }

  type Query {
    assets: [Asset!]! @skipAuth
    asset(id: Int!): Asset @skipAuth
  }

  input CreateAssetInput {
    assetName: String!
    address: String!
    axisTracker: String!
    hemisphere: String!
    panelTilt: Int!
    panelType: String!
    totalDc: Float!
    totalAc: Float!
    lat: Float!
    lon: Float!
  }

  input UpdateAssetInput {
    assetName: String
    address: String
    axisTracker: String
    hemisphere: String
    panelTilt: Int
    panelType: String
    totalDc: Float
    totalAc: Float
    lat: Float!
    lon: Float!
  }

  type Mutation {
    createAsset(input: CreateAssetInput!): Asset! @skipAuth
    updateAsset(id: Int!, input: UpdateAssetInput!): Asset! @skipAuth
    deleteAsset(id: Int!): Asset! @skipAuth
  }
`
