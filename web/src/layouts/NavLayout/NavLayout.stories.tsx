import type { Meta, StoryObj } from '@storybook/react'

import NavLayout from './NavLayout'

const meta: Meta<typeof NavLayout> = {
  component: NavLayout,
}

export default meta

type Story = StoryObj<typeof NavLayout>

export const Primary: Story = {}
