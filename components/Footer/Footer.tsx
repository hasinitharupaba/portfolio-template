import React, { FC } from 'react'
import CN from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export interface FooterProps {
  [x: string]: any
}

export const Footer: FC<FooterProps> = ({ className, ...restProps }: FooterProps) => {
  const FooterClasses = CN(`footer bg-N-100 h-full`, className)

  return (
    <div className={FooterClasses} {...restProps}>
      {/* Copyright */}
      <div className='pb-[24px]'>
        <div className='container flex flex-col md:flex-row md:justify-between items-center pt-[24px]'>
          <Image
            className='object-center'
            src='/logo-black.svg'
            alt='Meliora Logo'
            width={100}
            height={56}
          />
          <span className='text-base text-N-800 text-center'>
            © 2023 John Smith. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {}

export default Footer
