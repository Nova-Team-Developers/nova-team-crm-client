import { TeacherListItem } from '../teacher-list-item'
import { teacherActivityListItemsArr } from './teacher-list.data'

export const TeacherList = () => {
	return (
		<ul>
			{teacherActivityListItemsArr.map((i, index) => (
				<TeacherListItem
					key={index}
					{...i}
				/>
			))}
		</ul>
	)
}
