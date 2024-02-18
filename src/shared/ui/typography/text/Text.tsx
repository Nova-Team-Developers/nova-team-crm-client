import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared'

import cl from './Text.module.scss'

export const Text = ({
	className,
	text,
	noTranslate
}: {
	className?: string
	text: string
	noTranslate?: boolean
}) => {
	const { t } = useTranslation()

	return (
		<p className={classNames(cl.root, className ?? '')}>
			{noTranslate ? text : t(text)}
		</p>
	)
}
