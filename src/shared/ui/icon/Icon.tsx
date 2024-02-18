import { type CSSProperties } from 'react'

// eslint-disable-next-line import/no-internal-modules
import { classNames } from '@/shared/libs/classNames'

import cl from './icon.module.scss'
import { type IconName, getIcon} from './utils'

interface IconProps {
	name: IconName
	className?: string
	style?: CSSProperties
}
export const Icon = ({ name, className, style }: IconProps) => {
	const Svg = getIcon(name)
	return (
		<Svg
			style={style}
			className={classNames(cl.icon, className ? className : '')}
		/>
	)
}
