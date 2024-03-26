import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo/Logo.png'
import { Button, ButtonGroup } from "@nextui-org/react";
import { NavbarLinks } from '../../data/navbar-links'

const Navbar = () => {
  return (
    <div className='flex py-2 items-center justify-center border-b-[1px]'>
      <div className="flex w-[96%] md:w-11/12 max-w-maxContent items-center justify-between">
        {/* logo */}
        <Link>
          <img src={Logo} alt="Logo" width={120} height={32} loading="lazy" className="rounded-xl p-2 border-2 border-white " />
        </Link>

        {/* NavLinks */}
        <nav className=''>
          <ul className='flex gap-2 p-1 bg-creamyellow rounded-md'>
            {
              NavbarLinks.map((link, index) => (
                <li key={index}>
                  <Button  className="bg-btn text-black font-extrabold text-md p-2 px-3" size="sm" radius="sm">{link.title}</Button>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
