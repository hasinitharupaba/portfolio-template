import React, { FC, useState } from 'react'
import CN from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'components/Button'
import { useRouter } from 'next/router'
import useViewport from 'utils/useViewport'

export interface HeaderProps {
  [x: string]: any
}

export const Header: FC<HeaderProps> = ({ className, ...restProps }: HeaderProps) => {
  const HeaderClasses = CN(
    `header flex flex-col lg:items-center gap-[20px] py-[20px] sticky top-0 bg-white/80 backdrop-blur-sm z-[1000]`,
    className
  )

  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  const { isMobile, isDesktop, isTablet } = useViewport()

  const data = [
    { name: 'Home', Link: '/' },
    { name: 'Services', Link: '/services' },
    { name: 'About', Link: '/about' },
    { name: 'Portfolio', Link: '/portfolio' },
    { name: 'Contact', Link: '/contact' },
  ]

  return (
    <div className={HeaderClasses} {...restProps}>
      {/* Mobile responsive header */}
      {isMobile && (
        <div className='flex container justify-between items-center'>
          <Link href='/'>
            <img
              src='/logo-brown.svg'
              className='object-center w-[140px] h-[56px]'
              alt='Meliora Logo'
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
        <div className='flex flex-col gap-[24px]'>
          <Link href='/'>
            <div className='flex justify-center'>
              <img
                src='/logo-brown.svg'
                className='object-center w-[200px] h-[56px]'
                alt='Meliora Logo'
              />
            </div>
          </Link>
          <div className='container border-t border-N-500 border-b flex justify-around w-[840px] py-[12px]'>
            <Link href='/' passHref>
              <Button label='Home' appearance='link' />
            </Link>
            <Link href='/services' passHref>
              <Button label='Services' appearance='link' />
            </Link>
            <Link href='/about' passHref>
              <Button label='About us' appearance='link' />
            </Link>
            <Link href='/portfolio' passHref>
              <Button label='Portfolio' appearance='link' />
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

Header.defaultProps = {}

export default Header
