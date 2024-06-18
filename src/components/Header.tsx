import { useState } from 'react'
import logo from '../assets/logo.png'
import Container from './Container'
import Button from './UI/Button/Button'
import NavBar from './NavBar'

const Header = () => {

  const [isBurger, setIsBurger] = useState(false)

  return (
    <header className="fixed z-[1000] top-0 left-0 py-[31px] w-full">
      <Container className="flex items-center justify-between">
        <a href="">
          <img className='w-[101px] h-[30px]' src={logo} alt="" />
        </a>
        <NavBar isBurger={isBurger}/>
        <div className='flex items-center gap-4'>
          <Button className='extra_sm:block hidden' type='transparent'>Contact us</Button>
          <Button 
            className='md:hidden'
            onClick={() => setIsBurger(isBurger => !isBurger)} 
            type='transparent'
          >
            Burger
          </Button>
        </div>
      </Container>
    </header>
  )
}

export default Header