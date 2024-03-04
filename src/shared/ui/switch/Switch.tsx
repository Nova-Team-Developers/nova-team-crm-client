import { useState } from 'react'

import { Typography, classNames } from '@/shared'

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
	const [activeValue, setActiveValue] = useState<boolean>(true)

	const changeValue = () => setActiveValue(!activeValue)

	variant === 'smallSize'
	variant === 'largeSize'

	return (
		<div
			className={classNames(
				variant === 'smallSize' ? cl.root : cl.root_large,
				cl.root
			)}>
			<div
				className={classNames(
					variant === 'smallSize'
						? cl.root__container
						: cl.root__container_large,
					cl.root__container
				)}>
				<div
					className={cl.root__container_btn}
					style={
						activeValue
							? { left: '0' }
							: variant === 'smallSize'
								? { left: '150px' }
								: { left: '214px' }
					}
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
