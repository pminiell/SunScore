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
        <li>Annual Average DNI: {irradiance?.annualDni}</li>
        <li>Annual Average DNI: {irradiance?.annualGhi}</li>
        <li>Annual Average Tilt: {irradiance?.annualTilt}</li>
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
