export const QUERY = gql`
  query GetIrradianceQuery($lat: Float!, $lon: Float!) {
    irradiance: getIrradiance(lat: $lat, lon: $lon) {
      annualDni
      annualGhi
      annualTilt
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div>{`No data found for address entered - sorry about that :(`}</div>
)

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

type Report = {
  id: number
  annualDni: number
  annualGhi: number
  annualTilt: number
}

export const Success = ({ report }: { report: Report }) => {
  if (!report) {
    return <Empty />
  }
  return (
    <div>
      <h1>Annual Dni: {report.annualDni}</h1>
      <h1>Annual Ghi: {report.annualGhi}</h1>
      <h1>Annual Tilt: {report.annualTilt}</h1>
    </div>
  )
}
