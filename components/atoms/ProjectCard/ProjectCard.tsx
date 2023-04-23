import React, { FC } from 'react'
import CN from 'classnames'
import Image from 'next/image'
import { Button } from 'components/Button'
import Link from 'next/link'

export interface ProjectCardProps {
  [x: string]: any
  description?: string
  heading?: string
  image?: string
  link?: string
}

export const ProjectCard: FC<ProjectCardProps> = ({
  className,
  description,
  heading,
  image,
  link,
  ...restProps
}: ProjectCardProps) => {
  const ProjectCardClasses = CN(
    `project-card bg-white px-[24px] py-[24px] md:px-[40px] md:py-[40px] shadow-card-shadow flex flex-col-reverse lg:flex-row justify-between gap-[24px] lg:gap-[80px] items-center rounded-[12px]`,

    className
  )

  return (
    <div className={ProjectCardClasses} {...restProps}>
      <div className='flex flex-col gap-[8px] md:gap-[12px]'>
        <h3 className='text-h3 font-600'>{heading}</h3>
        <p className='text-base font-400 text-N-600'>{description}</p>
        <div className='flex md:pt-[16px]'>
          <Link href={link || ''}>
            <Button
              label='Live demo'
              appearance='primary'
              rightIcon={<i className='ri-arrow-right-up-line text-[20px]' />}
            />
          </Link>
        </div>
      </div>
      <Image
        src={image || ''}
        width={500}
        height={300}
        alt='project image'
        className='object-center object-cover w-full lg:w-[500px] h-[300px] rounded-[12px]'
      />
    </div>
  )
}

export default ProjectCard
