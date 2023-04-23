import React, { FC, useState } from 'react'
import CN from 'classnames'
import Link from 'next/link'
import { Button } from 'components/Button'
import useViewport from 'utils/useViewport'

export interface HeaderProps {
  [x: string]: any
}

export const Header: FC<HeaderProps> = ({ className, ...restProps }: HeaderProps) => {
  const HeaderClasses = CN(`header flex py-[24px] bg-white/80 backdrop-blur-sm`, className)

  const [isOpen, setIsOpen] = useState(false)

  const { isMobile, isDesktop, isTablet } = useViewport()

  /* Mobile menu links */
  const data = [
    { name: 'Home', Link: '/' },
    { name: 'Projects', Link: '/projects' },
    { name: 'About', Link: '/about' },
    { name: 'Contact', Link: '/contact' },
  ]

  return (
    <div className={HeaderClasses} {...restProps}>
      {/* Mobile responsive header */}
      {isMobile && (
        <div className='flex container justify-between items-center'>
          <Link href='/'>
            <img
              src='/logo-black.svg'
              className='object-center w-[140px] h-[56px]'
              alt='Logo'
            />
          </Link>

          <div
            className='items-center gap-[12px] cursor-pointer z-[1000] flex justify-start py-[8px]'
            onClick={() => setIsOpen(!isOpen)}>
            <i className={!isOpen ? 'ri-menu-line text-[24px]' : 'ri-close-line text-[24px]'}>
              <div
                className={
                  !isOpen
                    ? 'hidden'
                    : 'open-menu-bg flex flex-col bg-white/90 backdrop-blur-lg z-[10000] rounded-b-[4px] absolute gap-[12px] top-[89px] right-0 py-[20px] px-[40px] h-[248px] w-full'
                }>
                {data.map(Link => (
                  <li key={Link.name} className='text-base list-none'>
                    <a
                      href={Link.Link}
                      className='text-N-800 font-600 text-h6 font-heading uppercase hover:text-N-700'>
                      {Link.name}
                    </a>
                  </li>
                ))}
              </div>
            </i>
          </div>
        </div>
      )}

      {/* header links */}
      {(isDesktop || isTablet) && (
        <div className='flex gap-[200px] justify-between items-center container'>
          <Link href='/'>
            <div className='flex justify-center'>
              <img
                src='/logo-black.svg'
                className='object-center w-[100px] h-full'
                alt='Logo'
              />
            </div>
          </Link>
          <div className='flex py-[12px] gap-[32px]'>
            <Link href='/' passHref>
              <Button label='Home' appearance='link' />
            </Link>
            <Link href='/projects' passHref>
              <Button label='Projects' appearance='link' />
            </Link>
            <Link href='/about' passHref>
              <Button label='About' appearance='link' />
            </Link>
            <Link href='/contact' passHref>
              <Button label='Contact' appearance='link' />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
