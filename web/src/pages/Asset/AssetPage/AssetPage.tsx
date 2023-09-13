import AssetCell from 'src/components/Asset/AssetCell'

type AssetPageProps = {
  id: number
  lat: number
  lon: number
}

const AssetPage = ({ id, lat, lon }: AssetPageProps) => {
  return (
    <>
      <AssetCell id={id} lat={lat} lon={lon} />
    </>
  )
}

export default AssetPage
