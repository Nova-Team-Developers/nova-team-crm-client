import { Input } from '@/shared'

export const HomePage = () => {
	return (
		<>
			<form>
				<Input
					label="Name"
					placeholder="Name"
					variant="event"
					type="email"
				/>
				<button type="submit">Send</button>
			</form>
		</>
	)
}
