import Container from "../Container"
import Button from "../UI/Button/Button"
import checked from '../../assets/home/about-us/checked.svg'
import man from '../../assets/home/about-us/man.png'
import BlurGradient from "../BlurGradient"
import vr from '../../assets/home/about-us/vr.png'
import VideoPlayer from "../VideoPlayer"

const AboutUs = () => {
  return (
    <section className="mb-[100px] md:mb-[150px]">
      <Container className="flex flex-col md:flex-row gap-[66px]">
        <div className="relative md:flex-[0_1_517px] md:h-[622px] flex-auto mx-auto h-[370px] w-[350px] extra_sm:h-[456px] extra_smw-[430px]">
          <BlurGradient className="top-1/2 w-[80%] h-[60%] -translate-y-1/2 opacity-65 z-10 -rotate-45"/>
          <div className="w-[76%] h-[400px] md:h-[490px] bg-[#252532] absolute bottom-0 left-0"></div>
          <img className="w-full h-full object-contain translate-x-0 extra_sm:translate-x-6 absolute bottom-0 left-0 max-w-none z-10 object-bottom" src={man} alt="man" />
          <VideoPlayer className="absolute -bottom-6 right-4 extra_sm:right-0 z-20" image={vr}/>
        </div>
        <div className="flex-[0_1_50%]">
          <h2 className="bg-[linear-gradient(90deg,_#0CBAF1_0%,_#E95CE9_100%)] bg-clip-text text-transparent inline-block uppercase font-medium tracking-[.14rem]">About us</h2>
          <p className="text-[32px] lg:text-[48px] my-3 font-semibold leading-[41px] lg:leading-[58px]">Bring your events to life like never before with our VR services.</p>
          <p className="text-[#D1D1D1] leading-[28px]">VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light.</p>
          <ul className="space-y-[14px] mt-[24px] mb-[32px]">
            {['Cutting-Edge Technology','Versatile Applications','Affordable and Accessible'].map(text => (
              <li className="flex gap-3 items-center" key={text}>
                <img className="w-4 h-4" src={checked} alt="checked" />
                <p>{text}</p>
              </li>
            ))}
          </ul>
          <Button type="filled">read more</Button>
        </div>
      </Container>
    </section>
  )
}

export default AboutUs