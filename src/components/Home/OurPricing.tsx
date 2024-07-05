import Container from '../Container'
import SectionTitle from '../SectionTitle'
import bg from '../../assets/home/our-pricing/bg.png'
import { ourPricingBlocks } from '../../constants/home'
import icon from '../../assets/home/our-pricing/icon.png'
import man from '../../assets/home/our-pricing/man.png'
import Button from '../UI/Button/Button'
import BlurGradient from '../BlurGradient'

const OurPricing = () => {
  return (
    <section className='mb-[200px]'>
      <Container>
        <SectionTitle
          title='our pricing'
          text='Affordable VR Services for Everyone'
        />
        <p className='text-[#D1D1D1] leading-[28px] mt-[16px] mb-[40px] max-w-[625px]'>At VRNas, we believe that everyone should have access to the benefits of VR. That's why we offer a range of pricing options to meet the needs of any budget.</p>
        <div 
          style={{background: `url(${bg}) no-repeat 0 0 / 100% 100%`}}
          className='w-full mr-[50px] flex flex-col lg:flex-row relative'
        >
          <BlurGradient className='absolute w-[500px] h-[300px] -translate-x-1/2 lg:-translate-x-0 left-[50%] -rotate-45 top-[60%] lg:top-[30%] z-[-1] blur-[70px] opacity-100'/>
          <div className='lg:flex-[0_1_65%] space-y-8 px-[42px] py-[55px]'>
            {ourPricingBlocks.map((block, i) => (
              <article key={i} className='flex gap-4'>
                <img className='w-10 h-10' src={icon} alt="icon" />
                <div>
                  <h2 className='mb-3 text-[18px]'>{block.title}</h2>
                  <p className='text-[#B0B0B2] leading-[28px]'>{block.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className='flex-[0_0_1px] first-letter:min-h-[100%] mt-[38px] lg:mt-10 mb-[47px] lg:mb-[90px] bg-[#fff] opacity-10 mx-[22px] lg:mr-[40px] lg:ml-[60px]'></div>
          <div className='lg:flex-[0_1_35%] min-h-full flex justify-end ml-[40px] lg:mr-0'>
            <img className='h-full object-contain lg:object-right-bottom' src={man} alt="man" />
          </div>
          <div className='absolute -bottom-[100px] lg:-bottom-12 left-10 lg:left-[70%] lg:-translate-x-1/2 p-[1px] bg-[linear-gradient(90deg,_#0cbaf1_0,_#e95ce9_100%)]'>
            <div className='bg-[#252532] text-center flex flex-col items-center justify-center w-[230px] extra_sm:w-[321px] h-[222px]'>
              <p className='text-[14px] text-[#D1D1D1] font-medium'>Start from</p>
              <h2 className='text-[60px] leading-[66px] font-semibold'>$99</h2>
              <Button className='my-3' type='filled'>get started</Button>
              <p className='text-[12px] text-[#B0B0B2]'>30 Days Moneyback Guarantee</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default OurPricing