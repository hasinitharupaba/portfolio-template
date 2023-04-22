import React, { FC } from 'react'
import CN from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export interface FooterProps {
  [x: string]: any
}

export const Footer: FC<FooterProps> = ({ className, ...restProps }: FooterProps) => {
  const FooterClasses = CN(`footer bg-[#23395C]/90 h-full`, className)

  return (
    <div className={FooterClasses} {...restProps}>
      <div className='container pt-[40px] pb-[20px] lg:pt-[100px] lg:pb-[60px] flex flex-col items-center md:gap-[20px] lg:gap-[32px]'>
        <Image
          className='object-center'
          src='/logo-white.svg'
          alt='Meliora Logo'
          width={300}
          height={56}
        />
        <p className='text-base text-white w-[340px] text-center pt-[20px]'>
          We assure you elegance through excellence. Please feel free to reach us!
        </p>

        {/* Social links */}
        <div className='flex gap-[12px]'>
          {/* <Link href='https://www.instagram.com' target='_blank'>
            <i className='ri-instagram-line text-white text-[24px] cursor-pointer hover:text-A-600' />
          </Link> */}
          <Link href='https://www.facebook.com/RLfotography' target='_blank'>
            <i className='ri-facebook-circle-line text-white text-[24px] cursor-pointer hover:text-A-600' />
          </Link>
        </div>

        {/* Contact details */}
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-[12px]'>
            <i className='ri-phone-line text-white text-[24px]' />
            <p className='text-base text-white'>Call us on: +94 77 71 30 572</p>
          </div>
          {/* Whatsapp */}
          <div className='flex items-center'>
            <a href='https://wa.me/94777130572' data-action='share/whatsapp/share'>
              <div className='flex items-center gap-[12px]'>
                <i className='ri-whatsapp-line text-white text-[24px]' />
                <p className='text-base text-white'> +94 77 71 30 572</p>
              </div>
            </a>
          </div>
          <div className='flex pt-[8px]'>
            <a
              href='mailto:melioralifestyleweddings@gmail.com'
              rel='noreferrer'
              className='text-base text-white flex flex-col md:flex-row items-center md:gap-[12px] hover:text-A-700'>
              <span className='flex gap-[12px]'>
                <i className='ri-mail-line text-white text-[24px] cursor-pointer hover:text-A-700' />
                <span>Email: </span>
              </span>
              melioralifestyleweddings@gmail.com
            </a>
          </div>
          <div className='flex items-center gap-[12px]'>
            <i className='ri-map-pin-line text-white text-[24px]' />
            <p className='text-base text-white'>Colombo & Matara, Sri Lanka.</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='border-t border-N-500 pb-[24px]'>
        <div className='container flex flex-col md:flex-row md:justify-between items-center pt-[24px]'>
          <span className='text-base text-white text-center'>
            © 2023 Meliora Lifestyle. All Rights Reserved.
          </span>
          <Link href='/privacy'>
            <span className='text-base text-white text-center'>Privacy policy</span>
          </Link>
          <Link href='/terms'>
            <span className='text-base text-white text-center'>Terms</span>
          </Link>
          <p className='text-base text-white cursor-pointer hover:text-A-700'>
            Website by <Link href='https://www.tharupaba.com/contact'>Tharupaba</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {}

export default Footer
