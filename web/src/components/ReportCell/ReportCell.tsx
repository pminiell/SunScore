import { CellSuccessProps } from "@redwoodjs/web";
import PvWattReport from "../PvWattReport/PvWattReport";
import { FindAssetReportById } from "types/graphql";

export const QUERY = gql`
  query FindAssetReportById($assetId: Int!) {
    assetReport: assetReport(assetId: $assetId) {
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
  console.log(assetReport);
  return <PvWattReport assetReport={assetReport} />;
}
