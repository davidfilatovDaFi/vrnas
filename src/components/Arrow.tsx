import { cn } from '../utils/helpers'

interface IArrowProps {
  isActive: boolean,
  className?: string
}

const Arrow = ({isActive, className}: IArrowProps) => {
  return (
    <span className={
      cn(
        'w-[6px] h-[6px] transition-all inline-block border-white border-t-[1px] border-r-[1px] rotate-[135deg]',
        {'-rotate-45 translate-y-[2px]': isActive},
        className
      )
    }></span>
  )
}

export default Arrow