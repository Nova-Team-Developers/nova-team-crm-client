import { Typography, classNames } from '@/shared'
import { Icon, type IconName } from '@/shared'

import cl from './Button.module.scss'

const { Text } = Typography
export const Button = ({
	className,
	iconName,
	text,
	noTranslate,
	version
}: {
	className?: string
	iconName?: IconName
	text?: string
	noTranslate?: boolean
	version: 'primary' | 'secondary' | 'saveTasks'
}) => {
	return (
		<button
			className={classNames(
				cl.button,
				className ?? '',
				iconName && text ? cl.multi : cl.single,
				version === 'primary' ? cl.primary : '',
				version === 'secondary' ? cl.secondary : '',
				version === 'saveTasks' ? cl.save : ''
			)}>
			{text && (
				<Text
					text={text}
					noTranslate={noTranslate}
				/>
			)}
			{iconName && (
				<Icon
					className={className}
					name={iconName}
				/>
			)}
		</button>
	)
}
