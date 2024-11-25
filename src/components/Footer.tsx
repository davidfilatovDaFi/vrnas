import Container from './Container'
import plane from '../assets/footer/plane.svg'
import logo from '../assets/logo.png'
import { needHelp, quickLinks, socialIcons, supportList } from '../constants/footer'
import FooterList from './FooterList'

const Footer = () => {
  return (
    <footer>
      <Container className='space-y-[180px]'>
        <div className='w-full py-[34px] px-[74px] flex text-center md:text-start gap-y-4 flex-col md:flex-row items-center justify-between bg-[linear-gradient(90deg,_#0CBAF1_0%,_#E95CE9_100%)]'>
          <p className='text-[28px] lg:text-[40px] font-semibold leading-[36px] md:leading-[58px] max-w-[560px]'>Subscribe to our newsletter for latest updates</p>
          <form className='bg-white/10 p-1 flex items-center sm:gap-[35px]' action="">
            <input 
              className='bg-transparent focus:outline-none text-white placeholder:text-white footer-input'
              type="text" 
              placeholder='Enter your email address'
            />
            <button className='bg-white/25 p-4' type='submit'>
              <img className='min-w-4 min-h-4' src={plane} alt="send" />
            </button>
          </form>
        </div>
        <div>
          <div className='flex flex-col lg:flex-row'>
            <div className='flex items-center lg:items-start lg:flex-col gap-x-[52px] gap-y-[140px] mb-[56px] lg:mb-0 lg:mr-[140px]'>
              <a href="">
                <img className='w-[101px] h-[30px] relative z-10' src={logo} alt="" />
              </a>
              <div className='flex gap-3 extra_sm:gap-5'>
                {socialIcons.map((icon, i) => (
                  <div className='p-[1px] w-9 extra_sm:w-12 h-9 extra_sm:h-12 rounded-full bg-[linear-gradient(90deg,_#0cbaf1_0,_#e95ce9_100%)]' key={i}>
                    <div className='bg-[#18181B] rounded-full w-full h-full flex justify-center items-center'>
                      <img src={icon} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-y-[50px] justify-between w-full'>
              <div className='flex gap-[70px] xl:gap-[150px]'>
                <FooterList title='Quicklinks' list={quickLinks}/>
                <FooterList title='Support' list={supportList}/>
              </div>
              <div>
                <FooterList title='Need Help?' list={needHelp}/>
              </div>
            </div>
          </div>
          <div className='w-full h-[1px] bg-[linear-gradient(90deg,_#0cbaf1_0,_#e95ce9_100%)] my-[33px]'></div>
          <p className='font-light text-center mb-[45px]'>© Copyright 2023, All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer