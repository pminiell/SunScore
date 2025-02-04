import type { Asset, EditAssetById, UpdateAssetInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AssetForm from 'src/components/Asset/AssetForm'

export const QUERY = gql`
  query EditAssetById($id: Int!) {
    asset: asset(id: $id) {
      id
      assetName
      systemCapacity
      moduleType
      systemLosses
      arrayType
      panelTilt
      address
      azimuth
      reportGenerated
      user
      {
        id
      }
      assetReport
      {
        id
      }
    }
  }
`
const UPDATE_ASSET_MUTATION = gql`
  mutation UpdateAssetMutation($id: Int!, $input: UpdateAssetInput!) {
    updateAsset(id: $id, input: $input) {
      assetName
      systemCapacity
      moduleType
      systemLosses
      arrayType
      panelTilt
      address
      azimuth
      reportGenerated
    }
  }
`

const UPDATE_ASSET_REPORT_WITH_PV_DATA = gql`
  mutation UpdateAssetReport($id: Int!, $input: UpdateAssetReportInput!) {
    updateAssetReport(id: $id, input: $input) {
        id
        assetId
      }}
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ asset }: CellSuccessProps<EditAssetById>) => {
  const [updateAsset, { loading, error }] = useMutation(UPDATE_ASSET_MUTATION, {
    onCompleted: (data) => {
      updateAssetReport({
        variables: {
          id: asset.assetReport.id, input: {
            assetId: data.updateAsset.id,
            systemCapacity: data.updateAsset.systemCapacity,
            moduleType: data.updateAsset.moduleType,
            systemLosses: data.updateAsset.systemLosses,
            arrayType: data.updateAsset.arrayType,
            panelTilt: data.updateAsset.panelTilt,
            azimuth: data.updateAsset.azimuth,
            address: data.updateAsset.address,
            assetName: data.updateAsset.assetName,
          }
        }
      })
      toast.success('Asset updated')
      navigate(routes.assets())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const [updateAssetReport] = useMutation(UPDATE_ASSET_REPORT_WITH_PV_DATA);

  const onSave = (
    input: UpdateAssetInput,
    id: EditAssetById['asset']['id']
  ) => {
    updateAsset({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Asset {asset?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AssetForm
          asset={asset}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
