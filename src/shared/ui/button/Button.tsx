import type { ReactNode } from 'react'

import { classNames } from '@/shared'

import cl from './Button.module.scss'

export const Button = ({
	onClick,
	children,
	className
}: {
	onClick: () => void
	children: ReactNode
	className: string
}) => {
	return (
		<>
			<button
				onClick={onClick}
				className={classNames(cl.button, className)}>
				{children}
			</button>
		</>
	)
}
