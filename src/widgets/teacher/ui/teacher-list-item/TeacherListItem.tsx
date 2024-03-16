import { Typography } from '@/shared'

import type { TTeacherListItem } from '../../types'
import cl from './index.module.scss'

const { Text } = Typography

export const TeacherListItem = ({
	image,
	firstName,
	lastName,
	email
}: TTeacherListItem) => {
	return (
		<li className={cl.root}>
			<img
				className={cl.root__image}
				src={image}
				alt={firstName + ' ' + lastName}
			/>
			<div className={cl.root__main}>
				<Text
					text={firstName + '' + lastName}
					noTranslate
					className={cl.root__main__title}
				/>
				<Text
					text={email}
					noTranslate
					className={cl.root__main__text}
				/>
			</div>
		</li>
	)
}
