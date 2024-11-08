// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import {useParams} from "@redwoodjs/router";


//TODO
// 1. Fetch the asset by the id and then pass in the data to the report cell that will call the assetreport resolver

const ReportPage = () => {
  const { id } = useParams()
  return (
    <>
      <Metadata title="Report" description="Report page" />

      <h1>ReportPage</h1>
      <h1>Report for Asset: {id}</h1>
      <p>
        Find me in <code>./web/src/pages/ReportPage/ReportPage.tsx</code>
      </p>
      {/*
          My default route is named `report`, link to me with:
          `<Link to={routes.report()}>Report</Link>`
      */}
    </>
  )
}

export default ReportPage
