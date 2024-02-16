import { classNames } from '@/shared'
import Icon from './course-icon.svg'
import cl from './CourseIcon.module.scss'


export const CourseIcon = ({className, color}: {className:string, color: string}) => {
  return (
    <div style={{ backgroundColor: color}} className={classNames(cl.icon, className) }>
      <img src={Icon} alt='course-icon'/>
    </div>
  )
}

