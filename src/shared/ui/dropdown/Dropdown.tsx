import { useState } from 'react'
import { Icon, Typography } from '@/shared'
import cl from './Dropdown.module.scss'
import { DropdownOption } from './types'

const { Text } = Typography 

export const Dropdown = ({
	activeValue,
	setActiveValue,
	options
}: {
	activeValue?: DropdownOption
	// eslint-disable-next-line no-unused-vars
	setActiveValue: (value: DropdownOption) => void
	options: DropdownOption[]
}) => {
	const [isOpen, setIsOpen] = useState(false)
	
	const handleSelect = (value: DropdownOption) => {
		setActiveValue(value)
		setIsOpen(false)
	}

	return (
		<div className={cl.root}>
			<div
				className={`${cl.root__select_dropdown} ${isOpen && cl.root__select_dropdown_open}`}
				onClick={() => setIsOpen(prev => !prev)}>
				<div
					className={`${isOpen && cl.root__select_default_open} ${cl.root__option_text} ${cl.root__select_default}`}>
					<div>
						<Text
							text={activeValue?.title ?? ''}
							className={cl.root__option_text}
						/>
					</div>
					<div className={cl.root__iconWrapper}>
						<Icon name={'Arrow'} />
					</div>
				</div>
			</div>

			{isOpen ? (
				<ul className={cl.root__dropdown_options}>
					{options.map(option => (
						<li
							key={option.title}
							className={cl.root__select_option}
							onClick={() => handleSelect(option)}>
							<Text
								text={option.title}
								className={cl.root__option_text}
							/>
						</li>
					))}
				</ul>
			) : null}
		</div>
	)
}
