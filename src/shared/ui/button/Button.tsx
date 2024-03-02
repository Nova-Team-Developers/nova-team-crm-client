import { classNames } from '@/shared'
import cl from './Button.module.scss'

export const Button = ({
    children,
	onClick,
    className
}: {
	onClick?: () => void
    children: React.ReactNode
    className?: string
}) => {
	return (
		<button
			onClick={onClick}
			className={classNames(cl.root, className ?? '')}>
			{children}
		</button>
	)
}
