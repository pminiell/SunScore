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

  const outputDescriptions = {
    acAnnual: 'Annual AC system output. (kWhac)',
    capacityFactor: `The ratio of the system's predicted electrical output in the first year of operation to the nameplate output, which is equivalent to the quantity of energy the system would generate if it operated at its nameplate capacity for every hour of the year. (AC-to-DC)`,
    solradAnnual: 'Annual solar radiation values. (kWh/m2/day)',
    poaMonthly: `Monthly plane of array irradiance values. (kWh/m2)`,
    acMonthly: 'Monthly AC system output. (kWhac)',
    dcMonthly: 'Monthly DC system output. (kWhdc)',
    solradMonthly: 'Monthly solar radiation values. (kWh/m2/day)',
  }
  return (
    <div className="p-2">
      <h2 className="m-4 text-2xl font-bold">Simulated Outputs</h2>
      <ul className="m-4">
        <li>
          <details class="border border-transparent open:border-black/10 open:bg-green-100 ..." >
            <summary class="text-lg leading-6 font-semibold text-slate-900 select-none">Annual AC: {assetReport.acAnnual.toFixed(2)} kWhac
            </summary>
            <div class="mt-3 text-m leading-6 text-slate-900">
              <p>{outputDescriptions.acAnnual}</p>
            </div>
          </details>
        </li>
        <li>
          <details class="border border-transparent open:border-black/10 open:bg-green-100 ...">
            <summary class="text-lg leading-6 font-semibold text-slate-900 select-none">Solrad Annual: {assetReport.solradAnnual.toFixed(2)} kWhac
            </summary>
            <div class="mt-3 text-m leading-6 text-slate-900">
              <p>{outputDescriptions.solradAnnual}</p>
            </div>
          </details>
        </li>
        <li>
          <details class="border border-transparent open:border-black/10 open:bg-green-100 ...">
            <summary class="text-lg leading-6 font-semibold text-slate-900 select-none">Capacity Factor: {assetReport.capacityFactor.toFixed(2)} kWhac
            </summary>
            <div class="mt-3 text-m leading-6 text-slate-900">
              <p>{outputDescriptions.capacityFactor}</p>
            </div>
          </details>
        </li>



      </ul>
      <table className="mb-4 w-full">
        <thead>
          <tr>
            <th>Month</th>
            <th className="relative group">
              POA Monthly
              <span className="absolute left-0 top-full mt-1 w-48 p-2 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100">
                {outputDescriptions.poaMonthly}
              </span>
            </th>
            <th className="relative group">
              AC Monthly
              <span className="absolute left-0 top-full mt-1 w-48 p-2 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100">
                {outputDescriptions.acMonthly}
              </span>
            </th>
            <th className="relative group">
              Solrad Monthly
              <span className="absolute left-0 top-full mt-1 w-48 p-2 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100">
                {outputDescriptions.solradMonthly}
              </span>
            </th>
            <th className="relative group">
              DC Monthly
              <span className="absolute left-0 top-full mt-1 w-48 p-2 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100">
                {outputDescriptions.dcMonthly}
              </span>
            </th>
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
