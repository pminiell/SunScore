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

import Features from './Features'

const meta: Meta<typeof Features> = {
  component: Features,
}

export default meta

type Story = StoryObj<typeof Features>

export const Primary: Story = {}
