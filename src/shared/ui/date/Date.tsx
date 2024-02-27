import { Icon, Typography } from '@/shared'
import cl from './Date.module.scss'

const { Text } = Typography
export const Date = ({
	date,
}: {
	date: string
}) => {
	return (
		<div className={cl.root}>
			<Icon name={'CalendarGray'} />
			<div className={cl.date}>
				<Text text={date} />
			</div>
		</div>
	)
}