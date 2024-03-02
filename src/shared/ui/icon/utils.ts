/// <reference types="vite-plugin-svgr/client" />

/* eslint-disable import/no-internal-modules */
import Add from '@/shared/assets/icons/add.svg?react'
import Arrow from '@/shared/assets/icons/arrow.svg?react'
import Calendar from '@/shared/assets/icons/calendar.svg?react'
import Chevron from '@/shared/assets/icons/chevron.svg?react'
import Course from '@/shared/assets/icons/course-icon.svg?react'
import Courses from '@/shared/assets/icons/courses.svg?react'
import Dashboard from '@/shared/assets/icons/dashboard.svg?react'
import Done from '@/shared/assets/icons/done.svg?react'
import Edit from '@/shared/assets/icons/edit.svg?react'
import InfoPortal from '@/shared/assets/icons/infoPortal.svg?react'
import Logout from '@/shared/assets/icons/logout.svg?react'
import Messenger from '@/shared/assets/icons/messenger.svg?react'
import Notification from '@/shared/assets/icons/notifications.svg?react'
import Search from '@/shared/assets/icons/search.svg?react'
import Settings from '@/shared/assets/icons/settings.svg?react'
import Teachers from '@/shared/assets/icons/teachers.svg?react'

const icons = {
	Settings,
	Notification,
	Add,
	Edit,
	Chevron,
	Search,
	Done,
	Course,
	Dashboard,
	Courses,
	Calendar,
	Teachers,
	Messenger,
	InfoPortal,
	Logout,
	Arrow
}

export type IconName = keyof typeof icons
export const getIcon = (name: IconName) => icons[name]
