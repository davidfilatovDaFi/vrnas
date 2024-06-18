import { ReactNode } from "react"
import { cn } from "../../utils/helpers"

interface IPopupProps {
  isActive: boolean,
  children: ReactNode,
  amount: number,
  className?: string
}

const Popup = ({children, isActive, amount, className}: IPopupProps) => {
  return (
    <div 
      className={cn(
        "relative md:absolute flex flex-col items-start px-2 w-full md:w-[170px] overflow-hidden transition-all duration-500 z-10 top-full translate-y-2 bg-[#252532] left-0 text-white",
        {'pt-2 border-[1px] border-[#D1D1D1]': isActive},
        className
      )}
      style={{height: isActive ? amount * 30 + 'px' : 0}}
    >
      {children}
    </div>
  )
}

export default Popup