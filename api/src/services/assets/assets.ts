import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const assets: QueryResolvers['assets'] = () => {
  return db.asset.findMany({ where: { userId: context.currentUser.id } })
}

export const asset: QueryResolvers['asset'] = ({ id }) => {
  return db.asset.findUnique({
    where: { id, userId: context.currentUser.id },
  })
}

export const createAsset: MutationResolvers['createAsset'] = ({ input }) => {
  return db.asset.create({
    data: { ...input , userId: context.currentUser.id }
  })
}

export const updateAsset: MutationResolvers['updateAsset'] = ({
  id,
  input,
}) => {
  return db.asset.update({
    data: input,
    where: { id },
  })
}

export const deleteAsset: MutationResolvers['deleteAsset'] = ({ id }) => {
  return db.asset.delete({
    where: { id },
  })
}

export const Asset = {
  user: (_obj, { root }) =>
    db.asset.findUnique({ where: { id: root.id } }).user(),
}
