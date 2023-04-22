import React, { FC } from 'react'
import CN from 'classnames'
import Image from 'next/image'
import useViewPort from 'utils/useViewport'
export interface SingleServiceItemProps {
  [x: string]: any
  icon?: any
  heading?: string
  description?: string
}

export const SingleServiceItem: FC<SingleServiceItemProps> = ({
  className,
  icon,
  heading,
  description,
  ...restProps
}: SingleServiceItemProps) => {
  const SingleServiceItemClasses = CN(
    `single-service-item w-full flex flex-col items-center gap-[24px] py-[40px] px-[40px] bg-white rounded-[12px]`,
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
        <h3 className='text-h4 text-N-800 font-500'>{heading}</h3>
        <p className='text-base text-center text-N-700 w-[300px]'>{description}</p>
      </div>
    </div>
  )
}

SingleServiceItem.defaultProps = {}

export default SingleServiceItem
