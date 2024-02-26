/// <reference types="vite-plugin-svgr/client" />

/* eslint-disable import/no-internal-modules */
import Add from '@/shared/assets/icons/add.svg?react';
import Arrow from '@/shared/assets/icons/arrow.svg?react';
import Chevron from '@/shared/assets/icons/chevron.svg?react';
import Connected from '@/shared/assets/icons/connected-apps.svg?react';
import Course from '@/shared/assets/icons/course-icon.svg?react';
import Done from '@/shared/assets/icons/done.svg?react';
import Edit from '@/shared/assets/icons/edit.svg?react';
import Notification from '@/shared/assets/icons/notifications.svg?react';
import Payments from '@/shared/assets/icons/payments.svg?react';
import Safety from '@/shared/assets/icons/safety.svg?react';
import Search from '@/shared/assets/icons/search.svg?react';
import Settings from '@/shared/assets/icons/settings.svg?react';


const icons = {
	Settings,
	Notification,
	Add,
	Edit,
	Chevron,
	Search,
	Done,
	Safety,
	Course,
	Payments,
	Arrow,
	Connected
}

export type IconName = keyof typeof icons
export const getIcon = (name: IconName) => icons[name]