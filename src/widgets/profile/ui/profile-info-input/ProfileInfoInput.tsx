import { clsx } from 'clsx'
import { Eye, EyeOff } from 'lucide-react'

import { useState } from 'react'
import { InputHTMLAttributes } from 'react'

import style from './ProfileInfoInput.module.scss'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	labelName?: string
	error?: string
	description?: boolean
	descrText?: string
	type: string
	placeholder?: string
}

export const ProfileInfoInput = ({
	labelName = 'labelName',
	error = 'null',
	className,
	type = 'text',
	description = false,
	descrText,
	placeholder,
	...props
}: InputProps) => {
	const [visible, setVisible] = useState(false)
	const handleVisible = () => {
		setVisible(!visible)
	}

	return (
		<label className={clsx(className, style.label)}>
			<div className={style.label_name}>{labelName}</div>
			<div className={style.inputContainer}>
				<input
					type={
						type === 'password'
							? visible
								? 'text'
								: 'password'
							: type
					}
					className={clsx({
						[style.input]: true,
						[style.input_typeSucces]: Boolean(error) === false,
						[style.input_typeError]: Boolean(error) === true
					})}
					placeholder={placeholder}
					{...props}
				/>
				{type === 'password' && (
					<div
						className={style.icon}
						onClick={handleVisible}>
						{visible ? (
							<EyeOff color="#94a3b8" />
						) : (
							<Eye color="#94a3b8" />
						)}
					</div>
				)}
				{error && <p className={style.inputError}>{error}</p>}
			</div>
			{description && (
				<span className={style.inputDescr}>{descrText}</span>
			)}
		</label>
	)
}
