import {
	BarElement,
	BarOptions,
	CategoryScale,
	Chart as ChartJS,
	ChartOptions,
	LinearScale,
	Title,
	Tooltip
} from 'chart.js'

import { useState } from 'react'
import { Bar } from 'react-chartjs-2'

import {
	Dropdown,
	DropdownOption,
	Icon,
	Typography,
	classNames
} from '@/shared'

import cl from './ProfileActivity.module.scss'

const { Text } = Typography

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

// eslint-disable-next-line react-refresh/only-export-components
export const options: ChartOptions = {
	responsive: true,
	scales: {
		y: {
			max: 8,
			ticks: {
				callback: value => {
					return value + 'h'
				},
				stepSize: 2
			},

			grid: {
				color: '#D9D9D9'
			}
		},
		x: {
			grid: {
				display: false
			}
		}
	},
	plugins: {
		legend: {
			display: false
		},

		title: {
			display: false
		},
		tooltip: {
			mode: 'index',
			enabled: false,
			external: context => {
				let tooltipEl = document.getElementById('chartjs-tooltip')

				if (!tooltipEl) {
					tooltipEl = document.createElement('div')
					tooltipEl.id = 'chartjs-tooltip'
					;(tooltipEl.innerHTML = '<table></table>'),
						document.body.appendChild(tooltipEl)
				}

				const tooltipModel = context.tooltip
				if (tooltipModel.opacity === 0) {
					tooltipEl.style.opacity = '0'
					return
				}

				tooltipEl.classList.remove('above', 'below', 'no-tranform')
				if (tooltipModel.yAlign) {
					tooltipEl.classList.add(tooltipModel.yAlign)
				} else {
					tooltipEl.classList.add('no-tranform')
				}

				const getBody = (bodyItem: { lines: string[] }) => {
					return bodyItem.lines
				}

				if (tooltipModel.body) {
					const bodyLines = tooltipModel.body.map(getBody)

					let innerHtml = '<tbody>'

					bodyLines.forEach(body => {
						const div =
							'<div style="padding: 7px 13px; background-color: #E8D8F0; font-size: 12px; color: #877D92; border-radius: 5px">' +
							body +
							'</div>'

						innerHtml += '<tr><td>' + div + '</td></tr>'
					})
					innerHtml += '</tbody>'

					const tableRoot = tooltipEl.querySelector('table')
					if (!tableRoot) return
					tableRoot.innerHTML = innerHtml

					const position =
						context.chart.canvas.getBoundingClientRect()

					// Display, position, and set styles for font
					tooltipEl.style.opacity = '1'
					tooltipEl.style.position = 'absolute'
					tooltipEl.style.left =
						position.left + 10 + tooltipModel.caretX + 'px'
					tooltipEl.style.top =
						position.top - 15 + tooltipModel.caretY + 'px'
					tooltipEl.style.pointerEvents = 'none'
				}
			}
		}
	}
}

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// eslint-disable-next-line react-refresh/only-export-components
export const data = {
	labels,
	datasets: [
		{
			data: [3.5, 3, 4, 5, 3, 5, 6],
			backgroundColor: '#D7CEFF',
			hoverBackgroundColor: '#1FC6C6',
			barThickness: 6,
			borderRadius: 50
		}
	]
}

const StatTitles: { [key: string]: string } = {
	weekly: 'week',
	daily: 'day',
	monthly: 'month'
} as const

export const ProfileActivity = ({ stat }: { stat?: number }) => {
	const [activeValue, setActiveValue] = useState<DropdownOption>({
		title: 'Daily weekly',
		value: 'weekly'
	})

	const doesStatIncrease = stat && stat > 0
	const statText = doesStatIncrease
		? 'increase ' + 'than last' + ' ' + `${StatTitles[activeValue.value]}`
		: 'decrease ' + 'than last' + ' ' + `${StatTitles[activeValue.value]}`
	return (
		<div className={cl.root}>
			<div className={cl.root__activity_header}>
				<div className={cl.root__personal_bar}>
					<div className={cl.root__personal_activity}>
						<Text
							text="Hours Activity"
							className={cl.root__title}
						/>
						<div className={cl.root__activity_changes}>
							<Icon
								name={'Arrow'}
								className={classNames(
									cl.root__activity_icon,
									doesStatIncrease
										? cl.root__arrow_icon_increase
										: cl.root__arrow_icon_decrease
								)}
							/>
							<Text
								text={stat?.toString() + '%'}
								className={classNames(
									cl.root__activity_stat,
									doesStatIncrease
										? cl.root__stat_increase
										: cl.root__stat_decrease
								)}
							/>
							<Text
								text={statText}
								className={cl.root__text_of_changes}
							/>
						</div>
					</div>
				</div>
				<div className={cl.root__personal_settings}>
					<Dropdown
						theme={'thin'}
						setActiveValue={setActiveValue}
						activeValue={activeValue}
						options={[
							{ title: 'Weekly', value: 'weekly' },
							{ title: 'Daily', value: 'daily' },
							{ title: 'Monthly', value: 'monthly' }
						]}
					/>

				
				</div>
			</div>
			<Bar
				options={options as BarOptions}
				data={data}
			/>
		</div>
	)
}
