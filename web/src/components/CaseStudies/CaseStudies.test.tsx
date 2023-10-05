import { render } from '@redwoodjs/testing/web'

import CaseStudies from './CaseStudies'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CaseStudies', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CaseStudies />)
    }).not.toThrow()
  })
})
