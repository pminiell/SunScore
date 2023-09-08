import type { Prisma, Asset } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AssetCreateArgs>({
  asset: {
    one: {
      data: {
        assetName: 'String',
        address: 'String',
        axisTracker: 'String',
        hemisphere: 'String',
        panelTilt: 1497376,
        panelType: 'String',
        totalDc: 1066420.7890685007,
        totalAc: 4873491.200967019,
      },
    },
    two: {
      data: {
        assetName: 'String',
        address: 'String',
        axisTracker: 'String',
        hemisphere: 'String',
        panelTilt: 9694516,
        panelType: 'String',
        totalDc: 8291144.162223633,
        totalAc: 1623963.1048734714,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Asset, 'asset'>
