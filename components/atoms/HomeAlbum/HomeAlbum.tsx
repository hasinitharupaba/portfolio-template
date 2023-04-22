import React, { FC } from 'react'
import CN from 'classnames'
import Link from 'next/link'

export interface HomeAlbumProps {
  [x: string]: any
  heading: string
  description?: string
  link?: any
  image?: any
}

export const HomeAlbum: FC<HomeAlbumProps> = ({
  className,
  heading,
  image,
  description,
  link,
  ...restProps
}: HomeAlbumProps) => {
  const HomeAlbumClasses = CN(`home-album w-full`, className)

  return (
    <div className={HomeAlbumClasses} {...restProps}>
      <Link href={link}>
        <div
          className={CN('h-[400px] w-full lg:w-[348px] bg-cover bg-no-repeat rounded-[4px]')}
          style={{ backgroundImage: `url('${image || ''}')` }}>
          <div className='h-full gradient bg-gradient-to-t from-[#000000DE]/60 to-[#00000000] flex flex-col-reverse rounded-[4px]'>
            <div className='flex flex-col items-center justify-end pb-[20px] w-full'>
              <h4 className='text-h4 font-heading font-600 text-white uppercase'>{heading}</h4>
              <p className='text-base text-white'>{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

HomeAlbum.defaultProps = {}

export default HomeAlbum
