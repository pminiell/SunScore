import { PvWattData } from "src/services/assetReports/assetReport";
import PvWattReport from "src/components/PvWattReport/PvWattReport";
import { useMutation } from "@redwoodjs/web";
import { useParams } from "@redwoodjs/router";

type PvWattResponse = {
  ac_monthly: number[]
  poa_monthly: number[]
  solrad_monthly: number[]
  dc_monthly: number[]
  ac_annual: number
  solrad_annual: number
  capacity_factor: number
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





export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ pvData }) => {
  const { id } = useParams();
  console.log("id", id);
  console.log("pvData", pvData);

  return <PvWattReport assetReport={pvData} />;
}
