// import type { FindPvWattQuery, FindPvWattQueryVariables } from 'types/graphql'

import PvWattReport from '../Reports/PvWattReport/PvWattReport'

// import PvWattReport from '../Reports/PvWattReport/PvWattReport'

// import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query getPvWattData(
    $systemCapacity: Float!
    $moduleType: Int!
    $systemLosses: Float!
    $arrayType: Int!
    $panelTilt: Float!
    $azimuth: Float!
    $lat: Float!
    $lon: Float!
  ) {
    pvWatt: getPvWattData(
      systemCapacity: $systemCapacity
      moduleType: $moduleType
      systemLosses: $systemLosses
      arrayType: $arrayType
      panelTilt: $panelTilt
      azimuth: $azimuth
      lat: $lat
      lon: $lon
    ) {
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

type PvWattResponse = {
  ac_monthly: number[]
  poa_monthly: number[]
  solrad_monthly: number[]
  dc_monthly: number[]
  ac_annual: number
  solrad_annual: number
  capacity_factor: number
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ pvWatt }: { pvWatt: PvWattResponse }) => {
  return <PvWattReport pvWatt={pvWatt} />
}
