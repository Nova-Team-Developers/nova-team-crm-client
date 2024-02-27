import { Date, Icon, PercentCircle, Typography } from '@/shared'

const { Title, Text } = Typography

import cl from './ProfileCourseInfo.module.scss'


export const ProfileCourseInfo = ({
	percent,
	title,
	date
}: {
	percent: string
	title: string
	date: string
}) => {
	return (
		<div className={cl.root}>
			<div className={cl.top}>
				<div className={cl.icon}>
					<Icon name={'Computer'} />
				</div>
				<Title
					text={title}
					variant="h4"
					className={cl.title}
				/>
			</div>
			<div className={cl.bottom}>
					<Date date={date} />
				<div className={cl.percent}>
					<PercentCircle percent={percent} className='' />
					<Text text={percent} noTranslate={true} className={cl.number} />
				</div>
			</div>
		</div>
	)
}