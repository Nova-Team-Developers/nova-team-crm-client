import { classNames } from '@/shared'

import cl from './ProfileInfoInput.module.scss'

export const ProfileInfoInput = ({
	className,
	name,
	label,
	placeholder,
	...props
}: {
	className: string
	name: string
	label: string
	placeholder: string
}) => {
	return (
		<>
			<div>
				<label
					className={cl.label}
					htmlFor={name}>
					{label}
				</label>
			</div>
			<div>
				<input
					id={name}
					placeholder={placeholder}
					className={classNames(cl.input, className)}
					{...props}
				/>
			</div>
		</>
	)
}
