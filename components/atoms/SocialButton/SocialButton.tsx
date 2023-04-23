/*
 * Please don't edit this component unless for style changes
 */

import React, { FC } from 'react'
import CN from 'classnames'
import Link from 'next/link'

export interface SocialButtonProps {
  [x: string]: any
  heading?: string
  icon?: any
  link?: string
}

export const SocialButton: FC<SocialButtonProps> = ({
  className,
  heading,
  icon,
  link,
  ...restProps
}: SocialButtonProps) => {
  const SocialButtonClasses = CN(`social-button`, className)

  return (
    <div className={SocialButtonClasses} {...restProps}>
      <div className='relative flex gap-[12px]'>
        <Link href={link || ''} rel='noreferrer'>
          <span
            className='flex items-center justify-center w-[40px] h-[40px] border rounded-full hover:bg-B-100'
            role='button'
            aria-label='Facebook'>
            <span className='flex'>{icon}</span>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default SocialButton
