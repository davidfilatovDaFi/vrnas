import { useState } from "react"
import { chooseUsBlocks } from "../../constants/header"
import Arrow from "../Arrow"
import Container from "../Container"
import SectionTitle from "../SectionTitle"
import { cn } from "../../utils/helpers"
import man from '../../assets/home/choose-us/man.png'
import BlurGradient from "../BlurGradient"
import vr from '../../assets/home/choose-us/vr.png'
import VideoPlayer from "../VideoPlayer"

const ChooseUs = () => {

  const [activeBlock, setActiveBlock] = useState<number | null>(null)

  return (
    <section className="md:mb-[187px] mb-[100px]">
      <Container className="flex flex-col-reverse md:flex-row items-center lg:gap-x-[105px] gap-x-[40px] gap-y-[75px]">
        <div className="md:flex-[0_1_50%] flex-auto">
          <SectionTitle
            title="why choose us"
            text="Why Choose Us for Your VR Needs"
          />
          <div className="mt-8">
            {chooseUsBlocks.map((block, index) => (
              <article key={index}>
                <div className="flex items-center justify-between">
                  <h2 className="text-[20px] font-medium">{block.title}</h2>
                  <button onClick={() => setActiveBlock(block => block === index ? null : index)} className="p-1">
                    <Arrow isActive={activeBlock === index}/>
                  </button>
                </div>
                <div className="w-full my-3 h-[1px] bg-[rgba(255,255,255,0.35)]"></div>
                <p className={cn(
                  "text-[#D1D1D1] leading-[28px] h-0 overflow-hidden transition-all duration-300",
                  {'h-[150px]': activeBlock === index}
                )}>
                  {block.text}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="relative md:flex-[0_1_50%] lg:h-[662px] extra_sm:h-[662px] md:h-[400px] h-[400px] flex-auto w-full">
          <BlurGradient className="top-[60%] w-[100%] h-[40%] -translate-y-1/2 opacity-65 z-10 -rotate-45"/>
          <div className="ml-14 w-[70%] h-[430px] bg-[#252532] absolute bottom-0 left-0"></div>
          <img className="w-full h-full object-contain absolute bottom-0 left-0 max-w-none z-10 object-bottom" src={man} alt="man" />
          <VideoPlayer className="absolute z-20 -bottom-[5%] right-[16%]" image={vr}/>
        </div>
      </Container>
    </section>
  )
}

export default ChooseUs