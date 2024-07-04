import Container from "../Container"
import SectionTitle from "../SectionTitle"
import video from '../../assets/home/how-start/video.png'
import play from '../../assets/home/how-start/play.png'
import smallPlay from '../../assets/home/how-start/small-play.svg'
import Button from "../UI/Button/Button"
import { useState } from "react"
import BlurGradient from "../BlurGradient"

const HowStart = () => {

  const [isPlay, setIsPlay] = useState(false)

  return (
    <section className="mb-[100px]">
      <Container className="flex flex-col items-center">
      <BlurGradient className="absolute -left-[150px] top-20 h-[250px] w-[450px] rounded-full opacity-55 blur-[70px] -rotate-45"/>
        <SectionTitle
          className="text-center max-w-[810px]"
          title="HOW TO GET STARTED"
          text="Bringing Your Virtual Reality Dreams to Life"
        />
        <div 
          onClick={() => setIsPlay(isPlay => !isPlay)}
          className="relative my-12 group overflow-hidden rounded-2xl cursor-pointer min-h-[254px]"
        >
          <img className="w-full h-[254px] sm:h-full object-cover transition-all duration-700 group-hover:scale-110" src={video} alt="video" />
          <img className="absolute left-1/2 top-1/2 -translate-x-1/2 
          -translate-y-1/2 w-24 h-24 group-hover:scale-110 transition-all" src={play} alt="play" />
          <div className="flex items-center gap-x-4 absolute bottom-0 left-0 w-full p-5">
            <img className="flex-[0_0_11px]" src={smallPlay} alt="play" />
            <span className="inline-block flex-auto h-2 rounded-lg relative bg-[rgba(255,255,255,0.3)]">
              <span className="inline-block absolute left-0 top-0 w-[10%] h-full rounded-xl z-10 bg-[rgba(255,255,255,0.6)]"></span>
              <span className="inline-block absolute left-0 top-0 w-[2%] h-full rounded-xl z-20 bg-[rgba(255,255,255,1)]"></span>
            </span>
          </div>
          {isPlay && (
            <iframe 
              className="w-full h-full absolute left-0 top-0 z-50"
              
              src="https://www.youtube.com/embed/_S7WEVLbQ-Y?autoplay=1"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          )}
        </div>
        <Button type="filled">
          GET STARTED
        </Button>
      </Container>
    </section>
  )
}

export default HowStart