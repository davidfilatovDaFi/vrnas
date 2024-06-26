import { useState } from 'react'
import { navItems } from '../constants/header'
import { cn } from '../utils/helpers'
import Popup from './UI/Popup'
import Button from './UI/Button/Button'
import Arrow from './Arrow'

const NavBar = ({isBurger}:{isBurger: boolean}) => {

  const [activeLink, setActiveLink] = useState<number>()

  return (
    <nav className={cn(`fixed -translate-x-full md:-translate-x-0 md:w-auto md:h-auto 
      md:bg-[rgba(0,0,0,0)] bg-[rgba(37,37,50,0.9)] md:relative 
      inset-0 pt-[110px] md:p-0 transition-all`, {'-translate-x-0': isBurger})}
    >
      <ul className="flex flex-col md:flex-row items-start lg:gap-[64px] gap-[42px] md:items-center">
        {navItems.map((item, index) => (
          <li key={item.text} className='relative md:text-[16px] text-[20px] flex flex-col md:flex-row md:justify-normal px-6 md:px-0 w-full md:w-auto items-center gap-1 text-[#d1d1d1] hover:text-white transition-all'>
            <div className='flex items-center justify-between w-full gap-2'>
              <a href={item.link}>{item.text}</a>
              {item.children && (
                <button 
                  className='w-3 h-3 flex items-center justify-center'
                  onClick={() => setActiveLink(link => link === index ? 0 : index)}
                >
                  <Arrow className='w-3 md:w-[6px] h-3 md:h-[6px]' isActive={activeLink === index}/>
                </button>
              )}
            </div>
            {item.children && (
              <>
                <Popup 
                  amount={item.children.length} 
                  isActive={activeLink === index}
                >
                  {item.children.map((child, index) => (
                    <a key={index} className='text-[16px]' href={child.link}>{child.text}</a>
                  ))}
                </Popup>
              </>
            )}
          </li>
        ))}
        <Button className='extra_sm:hidden w-[90%] mx-auto mt-2' type='transparent'>Contact us</Button>
      </ul>
    </nav>
  )
}

export default NavBar