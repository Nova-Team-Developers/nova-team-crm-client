import { type IconName } from '@/shared'

type TProfileSettingsSidebar = {
	title: string
	icon: IconName
	route: string
}

export const sidebarItems: TProfileSettingsSidebar[] = [
	{ title: 'safety', icon: 'Safety', route: '#' },
	{ title: 'Notification', icon: 'Notification', route: '#' },
	{ title: 'Connected Apps', icon: 'Connected', route: '#' },
	{ title: 'Payments', icon: 'Payments', route: '#' }
]
