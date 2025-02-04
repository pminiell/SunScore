const PvWattReport = ({ assetReport }) => {

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
    <div className="p-2">
      <h2 className="mb-4 text-2xl font-bold">Simulated Outputs</h2>
      <ul className="mb-4">
        <li>
          Annual AC:{' '}
          <span className="font-bold text-zinc-800">
            {assetReport.acAnnual.toFixed(2)}
          </span>
          {' kWhac'}
        </li>
        <li>
          Capacity Factor:{' '}
          <span className="font-bold text-zinc-800">
            {assetReport.capacityFactor.toFixed(2)}
          </span>
          {' kWhac'}
        </li>
        <li>
          Annual SOLRAD:{' '}
          <span className="font-bold text-zinc-800">
            {assetReport.solradAnnual.toFixed(2)}
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
          {assetReport.acMonthly.map((month, index) => (
            <tr key={index}>
              <td className="text-center font-semibold text-zinc-900">
                {monthNames[index]}
              </td>
              <td className="text-center text-zinc-600">
                {assetReport.poaMonthly[index].toFixed(2)}
                <span className="text-sm text-zinc-600">{' kWh/m2'}</span>
              </td>
              <td className="text-center text-zinc-600">
                {assetReport.acMonthly[index].toFixed(2)}
                <span className="text-sm text-zinc-600">{' kWhac'}</span>
              </td>
              <td className="text-center text-zinc-600">
                {assetReport.solradMonthly[index].toFixed(2)}
                <span className="text-sm text-zinc-600">{' kWh/m2/day'}</span>
              </td>
              <td className="text-center text-zinc-600">
                {assetReport.dcMonthly[index].toFixed(2)}
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
