import type { FindAssetById } from 'types/graphql'
import { asset } from 'src/services/assets/assets';

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Asset from 'src/components/Asset/Asset'

export const QUERY = gql`
  query FindAssetById($id: Int!) {
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
      lat
      lon
      user
      {
        id
      }
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
