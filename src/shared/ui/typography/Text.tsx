import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared'

import cl from './Text.module.scss'

export const Text = ({
	className,
	translate
}: {
	className?: string
	translate: string
}) => {
	const { t } = useTranslation()

	return (
		<p className={classNames(cl.root, className ?? '')}>{t(translate)}</p>
	)
}
