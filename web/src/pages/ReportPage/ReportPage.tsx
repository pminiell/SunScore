import { useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ReportCell from 'src/components/ReportCell'

const ReportPage = () => {
  const { id, assetName, lat, lon } = useParams()

  return (
    <>
      <MetaTags title="Report" description="Report page" />

      <h1>ReportPage</h1>
      <p>
        generated report for asset {id}: {assetName}
      </p>
      <ReportCell lat={parseFloat(lat)} lon={parseFloat(lon)} />
    </>
  )
}

export default ReportPage
