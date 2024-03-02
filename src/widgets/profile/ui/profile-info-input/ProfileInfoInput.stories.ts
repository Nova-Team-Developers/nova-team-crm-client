import type { Meta, StoryObj } from '@storybook/react'

import { ProfileInfoInput } from './ProfileInfoInput'

const meta = {
	title: 'profile/ui/input',
	component: ProfileInfoInput,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		type: { string: 'text' }
	}
} satisfies Meta<typeof ProfileInfoInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		type: 'text',
		placeholder: 'text'
	}
}
