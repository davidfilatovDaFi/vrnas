import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import Container from './Container'
import Button from './UI/Button/Button'
import NavBar from './NavBar'
import { cn } from '../utils/helpers'

const Header = () => {

  const [isBurger, setIsBurger] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {

    const getScroll = () => {
      setScrollTop(window.scrollY)
    }

    window.addEventListener('scroll', getScroll)

    return () => {
      window.removeEventListener('scroll', getScroll)
    }
  }, [])

  return (
    <header 
      className={cn(
        "fixed z-[1000] top-0 left-0 py-[31px] w-full transition-all",
        {'py-3': scrollTop > 0}
      )}
    >
      <div className={cn(
        'opacity-0 transition-all bg-[rgba(37,_37,_50,_.7)] backdrop-blur-[10px] absolute w-full h-full top-0 left-0 z-0',
        {'opacity-100': scrollTop > 0}
      )}></div>
      <Container className="flex items-center justify-between">
        <a href="">
          <img className='w-[101px] h-[30px] relative z-10' src={logo} alt="" />
        </a>
        <NavBar isBurger={isBurger}/>
        <div className='flex items-center gap-4'>
          <Button className='extra_sm:block hidden' type='transparent'>Contact us</Button>
          <Button 
            className='md:hidden py-[17px] px-3'
            onClick={() => {
              if (isBurger) {
                setIsBurger(false)
                document.body.style.overflow = 'auto'
              } else {
                setIsBurger(true)
                document.body.style.overflow = 'hidden'
              }
            }} 
            type='transparent'
          >
            <div className='flex flex-col items-end gap-1'>
              <span className={cn(
                'w-[20px] h-[2px] bg-white block transition-all',
                {'-rotate-45 translate-y-[6px]': isBurger}
              )}></span>
              <span className={cn(
                'w-[15px] h-[2px] bg-white block transition-all',
                {'opacity-0': isBurger}
              )}></span>
              <span className={cn(
                'w-[7px] h-[2px] bg-white block transition-all',
                {'w-[20px] rotate-45 relative -translate-y-[6px]': isBurger}
              )}></span>
            </div>
          </Button>
        </div>
      </Container>
    </header>
  )
}

export default Header