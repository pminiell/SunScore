export const DELETE_ASSET_MUTATION = gql`
  mutation DeleteAssetMutation($id: Int!) {
    deleteAsset(id: $id) {
      id
    }
  }
`
