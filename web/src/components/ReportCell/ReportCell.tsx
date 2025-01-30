import PvWattReport from "src/components/PvWattReport/PvWattReport";
import { useParams } from "@redwoodjs/router";

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = () => {
  const { id } = useParams();

  return <div>Woohoo {id}</div>;
}
