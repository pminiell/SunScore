import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditAssetById, UpdateAssetInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormAsset = NonNullable<EditAssetById['asset']>

interface AssetFormProps {
  asset?: EditAssetById['asset']
  onSave: (data: UpdateAssetInput, id?: FormAsset['id']) => void
  error: RWGqlError
  loading: boolean
}

const AssetForm = (props: AssetFormProps) => {
  const onSubmit = (data: FormAsset) => {
    props.onSave(data, props?.asset?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormAsset> onSubmit={onSubmit} error={props.error}>
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
          name="axisTracker"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Axis tracker
        </Label>

        <TextField
          name="axisTracker"
          defaultValue={props.asset?.axisTracker}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="axisTracker" className="rw-field-error" />

        <Label
          name="hemisphere"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Hemisphere
        </Label>

        <TextField
          name="hemisphere"
          defaultValue={props.asset?.hemisphere}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="hemisphere" className="rw-field-error" />

        <Label
          name="panelTilt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Panel tilt
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
          name="panelType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Panel type
        </Label>

        <TextField
          name="panelType"
          defaultValue={props.asset?.panelType}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="panelType" className="rw-field-error" />

        <Label
          name="totalDc"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total dc
        </Label>

        <TextField
          name="totalDc"
          defaultValue={props.asset?.totalDc}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="totalDc" className="rw-field-error" />

        <Label
          name="totalAc"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total ac
        </Label>

        <TextField
          name="totalAc"
          defaultValue={props.asset?.totalAc}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="totalAc" className="rw-field-error" />

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
