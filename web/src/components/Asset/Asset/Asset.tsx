import type { DeleteAssetMutationVariables, FindAssetById } from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { DELETE_ASSET_MUTATION } from 'src/utils/DeleteAssetMutation'

import {} from 'src/lib/formatters'

interface Props {
  asset: NonNullable<FindAssetById['asset']>
}

const Asset = ({ asset }: Props) => {
  const assetFields = {
    id: asset.id,
    assetName: asset.assetName,
    lat: asset.lat,
    lon: asset.lon,
    address: asset.address,
    systemCapacity: asset.systemCapacity,
    moduleType: asset.moduleType,
    systemLosses: asset.systemLosses,
    arrayType: asset.arrayType,
    panelTilt: asset.panelTilt,
    azimuth: asset.azimuth,
  }

  const [deleteAsset] = useMutation(DELETE_ASSET_MUTATION, {
    onCompleted: () => {
      toast.success('Asset deleted')
      navigate(routes.assets())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteAssetMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete asset ' + id + '?')) {
      deleteAsset({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Asset {asset.id} Details
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{asset.id}</td>
            </tr>
            <tr>
              <th>Asset name</th>
              <td>{asset.assetName}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{asset.address}</td>
            </tr>
            <tr>
              <th>Axis Tracker</th>
              <td>{asset.arrayType}</td>
            </tr>
            <tr>
              <th>System Capacity</th>
              <td>{asset.systemCapacity}</td>
            </tr>
            <tr>
              <th>System Losses</th>
              <td>{asset.systemLosses}</td>
            </tr>
            <tr>
              <th>Panel Tilt</th>
              <td>{asset.panelTilt}</td>
            </tr>
            <tr>
              <th>Module</th>
              <td>{asset.moduleType}</td>
            </tr>
            <tr>
              <th>Azimuth</th>
              <td>{asset.azimuth}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAsset({ id: asset.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(asset.id)}
        >
          Delete
        </button>
        <Link
          to={routes.assetReport({ id: asset.id })}
          className="rw-button rw-button-blue"
        >
          View Report
        </Link>
      </nav>
    </>
  )
}

export default Asset
