import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PvWattCell from 'src/components/PvWattCell'

const TestPVCall = {
  systemCapacity: 4.0,
  moduleType: 0,
  systemLosses: 14.08,
  arrayType: 0,
  panelTilt: 40.0,
  azimuth: 180.0,
  lat: 40.0,
  lon: -105.0,
}

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="text-blue-500">HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <PvWattCell
        arrayType={TestPVCall.arrayType}
        moduleType={TestPVCall.moduleType}
        systemLosses={TestPVCall.arrayType}
        systemCapacity={TestPVCall.systemCapacity}
        panelTilt={TestPVCall.panelTilt}
        azimuth={TestPVCall.azimuth}
        lat={TestPVCall.lat}
        lon={TestPVCall.lon}
      />
    </>
  )
}

export default HomePage
