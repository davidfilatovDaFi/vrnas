import SectionTitle from "../SectionTitle"
import man from '../../assets/home/our-partners/man.png'
import { partnersLogo } from "../../constants/home"
import { cn } from "../../utils/helpers"
import BlurGradient from "../BlurGradient"

const OurPartners = () => {
  return (
    <section className="w-full flex flex-col items-center gap-14 text-center mb-[100px] md:mb-[150px]">
      <SectionTitle
        className="px-5"
        title="Our Trusted Partners"
        text="Discover the Companies We Work With"
      />
      <div className="max-w-[1050px] relative">
        <BlurGradient className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[23.5%] h-[87%] -rotate-90"/>
        <img className="object-contain w-full relative z-10" src={man} alt="" />
        {partnersLogo.map((logo, i) => (
          <img key={i} className={cn(
            'absolute z-10 w-[9.6%] h-[13.7%] hover:scale-125 duration-500 transition-all',
            logo.className
          )} src={logo.image} alt="logo" />
        ))}
      </div>
    </section>
  )
}

export default OurPartners