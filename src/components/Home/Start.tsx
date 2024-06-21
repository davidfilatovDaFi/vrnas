import { startClients } from "../../constants/home"
import Container from "../Container"
import Button from "../UI/Button/Button"
import vr from '../../assets/home/start/vr.png'
import play from '../../assets/home/start/play.png'
import line from '../../assets/home/start/line.png'
import person from '../../assets/home/start/person.png'
import BlurGradient from "../BlurGradient"

const Start = () => {

  return (
    <section>
      <Container>
        <div className="pb-[144px] sm:pb-[66px] relative z-20">
          <div className="max-w-[540px] mb-8 sm:mb-0">
            <h2 className="lg:text-[64px] font-semibold extra_sm:text-[48px] text-[36px]">Immerse Yourself in Virtual Reality</h2>
            <p className="font-light text-[#D1D1D1] mt-3 mb-8">Experience Unforgettable Events in VR. Bring your events to life like never before with our VR services</p>
            <Button type="filled">discover more</Button>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[144px] sm:gap-[74px] ">
            <div className="flex items-center">
              <div className="flex items-center">
                {startClients.map((client, i) => (
                  <img 
                    key={i}
                    style={{transform: `translateX(${-12 * i}px)`}} 
                    className="w-[50px] h-[50px]" src={client} 
                    alt="client" 
                  />
                ))}
              </div>
              <p className="text-[16px] font-semibold">
                <span className="inline-block relative mr-[5px]">
                  32+
                  <img className="absolute max-w-none -left-[8px] -bottom-[2px] w-[47px] h-2" src={line} alt="line" />
                </span>
                <span className="font-light text-[#D1D1D1]">Happy Client</span>
              </p>
            </div>
            <div className="relative group w-[196px] h-[127px] overflow-hidden cursor-pointer">
              <img className="w-full h-full transition-all duration-700 group-hover:scale-110" src={vr} alt="vr" />
              <img className="w-7 h-7 transition-all duration-[300ms] group-hover:scale-125 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" src={play} alt="play" />
            </div>
          </div>
        </div>
        <div className="w-[354px] lg:w-[526px] h-[422px] lg:h-[626px] absolute extra_sm:right-0 bottom-0 -right-[30%] ">
          <img className="w-full h-full max-w-none relative z-10" src={person} alt="person" />
          <BlurGradient className="top-1/2 -translate-y-1/3 -rotate-45 h-1/2 opacity-80"/>
        </div>
      </Container>
    </section>
  )
}

export default Start