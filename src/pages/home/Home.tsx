import { Switch } from '@/shared/ui/switch'

export const HomePage = () => {
	return (
		<>
			<h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
				largeSize
			</h1>

			<Switch
				textOnLeft="Courses"
				textOnRight="My schedule"
				variant="largeSize"
			/>

			{/* <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
				smallSize
			</h1>
			<Switch
				textOnLeft="Courses"
				textOnRight="My schedule"
				variant="smallSize"
			/> */}
		</>
	)
}
