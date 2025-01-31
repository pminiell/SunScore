// import { Link, routes } from '@redwoodjs/router'
import { Metadata, useQuery } from '@redwoodjs/web'
import { useParams } from "@redwoodjs/router";
import ReportCell from 'src/components/ReportCell'


const ReportPage = () => {
  const { id } = useParams()

  return (
    <>
      <Metadata title="Report" description="Report page" />

      <ReportCell assetId={parseInt(id)} />
    </>
  )
}

export default ReportPage
