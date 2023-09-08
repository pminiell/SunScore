import type { Asset } from '@prisma/client'

import { assets, asset, createAsset, updateAsset, deleteAsset } from './assets'
import type { StandardScenario } from './assets.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('assets', () => {
  scenario('returns all assets', async (scenario: StandardScenario) => {
    const result = await assets()

    expect(result.length).toEqual(Object.keys(scenario.asset).length)
  })

  scenario('returns a single asset', async (scenario: StandardScenario) => {
    const result = await asset({ id: scenario.asset.one.id })

    expect(result).toEqual(scenario.asset.one)
  })

  scenario('creates a asset', async () => {
    const result = await createAsset({
      input: {
        assetName: 'String',
        address: 'String',
        axisTracker: 'String',
        hemisphere: 'String',
        panelTilt: 8141097,
        panelType: 'String',
        totalDc: 3730765.4037184236,
        totalAc: 4483186.638325414,
      },
    })

    expect(result.assetName).toEqual('String')
    expect(result.address).toEqual('String')
    expect(result.axisTracker).toEqual('String')
    expect(result.hemisphere).toEqual('String')
    expect(result.panelTilt).toEqual(8141097)
    expect(result.panelType).toEqual('String')
    expect(result.totalDc).toEqual(3730765.4037184236)
    expect(result.totalAc).toEqual(4483186.638325414)
  })

  scenario('updates a asset', async (scenario: StandardScenario) => {
    const original = (await asset({ id: scenario.asset.one.id })) as Asset
    const result = await updateAsset({
      id: original.id,
      input: { assetName: 'String2' },
    })

    expect(result.assetName).toEqual('String2')
  })

  scenario('deletes a asset', async (scenario: StandardScenario) => {
    const original = (await deleteAsset({ id: scenario.asset.one.id })) as Asset
    const result = await asset({ id: original.id })

    expect(result).toEqual(null)
  })
})
