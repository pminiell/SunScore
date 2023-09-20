const PvWattReport = ({ pvWatt }) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">PvWattReport</h2>
      <ul className="mb-4">
        <li>
          Annual AC:{' '}
          <span className="font-bold text-zinc-800">
            {pvWatt.ac_annual.toFixed(2)}
          </span>
        </li>
        <li>
          Capacity Factor:{' '}
          <span className="font-bold text-zinc-800">
            {pvWatt.capacity_factor.toFixed(2)}
          </span>
        </li>
        <li>
          Annual SOLRAD:{' '}
          <span className="font-bold text-zinc-800">
            {pvWatt.solrad_annual.toFixed(2)}
          </span>
        </li>
      </ul>
      <table className="mb-4 w-full">
        <thead>
          <tr>
            <th>Month</th>
            <th>AC Monthly</th>
            <th>POA Monthly</th>
            <th>Solrad Monthly</th>
            <th>DC Monthly</th>
          </tr>
        </thead>
        <tbody>
          {pvWatt.ac_monthly.map((month, index) => (
            <tr key={index}>
              <td className="text-center">{monthNames[index]}</td>
              <td className="text-center">
                {pvWatt.ac_monthly[index].toFixed(2)}
              </td>
              <td className="text-center">
                {pvWatt.poa_monthly[index].toFixed(2)}
              </td>
              <td className="text-center">
                {pvWatt.solrad_monthly[index].toFixed(2)}
              </td>
              <td className="text-center">
                {pvWatt.dc_monthly[index].toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PvWattReport
