export const QUERY = gql`
  query GetIrradianceQuery($lat: Int!, $lon: Int!) {
    irradiance: getIrradiance(lat: $lat, lon: $lon) {
      annualDni
      annualGhi
      annualTilt
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ irradiance }) => {
  return (
    <div>
      <h1>Annual Dni: {irradiance.annualDni}</h1>
      <h1>Annual Ghi: {irradiance.annualGhi}</h1>
      <h1>Annual Tilt: {irradiance.annualTilt}</h1>
    </div>
  )
}
