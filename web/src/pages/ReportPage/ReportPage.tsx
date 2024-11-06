import {Metadata, MetaTags} from '@redwoodjs/web'

import PvWattCell from 'src/components/PvWattCell'
import ReportCell from "src/components/ReportCell";
// import { useParams } from '@redwoodjs/router'





const ReportPage = () => {
  return (
    <>
      <Metadata title="Report" description="Report page" />

      <section className="space-y-2">
        <h1 className="text-xl font-bold text-zinc-800">SunScore Report</h1>
        <p className="text-zinc-600">Report for Asset : </p>
        <h1 className="text-zinc-600">Address: </h1>
        <h1></h1>
        {/*<ReportCell lat={parseFloat(lat)} lon={parseFloat(lon)} />*/}
        {/*<PvWattCell*/}
        {/*  lat={parseFloat(lat)}*/}
        {/*  lon={parseFloat(lon)}*/}
        {/*  arrayType={parseFloat(arrayType)}*/}
        {/*  systemCapacity={parseFloat(systemCapacity)}*/}
        {/*  systemLosses={parseFloat(systemLosses)}*/}
        {/*  panelTilt={parseFloat(panelTilt)}*/}
        {/*  azimuth={parseFloat(azimuth)}*/}
        {/*  moduleType={parseFloat(moduleType)}*/}
        {/*/>*/}
        <button className="rw-button rw-button-green">View Insights</button>
      </section>
    </>
  )
}

export default ReportPage
