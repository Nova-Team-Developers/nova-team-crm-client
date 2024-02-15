import { classNames } from '@/shared'

import cl from './PercentCircle.module.scss'

export const PercentCircle = ({ percent }: { percent: string }) => {
	const checkedPercent = +percent > 100 ? '100' : percent

	return (
		<div
			style={{
				backgroundImage: `conic-gradient(at center, #1AD3D3 ${checkedPercent}%, #e4e6e8 0)`
			}}
			className={cl.root}>
			<div
				className={classNames(
					cl.root__body,
					checkedPercent === '100'
						? cl.root__body_full
						: cl.root__body_half
				)}
			/>
		</div>
	)
}
