import React, { FC } from 'react'
import CN from 'classnames'
import Image from 'next/image'
import useViewPort from 'utils/useViewport'
export interface SingleServiceItemProps {
  [x: string]: any
  image?: any
  heading?: string
  description?: string
}

export const SingleServiceItem: FC<SingleServiceItemProps> = ({
  className,
  image,
  heading,
  description,
  ...restProps
}: SingleServiceItemProps) => {
  const SingleServiceItemClasses = CN(
    `single-service-item flex flex-col items-center gap-[12px]`,
    className
  )

  const { isMobile } = useViewPort()

  return (
    <div className={SingleServiceItemClasses} {...restProps}>
      <Image
        src={image}
        width={(isMobile && 80) || 100}
        height={(isMobile && 80) || 100}
        alt='Meliora lifestyle wedding photo'
      />
      <h3 className='text-h4 text-N-600 font-heading font-500 uppercase'>{heading}</h3>
      <p className='text-base text-center text-N-700 w-[300px]'>{description}</p>
    </div>
  )
}

SingleServiceItem.defaultProps = {}

export default SingleServiceItem
