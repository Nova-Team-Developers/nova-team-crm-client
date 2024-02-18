/// <reference types="vite-plugin-svgr/client" />

/* eslint-disable import/no-internal-modules */
import Add from '@/shared/assets/icons/add.svg?react'
import Arrow from '@/shared/assets/icons/arrow.svg?react'
import Edit from '@/shared/assets/icons/edit.svg?react'
import Notification from '@/shared/assets/icons/notifications.svg?react'
import Search from '@/shared/assets/icons/search.svg?react'
import Settings from '@/shared/assets/icons/settings.svg?react'

const icons = {
	Settings,
	Notification,
	Add,
	Edit,
	Arrow,
	Search
}

export type IconName = keyof typeof icons
export const getIcon = (name: IconName) => icons[name]
