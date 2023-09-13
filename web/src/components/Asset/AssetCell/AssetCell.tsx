import type { FindAssetById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Asset from 'src/components/Asset/Asset'

export const QUERY = gql`
  query FindAssetById($id: Int!) {
    asset: asset(id: $id) {
      id
      assetName
      address
      axisTracker
      hemisphere
      panelTilt
      panelType
      totalDc
      totalAc
      lat
      lon
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Asset not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ asset }: CellSuccessProps<FindAssetById>) => {
  return <Asset asset={asset} />
}
