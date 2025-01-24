import type {
  DeleteAssetMutationVariables,
  FindAssetById,
} from "types/graphql";

import { Link, navigate, routes } from "@redwoodjs/router";
import { useMutation } from "@redwoodjs/web";
import { toast } from "@redwoodjs/web/toast";
import ReportCell from "src/components/ReportCell/ReportCell";

import { DELETE_ASSET_MUTATION } from "src/utils/DeleteAssetMutation";

import { } from "src/lib/formatters";
import { useState } from "react";

interface Props {
  asset: NonNullable<FindAssetById["asset"]>;
}

export const QUERY = gql`
  query GenerateReportQuery
  ( $systemCapacity: Float!,
    $moduleType: Int!,
    $systemLosses: Float!,
    $arrayType: Int!,
    $panelTilt: Float!,
    $azimuth: Float!,
    $lat: Float!,
    $lon: Float!
  )
  {
    pvData: generatePvData(
      systemCapacity: $systemCapacity,
      moduleType: $moduleType,
      systemLosses: $systemLosses,
      arrayType: $arrayType,
      panelTilt: $panelTilt,
      azimuth: $azimuth,
      lat: $lat,
      lon: $lon,
    )
    {
      ac_monthly
      poa_monthly
      solrad_monthly
      dc_monthly
      ac_annual
      solrad_annual
      capacity_factor
    }
  }
`

const AssetDetails = ({ asset }: Props) => {
  const [report, setReport] = useState(false);
  console.log(asset);

  const setReportData = () => {
    setReport((prev) => !prev);
  }

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

  const [deleteAsset] = useMutation(DELETE_ASSET_MUTATION, {
    onCompleted: () => {
      toast.success("Asset deleted");
      navigate(routes.assets());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (id: DeleteAssetMutationVariables["id"]) => {
    if (confirm("Are you sure you want to delete asset " + id + "?")) {
      deleteAsset({ variables: { id } });
    }
  };

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
              <td>{arrayTypeText}</td>
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
              <td>{moduleTypeText}</td>
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
        <button type="button"
          className="rw-button rw-button-icon"
          onClick={setReportData}>Generate report</button>
        {report ? <ReportCell
          systemCapacity={asset.systemCapacity}
          moduleType={asset.moduleType}
          systemLosses={asset.systemLosses}
          arrayType={asset.arrayType}
          panelTilt={asset.panelTilt}
          azimuth={asset.azimuth}
          lat={asset.lat}
          lon={asset.lon}
          id={asset.id}
        /> : null}
        <Link
          to={routes.assetReport({ id: asset.id, azimuth: asset.azimuth })}
          className="rw-button rw-button-blue"
        >
          View Report
        </Link>
      </nav>
    </>
  );
};

export default AssetDetails;
