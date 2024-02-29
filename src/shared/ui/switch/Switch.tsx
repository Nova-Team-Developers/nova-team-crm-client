import { useState } from 'react'

import { Typography, classNames } from '@/shared'

import cl from './Switch.module.scss'

const { Text } = Typography

export const Switch = ({
	textOnLeft,
	textOnRight,
	checked
}: {
	textOnLeft: string
	textOnRight: string
	checked: boolean
}) => {
	const [isActive, setIsActive] = useState<boolean>(checked ?? false)

	const isSwitching = () => setIsActive(!isActive)

	return (
		<div className={cl.root}>
			<div
				className={classNames(
					cl.root__body,
					isActive ? cl.root__active : ''
				)}
				onClick={isSwitching}>
				<Text
					text={textOnLeft}
					className={classNames(
						cl.root__body_text,
						isActive ? cl.root__active_text : ''
					)}
				/>
			</div>
			<div
				className={classNames(
					cl.root__body,
					!isActive ? cl.root__active : ''
				)}
				onClick={isSwitching}>
				<Text
					text={textOnRight}
					className={classNames(
						cl.root__body_text,
						!isActive ? cl.root__active_text : ''
					)}
				/>
			</div>
		</div>
	)
}
