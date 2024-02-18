import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared'

import cl from './Title.module.scss'

export const Title = ({
	variant,
	className,
	translate
}: {
	variant: 'h1' | 'h3' | 'h4'
	className?: string
	translate: string
}) => {
	const { t } = useTranslation()

	switch (variant) {
		case 'h1':
			return (
				<h1
					className={classNames(
						cl.root,
						cl.root__h1,
						className ?? ''
					)}>
					{t(translate)}
				</h1>
			)
		case 'h3':
			return (
				<h2
					className={classNames(
						cl.root,
						cl.root__h3,
						className ?? ''
					)}>
					{t(translate)}
				</h2>
			)
		case 'h4':
			return (
				<h3
					className={classNames(
						cl.root,
						cl.root__h4,
						className ?? ''
					)}>
					{t(translate)}
				</h3>
			)
	}
}
