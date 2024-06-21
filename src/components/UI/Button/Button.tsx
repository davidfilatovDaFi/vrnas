import { ReactNode } from 'react'
import styles from './Button.module.scss'
import { cn } from '../../../utils/helpers'

interface IButtonProps {
  children: ReactNode,
  type: 'filled' | 'transparent' | 'border',
  onClick?: () => void,
  className?: string
}

const Button = ({children, type, onClick, className}: IButtonProps) => {
  return (
    <button onClick={onClick} className={cn('cursor-pointer', styles[type], className)}>
      <span className='relative block'>{children}</span>
    </button>
  )
}

export default Button