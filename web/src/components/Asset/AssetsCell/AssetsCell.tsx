import type {DeleteAssetMutationVariables, FindAssets} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import {truncate} from "src/lib/formatters";
import {useMutation} from "@redwoodjs/web";
import {DELETE_ASSET_MUTATION} from "src/utils/DeleteAssetMutation";
import {toast} from "@redwoodjs/web/toast";

export const QUERY = gql`
  query FindAssets {
    assets {
      id
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
      user
      {
        id
      }
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
  const [deleteAsset] = useMutation(DELETE_ASSET_MUTATION, {
    onCompleted: () => {
      toast.success('Asset deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteAssetMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete asset ' + id + '?')) {
      deleteAsset({ variables: { id } })
    }
  }

  return (
    <>
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">Assets</h1>
        <Link to={routes.newAsset()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div>
        </Link>
      </header>
      <table className="rw-table">
        <thead>
        <tr>
          <th>Id</th>
          <th>Asset name</th>
          <th>Address</th>
          <th>Axis tracker</th>
          <th>System Capacity</th>
          <th>System Losses</th>
          <th>Panel Tilt</th>
          <th>Module</th>
          <th>Azimuth</th>
          <th>&nbsp;</th>
        </tr>
        </thead>
        <tbody>
        {assets.map((asset) => (
          <tr key={asset.id}>
            <td>{truncate(asset.id)}</td>
            <td>{truncate(asset.assetName)}</td>
            <td>{truncate(asset.address)}</td>
            <td>{truncate(asset.arrayType)}</td>
            <td>{truncate(asset.systemCapacity)}</td>
            <td>{truncate(asset.systemLosses)}</td>
            <td>{truncate(asset.panelTilt)}</td>
            <td>{truncate(asset.moduleType)}</td>
            <td>{truncate(asset.azimuth)}</td>
            <td>
              <nav className="rw-table-actions">
                <Link
                  to={routes.asset({id: asset.id})}
                  title={'Show asset ' + asset.id + ' detail'}
                  className="rw-button rw-button-small"
                >
                  Show
                </Link>
                <Link
                  to={routes.editAsset({id: asset.id})}
                  title={'Edit asset ' + asset.id}
                  className="rw-button rw-button-small rw-button-blue"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  title={'Delete asset ' + asset.id}
                  className="rw-button rw-button-small rw-button-red"
                  onClick={() => onDeleteClick(asset.id)}
                >
                  Delete
                </button>
              </nav>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </>

  )
}
