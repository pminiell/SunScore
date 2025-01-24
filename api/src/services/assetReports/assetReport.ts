import { MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const createAssetReport: MutationResolvers['createAssetReport'] = ({ assetId, input }) => {

  // TODO - the report contains scalar lists which will need specific handling to store within our db. We need to determine if this is even supported.

  return db.assetReport.create({ data: { assetId } });
}



