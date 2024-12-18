import './ButtonStyles.scss'
import { ButtonProps } from './ButtonTypes'

const Button = ({
  label,
  onClick,
  active = false,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`Button ${active ? 'Button--active' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button
