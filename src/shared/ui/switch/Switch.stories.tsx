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
		option: [
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

export const SmallSize: Story = {
	args: {
		variant: 'smallSize',
		option: ['Courses', 'My schedule'],
		activeValue: 'Courses',
		setActiveValue: () => {}
	}
}
export const LargeSize: Story = {
	args: {
		variant: 'largeSize',
		option: ['Days', 'Lists'],
		activeValue: 'Days',
		setActiveValue: () => {}
	}
}
