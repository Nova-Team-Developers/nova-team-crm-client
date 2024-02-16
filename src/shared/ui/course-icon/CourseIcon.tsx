import { classNames } from '@/shared'
import cl from './CourseIcon.module.scss'
import Icon from './Vector.svg'


export const CourseIcon = ({className}: {className:string}) => {
  return (
    <div className={classNames(cl.icon, cl[className]) }>
      <img src={Icon} alt='course-icon'/>
    </div>
  )
}

