// import { Link, routes } from '@redwoodjs/router'
import { Metadata, useQuery } from '@redwoodjs/web'
import { useParams } from "@redwoodjs/router";
import ReportCell from "src/components/ReportCell/ReportCell";



const ReportPage = () => {
  const { id } = useParams()

  return (
    <>
      <Metadata title="Report" description="Report page" />

      <h1>ReportPage</h1>
      <h1>Report for Asset: {id} </h1>
      <p>
        Find me in <code>./web/src/pages/ReportPage/ReportPage.tsx</code>
      </p>
      <ReportCell />
    </>
  )
}

export default ReportPage
