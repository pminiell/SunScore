const IrradianceReport = ({ irradiance }) => {
  const currentMonthShort = new Date()
    .toLocaleString('default', { month: 'short' })
    .slice(0, 3)
    .toLowerCase()

  const currentMonthLong = new Date().toLocaleString('default', {
    month: 'long',
  })

  return (
    <>
      <ul>
        <li>
          Annual Average Direct Normal Irradiance: {irradiance?.annualDni}{' '}
          <span className="text-sm text-zinc-600">{' kWh/m2/day'}</span>
        </li>
        <li>
          Annual Average Global Horizontal Irradiance: {irradiance?.annualGhi}{' '}
          <span className="text-sm text-zinc-600">{' kWh/m2/day'}</span>
        </li>
        <li>
          Annual Average Tilt at Latitude: {irradiance?.annualTilt}{' '}
          <span className="text-sm text-zinc-600">{' kWh/m2/day'}</span>
        </li>
      </ul>
      <h1 className="text-zinc-600">Current Monthly Average</h1>
      <ul>
        <li>
          {currentMonthLong} DNI: {irradiance?.monthlyDni?.[currentMonthShort]}
        </li>
        <li>
          {currentMonthLong} GHI: {irradiance?.monthlyGhi?.[currentMonthShort]}
        </li>
        <li>
          {currentMonthLong} Tilt:{' '}
          {irradiance?.monthlyTilt?.[currentMonthShort]}
        </li>
      </ul>
    </>
  )
}

export default IrradianceReport
