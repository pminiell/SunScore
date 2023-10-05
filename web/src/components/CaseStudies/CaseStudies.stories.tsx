// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import CaseStudies from './CaseStudies'

const meta: Meta<typeof CaseStudies> = {
  component: CaseStudies,
}

export default meta

type Story = StoryObj<typeof CaseStudies>

export const Primary: Story = {}
