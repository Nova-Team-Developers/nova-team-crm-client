import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../icon'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
	component: Button,
	title: 'shared/Button',
	tags: ['autodocs'],
	argTypes: {
		children: {
			description: 'Displayed icon'
		},
    className: {
      type: 'string',
      description: 'provides styles to the button'
    }
	}
}

export default meta

type Story = StoryObj<typeof Button>

export const Settings: Story = {
	args: {
		children: <Icon name="Settings" />
	}
}

export const Edit: Story = {
	args: {
		children: <Icon name="Edit" />
	}
}
