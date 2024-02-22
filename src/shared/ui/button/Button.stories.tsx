import { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/shared'

const meta = {
	title: 'shared/Button',
	component: Button,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		className: {
			type: 'string',
			description: 'ClassName for customization component'
		},
		iconName: {
			type: 'string',
			description: 'icon name'
		},
		text: {
			type: 'string',
			description: 'text into component'
		},
		noTranslate: {
			type: 'boolean',
			description: 'Is text will be translate'
		}
	}
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		iconName: 'Edit'
	}
}
export const ButtonText: Story = {
	args: {
		text: 'Add tasks'
	}
}
export const Combo: Story = {
	args: { iconName: 'Add', text: 'Add tasks' }
}
