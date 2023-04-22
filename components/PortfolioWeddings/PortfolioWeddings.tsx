import React, { FC } from 'react'
import CN from 'classnames'
import { SingleFeaturedAlbum } from 'components/atoms/SingleFeaturedAlbum'
import Link from 'next/link'

export interface PortfolioWeddingsProps {
  [x: string]: any
}

export const PortfolioWeddings: FC<PortfolioWeddingsProps> = ({
  className,
  data,
  ...restProps
}: PortfolioWeddingsProps) => {
  const PortfolioWeddingsClasses = CN(
    `portfolio-weddings flex flex-col justify-center gap-[24px] md:grid md:grid grid-cols-2 lg:grid-cols-3 lg:gap-[52px]`,
    className
  )

  return (
    <div className={PortfolioWeddingsClasses} {...restProps}>
      {data?.map((item: any, index: number) => {
        return (
          <Link href={`/portfolio/${item?.slug}` || '/portfolio'} key={index}>
            <SingleFeaturedAlbum key={index} {...item} />
          </Link>
        )
      })}
    </div>
  )
}

PortfolioWeddings.defaultProps = {}

export default PortfolioWeddings
