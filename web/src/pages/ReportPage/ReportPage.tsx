import { MetaTags } from '@redwoodjs/web'

import PvWattCell from 'src/components/PvWattCell'
// import { useParams } from '@redwoodjs/router'

interface ReportPageProps {
  assetName: string
  lat: string
  lon: string
  address: string
  systemCapacity: string
  moduleType: string
  systemLosses: string
  arrayType: string
  panelTilt: string
  azimuth: string
}

import ReportCell from 'src/components/ReportCell'

const ReportPage = ({
  assetName,
  lat,
  lon,
  address,
  systemCapacity,
  systemLosses,
  arrayType,
  panelTilt,
  azimuth,
  moduleType,
}: ReportPageProps) => {
  return (
    <>
      <MetaTags title="Report" description="Report page" />

      <section className="space-y-2">
        <h1 className="text-xl font-bold text-zinc-800">SunScore Report</h1>
        <p className="text-zinc-600">Report for Asset : {assetName}</p>
        <h1 className="text-zinc-600">Address: {address}</h1>
        <ReportCell lat={parseFloat(lat)} lon={parseFloat(lon)} />
        <PvWattCell
          lat={parseFloat(lat)}
          lon={parseFloat(lon)}
          arrayType={parseFloat(arrayType)}
          systemCapacity={parseFloat(systemCapacity)}
          systemLosses={parseFloat(systemLosses)}
          panelTilt={parseFloat(panelTilt)}
          azimuth={parseFloat(azimuth)}
          moduleType={parseFloat(moduleType)}
        />
        <button className="rw-button rw-button-green">View Insights</button>
      </section>
    </>
  )
}

export default ReportPage
