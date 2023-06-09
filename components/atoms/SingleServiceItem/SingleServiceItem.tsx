import React, { FC } from 'react'
import CN from 'classnames'
import Image from 'next/image'
export interface SingleServiceItemProps {
  [x: string]: any
  description?: string
  heading?: string
  icon?: any
}

export const SingleServiceItem: FC<SingleServiceItemProps> = ({
  className,
  description,
  heading,
  icon,
  ...restProps
}: SingleServiceItemProps) => {
  const SingleServiceItemClasses = CN(
    `single-service-item w-full flex flex-col items-center gap-[24px] px-[20px] py-[20px] lg:py-[40px] lg:px-[40px] bg-white rounded-[12px]`,
    className
  )

  return (
    <div className={SingleServiceItemClasses} {...restProps}>
      <div className='bg-B-400 rounded-full py-[16px] px-[16px]'>
        <Image
          src={icon || ''}
          width={40}
          height={40}
          alt='service icon'
          className='object-center object-contain w-[40px] h-[40px]'
        />
      </div>
      <div className='flex flex-col items-center gap-[8px]'>
        <h3 className='text-h4 text-N-800 font-500 text-center'>{heading}</h3>
        <p className='text-base text-center text-N-700 lg:w-[300px]'>{description}</p>
      </div>
    </div>
  )
}

export default SingleServiceItem
