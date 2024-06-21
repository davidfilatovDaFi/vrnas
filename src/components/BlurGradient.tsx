import { cn } from "../utils/helpers"

const BlurGradient = ({className}:{className?: string}) => {
  return (
    <div className={cn(`bg-[linear-gradient(98.54deg,_rgba(28,_196,_249,_.8)_.72%,_rgba(254,_105,_254,_.8)_90.69%);]
     blur-[110px] absolute w-full h-1/2`, className)}/>
  )
}

export default BlurGradient