import { useState } from 'react'

import { Typography} from '@/shared'

import cl from './Switch.module.scss'

const { Text } = Typography

export const Switch = ({
	textOnLeft,
	textOnRight,
	variant
}: {
	textOnLeft: string
	textOnRight: string
	variant: string
}) => {
	const [activeValue, setActiveValue] = useState(true)

	const changeValue = () => setActiveValue(!activeValue)

	variant === 'smallSize'
	variant === 'largeSize'

	return (
		<div className={cl.root}>
			<div className={cl.root__container}>
				<div
					className={cl.root__container_btn}
					style={activeValue ? { left: '0' } : { left: '150px' }}
				/>
			</div>

			<div
				onClick={changeValue}
				className={cl.root__text}>
				<Text
					text={textOnLeft}
					className={
						activeValue ? cl.root__text_left : cl.root__text_right
					}
				/>
			</div>
			<div
				onClick={changeValue}
				className={cl.root__text}>
				<Text
					text={textOnRight}
					className={
						activeValue ? cl.root__text_right : cl.root__text_left
					}
				/>
			</div>
		</div>
	)
}
