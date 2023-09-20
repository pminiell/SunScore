import IrradianceReport from '../Reports/IrradianceReport/IrradianceReport'

export const QUERY = gql`
  query GetIrradianceQuery($lat: Float!, $lon: Float!) {
    irradiance: getIrradiance(lat: $lat, lon: $lon) {
      annualDni
      annualGhi
      annualTilt
      monthlyDni
      monthlyGhi
      monthlyTilt
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

type MonthlyData = {
  month: string
  value: number
}

type Irradiance = {
  annualDni: number
  annualGhi: number
  annualTilt: number
  monthlyDni: MonthlyData[]
  monthlyGhi: MonthlyData[]
  monthlyTilt: MonthlyData[]
}

export const Success = ({ irradiance }: { irradiance: Irradiance }) => {
  if (
    !irradiance.annualDni &&
    !irradiance.annualGhi &&
    !irradiance.annualTilt
  ) {
    console.log('irradiance', irradiance)
    return <Empty />
  }

  return <IrradianceReport irradiance={irradiance} />
}
