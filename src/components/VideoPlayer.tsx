import play from '../assets/play.png'
import { cn } from '../utils/helpers'

interface IVidePlayerProps {
  image: string,
  className?: string,
}

const VideoPlayer = ({image, className}:IVidePlayerProps) => {
  return (
    <div className={cn(
      "relative group w-[196px] h-[127px] overflow-hidden cursor-pointer",
      className
    )}>
      <img className="w-full h-full transition-all duration-700 group-hover:scale-110" src={image} alt="video" />
      <img className="w-7 h-7 transition-all duration-[300ms] group-hover:scale-125 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" src={play} alt="play" />
    </div>
  )
}

export default VideoPlayer