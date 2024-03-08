import { Typography, classNames } from '@/shared'

import cl from './Switch.module.scss'

const { Text } = Typography

export const Switch = ({
	variant,
	option,
	activeValue,
	setActiveValue
}: {
	variant: 'smallSize' | 'largeSize'
	option: [string, string]
	activeValue: string
	setActiveValue: (v: string) => void // eslint-disable-line no-unused-vars
}) => {
	return (
		<div
			className={classNames(
				variant === 'smallSize' ? cl.root : cl.root_large,
				cl.root
			)}>
			<div
				className={classNames(
					variant === 'smallSize' ? cl.root__btn : cl.root__btn_large,
					cl.root__btn,
					activeValue === option[0]
						? ''
						: variant === 'smallSize'
							? cl.root__btn_move
							: cl.root__btn_move_large
				)}
			/>
			{option.map(text => (
				<div
					className={classNames(cl.root__text)}
					key={text}
					onClick={() => {
						setActiveValue(text)
					}}>
					<Text
						text={text}
						className={classNames(
							activeValue === text
								? cl.root__text_active
								: cl.root__text_notactive
						)}
					/>
				</div>
			))}
		</div>
	)
}
