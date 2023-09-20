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

import Report from './IrradianceReport'

const meta: Meta<typeof Report> = {
  component: Report,
}

export default meta

type Story = StoryObj<typeof Report>

export const Primary: Story = {}
