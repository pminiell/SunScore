import type { Asset, AssetReport } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AssetForm from 'src/components/Asset/AssetForm'

const CREATE_ASSET_MUTATION = gql`
  mutation CreateAssetMutation($input: CreateAssetInput!) {
    createAsset(input: $input) {
      id
    }
  }
`

const NewAsset = () => {
  const [createAsset, { loading, error }] = useMutation(CREATE_ASSET_MUTATION, {
    onCompleted: () => {
      toast.success('Asset created')
      navigate(routes.assets())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: Asset) => {
    createAsset({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Asset</h2>
      </header>
      <div className="rw-segment-main">
        <AssetForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAsset
