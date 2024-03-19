/* eslint-disable import/order */
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import { Icon } from '@/shared'

import cl from './ProfileCalendar.module.scss'
import './styles.css'

export const ProfileCalendar = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [date, setDate] = useState<any>(new Date())

	return (
		<div className={cl.root}>
			<Calendar
				value={date}
				className={cl.root__calendar}
				goToRangeStartOnSelect={true}
				navigationAriaLabel={'go up'}
				navigationAriaLive={'polite'}
				next2Label={null}
				prev2Label={null}
				nextLabel={
					<Icon
						name="Arrow"
						style={{ width: '20px' }}
					/>
				}
				prevLabel={
					<Icon
						name="Arrow"
						style={{ width: '20px', transform: 'rotate(180deg)' }}
					/>
				}
				onChange={setDate}
				locale="en"
				selectRange={true}
			/>
		</div>
	)
}
