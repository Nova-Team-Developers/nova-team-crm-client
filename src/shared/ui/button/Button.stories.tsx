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
		name: {
			type: 'string',
			description: 'icon name'
		}
	}
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'Random'
	}
}
export const Icon: Story = {
	args: {
		name: 'Edit'
	}
}
export const Combo: Story = {
	render: () => <Button name={'Edit'}>RandomText</Button>
}
