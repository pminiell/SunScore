import {PvWattData} from "src/services/assetReports/assetReport";
import PvWattReport from "src/components/PvWattReport/PvWattReport";

export const QUERY = gql`
  query GenerateReportQuery( $systemCapacity: Float!,
  $moduleType: Int!,
  $systemLosses: Float!,
  $arrayType: Int!,
  $panelTilt: Float!,
  $azimuth: Float!,
  $lat: Float!,
  $lon: Float!){
  assetReport: generateAssetReport(
      systemCapacity: $systemCapacity,
      moduleType: $moduleType,
      systemLosses: $systemLosses,
      arrayType: $arrayType,
      panelTilt: $panelTilt,
      azimuth: $azimuth,
      lat: $lat,
      lon: $lon,
    ){
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

export const Failure = ({
  error,
}) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ assetReport } : {assetReport : PvWattResponse}) => {
  return <PvWattReport assetReport={assetReport} />;
}
