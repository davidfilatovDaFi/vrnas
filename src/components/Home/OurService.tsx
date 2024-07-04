import { serviceBlocks } from "../../constants/home"
import { cn } from "../../utils/helpers"
import BlurGradient from "../BlurGradient"
import Container from "../Container"
import SectionTitle from "../SectionTitle"
import Button from "../UI/Button/Button"

const OurService = () => {
  return (
    <section className="lg:mb-[250px] md:mb-[150px] mb-[100px]">
      <Container>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between mb-[46px] relative">
          <BlurGradient className="absolute -right-20 top-0 h-[230px] w-[400px] rounded-full opacity-75 blur-[90px] -rotate-45"/>
          <SectionTitle
            title="Our Service"
            text="Our Service"
          />
          <p className="text-[#D1D1D1] leading-[28px] max-w-[625px]">
            We use the latest VR hardware and software to create high-quality VR experiences that are accessible and affordable. Our goal is to provide exceptional customer service and support, and our team is always available to answer any questions and address any concerns you may have.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4 gap-y-7">
          {serviceBlocks.map((block, i) => (
            <div key={i} className={cn(
              "flex-auto group sm:flex-[1_1_50%] lg:flex-[0_0_33%] px-[15px] min-h-[291px] relative",
              block.className
            )}>
              <div
                className="p-[1px] group-hover:bg-[linear-gradient(90deg,_#0cbaf1_0,_#e95ce9_100%)] h-full bg-[linear-gradient(90deg,_rgba(255,_255,_255,_.3)_0,_transparent_100%)]"
              >
                <div className="relative pt-[38px] px-[32px] pb-[12px] bg-[#252532] h-full">
                  <img className="w-12 h-12" src={block.image} alt="service" />
                  <h2 className="text-[20px] mt-[60px] mb-3">{block.title}</h2>
                  <p className="text-[14px] text-[#B0B0B2] leading-[28px]">{block.text}</p>
                  <div className="absolute left-0 bottom-0 h-[70%] w-full 
                  flex items-end pb-8 justify-center transition-all duration-300
                  bg-[linear-gradient(180deg,_rgba(37,37,50,0.2),_#252532_100%)]
                  group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-10">
                    <Button className="uppercase font-bold text-[14px] tracking-[1.5px] bg-[rgba(37,37,50,0.6)]" type="transparent">LEARN MORE</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default OurService