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
      <h2 className="mb-4 text-2xl font-bold">Simulated Outputs</h2>
      <ul className="mb-4">
        <li>
          Annual AC:{' '}
          <span className="font-bold text-zinc-800">
            {pvWatt.ac_annual.toFixed(2)}
          </span>
          {' kWhac'}
        </li>
        <li>
          Capacity Factor:{' '}
          <span className="font-bold text-zinc-800">
            {pvWatt.capacity_factor.toFixed(2)}
          </span>
          {' kWhac'}
        </li>
        <li>
          Annual SOLRAD:{' '}
          <span className="font-bold text-zinc-800">
            {pvWatt.solrad_annual.toFixed(2)}
          </span>
          {' kWh/m2/day'}
        </li>
      </ul>
      <table className="mb-4 w-full">
        <thead>
          <tr>
            <th>Month</th>
            <th>POA Monthly</th>
            <th>AC Monthly</th>
            <th>Solrad Monthly</th>
            <th>DC Monthly</th>
          </tr>
        </thead>
        <tbody>
          {pvWatt.ac_monthly.map((month, index) => (
            <tr key={index}>
              <td className="text-center font-semibold text-zinc-900">
                {monthNames[index]}
              </td>
              <td className="text-center text-zinc-600">
                {pvWatt.poa_monthly[index].toFixed(2)}
                <span className="text-sm text-zinc-600">{' kWh/m2'}</span>
              </td>
              <td className="text-center text-zinc-600">
                {pvWatt.ac_monthly[index].toFixed(2)}
                <span className="text-sm text-zinc-600">{' kWhac'}</span>
              </td>
              <td className="text-center text-zinc-600">
                {pvWatt.solrad_monthly[index].toFixed(2)}
                <span className="text-sm text-zinc-600">{' kWh/m2/day'}</span>
              </td>
              <td className="text-center text-zinc-600">
                {pvWatt.dc_monthly[index].toFixed(2)}
                <span className="text-sm text-zinc-600">{' kWhdc'}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PvWattReport
