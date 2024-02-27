import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from './Icon'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'shared/Icon',
	component: Icon,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered'
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		// backgroundColor: { control: 'color' },
	}
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Settings: Story = {
	args: {
		name: 'Settings'
	}
}
export const Notification: Story = {
	args: {
		name: 'Notification'
	}
}
export const Add: Story = {
	args: {
		name: 'Add'
	}
}
export const Edit: Story = {
	args: {
		name: 'Edit'
	}
}
export const Arrow: Story = {
	args: {
		name: 'Arrow'
	}
}
export const Search: Story = {
	args: {
		name: 'Search'
	}
}
export const Done: Story = {
	args: {
		name: 'Done'
	}
}
export const Course: Story = {
	args: {
		name: 'Course'
	}
}
export const Teachers: Story = {
	args: {
		name: 'Teachers'
	}
}
export const Dashboard: Story = {
	args: {
		name: 'Dashboard'
	}
}
export const Calendar: Story = {
	args: {
		name: 'Calendar'
	}
}
export const Messenger: Story = {
	args: {
		name: 'Messenger'
	}
}
export const Logout: Story = {
	args: {
		name: 'Logout'
	}
}
export const InfoPortal: Story = {
	args: {
		name: 'InfoPortal'
  }
}
export const Chevron: Story = {
	args: {
		name: 'Chevron'
	}
}
