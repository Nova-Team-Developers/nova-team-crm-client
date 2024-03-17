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
		variant: {
			type: 'string',
			description: 'Styles variables for component'
		},
		options: [
			{
				textLeftSide: {
					type: 'string',
					description: 'Left value'
				},
				textRightSide: {
					type: 'string',
					description: 'Right value'
				}
			}
		],
		activeValue: {
			type: 'string',
			description: 'Active value'
		},
		setActiveValue: {
			type: 'function',
			description: 'Change active value '
		}
	}
}
export default meta

type Story = StoryObj<typeof Switch>

export const NoBackground: Story = {
	args: {
		variant: 'noBackground',
		options: ['Courses', 'My schedule'],
		activeValue: 'Courses',
		setActiveValue: () => {}
	}
}
export const WithBackground: Story = {
	args: {
		variant: 'withBackground',
		options: ['Days', 'Lists'],
		activeValue: 'Days',
		setActiveValue: () => {}
	}
}
