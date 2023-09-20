import { render } from '@redwoodjs/testing/web'

import IrradianceReport from './IrradianceReport'
import { standard } from './IrradianceReport.mock'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Report', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IrradianceReport irradiance={standard().irradiance} />)
    }).not.toThrow()
  })
})
