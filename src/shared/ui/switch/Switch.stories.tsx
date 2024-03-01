import type { Meta, StoryObj } from '@storybook/react'

import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
	component: Switch,
	title: 'shared/Switch',
	parameters: {
		layout: ['centered']
	},
	tags: ['autodocs'],
	argTypes: {
		checked: {
			type: 'boolean',
			description: 'Check switch by default'
		},
		variant: {
			type: 'string',
			description: 'Styles variables for component'
		},
		textOnLeft: {
			type: 'string',
			description: 'Text on the left side'
		},
		textOnRight: {
			type: 'string',
			description: 'Text on the right side'
		}
	}
}
export default meta

type Story = StoryObj<typeof Switch>

export const SmallSize: Story = {
	args: {
		textOnLeft: 'Courses',
		textOnRight: 'My schedule',
		variant: 'smallSize'
	}
}
export const LargeSize: Story = {
	args: {
		textOnLeft: 'Courses',
		textOnRight: 'My schedule',
		variant: 'largeSize'
	}
}
