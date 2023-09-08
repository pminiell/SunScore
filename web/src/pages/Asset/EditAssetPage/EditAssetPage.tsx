import EditAssetCell from 'src/components/Asset/EditAssetCell'

type AssetPageProps = {
  id: number
}

const EditAssetPage = ({ id }: AssetPageProps) => {
  return <EditAssetCell id={id} />
}

export default EditAssetPage
