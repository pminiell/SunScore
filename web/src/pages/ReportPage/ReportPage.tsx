import { useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ReportCell from 'src/components/ReportCell'

const ReportPage = () => {
  const { assetName, lat, lon, address } = useParams()

  return (
    <>
      <MetaTags title="Report" description="Report page" />

      <section className="space-y-2">
        <h1 className="text-xl font-bold text-zinc-800">Report Page</h1>
        <p className="text-zinc-600">Report for Asset : {assetName}</p>
        <h1 className="text-zinc-600">Address: {address}</h1>
        <ReportCell lat={parseFloat(lat)} lon={parseFloat(lon)} />
      </section>
    </>
  )
}

export default ReportPage
