import type { DeleteAssetMutationVariables, FindAssets } from "types/graphql";

import { Link, routes } from "@redwoodjs/router";
import type { CellFailureProps, CellSuccessProps } from "@redwoodjs/web";

import { useMutation } from "@redwoodjs/web";
import { DELETE_ASSET_MUTATION } from "src/utils/DeleteAssetMutation";
import { toast } from "@redwoodjs/web/toast";
import Asset from "src/components/Asset/Asset";

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
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {"No assets yet. "}
      <Link to={routes.newAsset()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ assets }: CellSuccessProps<FindAssets>) => {
  const [deleteAsset] = useMutation(DELETE_ASSET_MUTATION, {
    onCompleted: () => {
      toast.success("Asset deleted");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id: DeleteAssetMutationVariables["id"]) => {
    if (confirm("Are you sure you want to delete asset " + id + "?")) {
      deleteAsset({ variables: { id } });
    }
  };

  return (
    <>
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">Assets</h1>
        <Link to={routes.newAsset()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div>
        </Link>
      </header>
      <input type="text" placeholder="Search" className="rw-input" />
      <table className="rw-table">
        <thead>
          <tr>
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
            <Asset key={asset.id} asset={asset} onDeleteClick={onDeleteClick} />
          ))}
        </tbody>
      </table>
    </>
  );
};
