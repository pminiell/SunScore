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
  let moduleTypeText = "";
  let arrayTypeText = "";

  switch (asset.moduleType) {
    case 0:
      moduleTypeText = "Standard";
      break;
    case 1:
      moduleTypeText = "Premium";
      break;
    case 2:
      moduleTypeText = "Thin Film";
      break;
  }

  switch (asset.arrayType) {
    case 0:
      arrayTypeText = "Fixed - Open Rack";
      break;
    case 1:
      arrayTypeText = "Fixed - Roof Mounted";
      break;
    case 2:
      arrayTypeText = "1- Axis";
      break;
    case 3:
      arrayTypeText = "1 - Axis Backtracking"
      break;
    case 4:
      arrayTypeText = "2 - Axis";
      break;
  }

  return (
    <tr>
      <td>{truncate(asset.assetName)}</td>
      <td>{truncate(asset.address)}</td>
      <td>{arrayTypeText}</td>
      <td>{truncate(asset.systemCapacity)}</td>
      <td>{truncate(asset.systemLosses)}</td>
      <td>{truncate(asset.panelTilt)}</td>
      <td>{moduleTypeText}</td>
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
