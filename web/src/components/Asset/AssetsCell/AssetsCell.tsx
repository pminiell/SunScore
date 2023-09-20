import type { FindAssets } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Assets from 'src/components/Asset/Assets'

export const QUERY = gql`
  query FindAssets {
    assets {
      id
      userId
      assetName
      systemCapacity
      moduleType
      systemLosses
      arrayType
      panelTilt
      address
      lat
      lon
      azimuth
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No assets yet. '}
      <Link to={routes.newAsset()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ assets }: CellSuccessProps<FindAssets>) => {
  return (
    <>
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">Assets</h1>
        <Link to={routes.newAsset()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div>
        </Link>
      </header>
      <Assets assets={assets} />
    </>
  )
}
