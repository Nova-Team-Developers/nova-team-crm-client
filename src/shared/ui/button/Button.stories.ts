import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	tags: ['autodocs'],
	component: Button,
	argTypes: {
		fullWidth: {
			type: 'boolean',
			description: 'Растянуть кнопку на всю ширину',
			defaultValue: false
		},
		thin: {
			type: 'boolean',
			description: 'Сделать кнопку тонкой',
			defaultValue: false
		}
	},
	parameters: {
		layout: ['centered']
	}
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
	args: {
		text: 'Button',
		iconName: 'Add'
	}
}
export const Secondary: Story = {
	args: {
		text: 'Button',
		variant: 'secondary'
	}
}
export const IconPrimary: Story = {
	args: {
		iconName: 'Add',
		variant: 'icon-primary'
	}
}
export const IconSecondary: Story = {
	args: {
		iconName: 'Add',
		variant: 'icon-secondary'
	}
}
