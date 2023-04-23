import React, { FC } from 'react'
import CN from 'classnames'
import Image from 'next/image'

export interface ContactCardProps {
  [x: string]: any
  icon?: any
  heading?: string
  description?: string
  link?: string
}

export const ContactCard: FC<ContactCardProps> = ({
  className,
  icon,
  heading,
  description,
  link,
  ...restProps
}: ContactCardProps) => {
  const ContactCardClasses = CN(
    `contact-card flex flex-col items-center gap-[24px] py-[40px] px-[40px] bg-white rounded-[12px] shadow-card-shadow w-full`,
    className
  )

  return (
    <div className={ContactCardClasses} {...restProps}>
      <div className='bg-B-400 rounded-full py-[16px] px-[16px]'>
        <div className='w-[40px] h-[40px] flex items-center justify-center'>
          <span className='text-[32px] text-white'>{icon}</span>
        </div>
      </div>
      <div className='flex flex-col items-center gap-[8px]'>
        <h3 className='text-h4 text-N-800 font-500 text-center'>{heading}</h3>
        <a href={link}>
          <p className='text-base text-center text-N-700 lg:w-[300px] hover:text-B-500'>
            {description}
          </p>
        </a>
      </div>
    </div>
  )
}

export default ContactCard
