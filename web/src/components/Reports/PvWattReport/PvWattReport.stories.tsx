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

import PvWattReport from './PvWattReport'

const meta: Meta<typeof PvWattReport> = {
  component: PvWattReport,
}

export default meta

type Story = StoryObj<typeof PvWattReport>

export const Primary: Story = {}
