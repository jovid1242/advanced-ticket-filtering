import { IEmptyProps } from './EmptyTypes'
import './EmptyStyle.scss'

const Empty = ({ text = 'Нет данных' }: IEmptyProps) => {
  return (
    <div className="Empty">
      <div className="Empty-wrapper">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Empty
