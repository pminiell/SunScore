import AssetCell from 'src/components/Asset/AssetCell'

type AssetPageProps = {
  id: number
  lat: number
  lon: number
}

const AssetPage = ({ id }: AssetPageProps) => {
  return (
    <>
      <AssetCell id={id} />
    </>
  )
}

export default AssetPage
