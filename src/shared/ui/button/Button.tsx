import type { ReactNode } from 'react'

import { classNames } from '@/shared'
import { Icon } from '@/shared/ui/icon'
// eslint-disable-next-line import/no-internal-modules
import { IconName } from '@/shared/ui/icon/utils.ts'

import cl from './Button.module.scss'

export const Button = ({
	onClick,
	children,
	className,
	icon
}: {
	onClick: () => void
	children: ReactNode
	className: string
	icon: IconName
}) => {
	return (
		<>
			<button
				onClick={onClick}
				className={classNames(cl.button, className)}>
				{children}
				<Icon name={icon} />
			</button>
		</>
	)
}
