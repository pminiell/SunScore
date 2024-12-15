import type {
  DeleteAssetMutationVariables,
  FindAssetById,
} from "types/graphql";

import { Link, routes } from "@redwoodjs/router";

import { truncate } from "src/lib/formatters";
interface Props {
  asset: NonNullable<FindAssetById["asset"]>;
  onDeleteClick: (id: DeleteAssetMutationVariables["id"]) => void;
}

const Asset = ({ asset, onDeleteClick }: Props) => {
  return (
    <tr>
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
            to={routes.asset({ id: asset.id })}
            title={"Show asset " + asset.id + " detail"}
            className="rw-button rw-button-small"
          >
            Show
          </Link>
          <Link
            to={routes.editAsset({ id: asset.id })}
            title={"Edit asset " + asset.id}
            className="rw-button rw-button-small rw-button-blue"
          >
            Edit
          </Link>
          <button
            type="button"
            title={"Delete asset " + asset.id}
            className="rw-button rw-button-small rw-button-red"
            onClick={() => onDeleteClick(asset.id)}
          >
            Delete
          </button>
        </nav>
      </td>
    </tr>
  );
};

export default Asset;
