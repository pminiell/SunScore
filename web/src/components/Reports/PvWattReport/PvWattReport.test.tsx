import { render } from '@redwoodjs/testing/web'

import PvWattReport from './PvWattReport'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PvWattReport', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PvWattReport />)
    }).not.toThrow()
  })
})
