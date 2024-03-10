import { Typography, classNames } from '@/shared'

import cl from './Switch.module.scss'

const { Text } = Typography

export const Switch = ({
	options,
	activeValue,
	setActiveValue
}: {
	options: [string, string]
	activeValue: string
	setActiveValue: (v: string) => void // eslint-disable-line no-unused-vars
}) => {
	return (
		<div className={cl.root}>
			<div
				className={classNames(
					cl.root__btn,
					activeValue === options[0] ? '' : cl.root__btn_move
				)}
			/>
			{options.map(text => (
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
