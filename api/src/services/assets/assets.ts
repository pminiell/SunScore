import type { MutationResolvers, QueryResolvers } from "types/graphql";
import getLatLngFromAddress from "src/services/getLatLngFromAddress";
import { getPvWattData } from "src/services/pvwatt";

import { db } from "src/lib/db";

export const assets: QueryResolvers["assets"] = () => {
  return db.asset.findMany({
    where: { userId: context.currentUser.id },
    orderBy: { id: "asc" },
  });
};

export const asset: QueryResolvers["asset"] = ({ id }) => {
  return db.asset.findUnique({
    where: { id, userId: context.currentUser.id },
  });
};

export const createAsset: MutationResolvers["createAsset"] = async (
  { input },
) => {
  const {
    address,
  } = input;
  const [lat, lon] = await getLatLngFromAddress(address);

  return db.asset.create({
    data: { ...input, lat, lon, userId: context.currentUser.id },
  });
};
export const updateAsset: MutationResolvers["updateAsset"] = async ({
  id,
  input,
}) => {
  const {
    address,
  } = input;
  const [lat, lon] = await getLatLngFromAddress(address);

  return db.asset.update({
    data: { ...input, ...input, lat, lon },
    where: { id },
  });
};

export const deleteAsset: MutationResolvers["deleteAsset"] = ({ id }) => {
  return db.asset.delete({
    where: { id },
  });
};

export const Asset = {
  user: (_obj, { root }) =>
    db.asset.findUnique({ where: { id: root.id } }).user(),
};
