import { ReactNode } from "react"
import { cn } from "../utils/helpers"

interface IContainerProps {
  children: ReactNode,
  className?: string
}

const Container = ({children, className}: IContainerProps) => {
  return (
    <div className={cn('max-w-[1200px] px-5 w-full mx-auto relative', className)}>
      {children}
    </div>
  )
}

export default Container