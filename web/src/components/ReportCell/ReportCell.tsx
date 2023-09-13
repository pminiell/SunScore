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

export const Success = ({ irradiance }) => {
  if (!irradiance.annualDni) {
    console.log(irradiance)
    return <Empty />
  }

  console.log(irradiance)
  return (
    <div>
      <h1>Annual Dni: {irradiance.annualDni}</h1>
      <h1>Annual Ghi: {irradiance.annualGhi}</h1>
      <h1>Annual Tilt: {irradiance.annualTilt}</h1>
    </div>
  )
}
