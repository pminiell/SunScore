import type { Asset, UpdateAssetInput, CreateAssetInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
  SubmitHandler
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'
import { getLatLngFromAddress } from 'src/utils/getLatLngFromAddress'


interface AssetFormProps {
  asset?: UpdateAssetInput
  onSave: (data: UpdateAssetInput | CreateAssetInput, id?: UpdateAssetInput['id']) => void
  error: RWGqlError
  loading: boolean
}
const AssetForm = (props: AssetFormProps) => {
  const onSubmit: SubmitHandler<UpdateAssetInput | CreateAssetInput> = async (data: UpdateAssetInput | CreateAssetInput) => {
    const [lat, lon] = await getLatLngFromAddress(data.address)
    data.lat = lat
    data.lon = lon
    props.onSave(data, props?.asset?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<Asset> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="assetName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Asset name
        </Label>

        <TextField
          name="assetName"
          defaultValue={props.asset?.assetName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="assetName" className="rw-field-error" />

        <Label
          name="address"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address
        </Label>

        <TextField
          name="address"
          defaultValue={props.asset?.address}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="address" className="rw-field-error" />

        <Label
          name="systemCapacity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          System Capacity (Nameplate Capacity in kW)
        </Label>

        <NumberField
          name="systemCapacity"
          defaultValue={props.asset?.systemCapacity}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="systemCapacity" className="rw-field-error" />

        <Label
          name="moduleType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Module
        </Label>

        <NumberField
          name="moduleType"
          defaultValue={props.asset?.moduleType}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true, min: 0, max: 2 }}
        />

        <FieldError name="moduleType" className="rw-field-error" />

        <Label
          name="systemLosses"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          System Losses
        </Label>

        <NumberField
          name="systemLosses"
          defaultValue={props.asset?.panelTilt}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="systemLosses" className="rw-field-error" />

        <Label
          name="arrayType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Axis-Tracking
        </Label>

        <NumberField
          name="arrayType"
          defaultValue={props.asset?.arrayType}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true, min: 0, max: 4 }}
        />

        <FieldError name="arrayType" className="rw-field-error" />

        <Label
          name="panelTilt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Panel Tilt
        </Label>

        <NumberField
          name="panelTilt"
          defaultValue={props.asset?.panelTilt}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="panelTilt" className="rw-field-error" />

        <Label
          name="azimuth"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Azimuth
        </Label>

        <NumberField
          name="azimuth"
          defaultValue={props.asset?.azimuth}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="azimuth" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AssetForm
