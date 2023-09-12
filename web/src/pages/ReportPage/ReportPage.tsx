import { MetaTags } from '@redwoodjs/web'

import ReportCell from 'src/components/ReportCell'

const ReportPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Report" description="Report page" />

      <h1>ReportPage</h1>
      <p>generated report for asset {id}</p>
      <ReportCell lat={40} lon={-100} />
    </>
  )
}

export default ReportPage
