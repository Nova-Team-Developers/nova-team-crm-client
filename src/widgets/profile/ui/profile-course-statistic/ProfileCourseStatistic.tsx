import cl from './ProfileCourseStatistic.module.scss'
// eslint-disable-next-line
import ProfileImage from './course-mentor-example.png'

export const ProfileCourseStatistic = ({
	allLessons,
	uploadedLessons
}: {
	allLessons: string
	uploadedLessons: string
}) => {
	return (
		<div className={cl.root}>
			<h3 className={cl.root__title}>Course Data</h3>
			<div className={cl.root__body}>
				<div className={cl.root__body__all}>
					<p className={cl.root__body__title}>All lessons</p>
					<p className={cl.root__body__text}>{allLessons}</p>
				</div>
				<div className={cl.root__body__uploaded}>
					<p className={cl.root__body__title}>Uploaded lessons</p>
					<p className={cl.root__body__text}>{uploadedLessons}</p>
				</div>
				<div className={cl.root__body__teacher}>
					<p className={cl.root__body__title}>Teacher</p>
					<img
						src={ProfileImage}
						alt="teacher"
					/>
				</div>
			</div>
		</div>
	)
}
