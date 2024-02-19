import type { ReactNode } from 'react'

import { classNames } from '@/shared'
import { Icon, type IconName } from '@/shared'

import cl from './Button.module.scss'

export const Button = ({
	className,
	name,
	children
}: {
	children?: ReactNode
	className?: string
	name?: IconName
}) => {
	return (
		<button className={classNames(cl.button, className ?? ' ')}>
			{children}
			{name && (
				<Icon
					className={className}
					name={name}
				/>
			)}
		</button>
	)
}
