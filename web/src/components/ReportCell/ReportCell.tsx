import { CellSuccessProps } from "@redwoodjs/web";
import PvWattReport from "../PvWattReport/PvWattReport";
import { FindAssetReportById } from "types/graphql";

export const QUERY = gql`
  query FindAssetReportById($assetId: Int!) {
    assetReport: assetReport(assetId: $assetId) {
      id
      assetId
      acMonthly
      poaMonthly
      solradMonthly
      dcMonthly
      acAnnual
      solradAnnual
      capacityFactor
}
  }
`;

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ assetReport }: CellSuccessProps<FindAssetReportById>) => {
  console.log('assetReport', assetReport);
  return <PvWattReport assetReport={assetReport} />;
}
