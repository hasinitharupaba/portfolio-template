import React, { FC } from 'react'
import CN from 'classnames'
import Image from 'next/image'
import { Button } from 'components/Button'

export interface ProjectCardProps {
  [x: string]: any
  heading?: string
  description?: string
  image?: string
}

export const ProjectCard: FC<ProjectCardProps> = ({
  className,
  heading,
  description,
  image,
  ...restProps
}: ProjectCardProps) => {
  const ProjectCardClasses = CN(
    `project-card bg-white px-[40px] py-[40px] shadow-card-shadow flex justify-between gap-[80px] items-center rounded-[12px]`,
    className
  )

  return (
    <div className={ProjectCardClasses} {...restProps}>
      <div className='flex flex-col gap-[12px]'>
        <h3 className='text-h3 font-600'>{heading}</h3>
        <p className='text-base font-400 text-N-600'>{description}</p>
        <div className='flex pt-[16px]'>
          <Button
            label='Live demo'
            appearance='primary'
            rightIcon={<i className='ri-arrow-right-up-line text-[20px]' />}
          />
        </div>
      </div>
      <Image
        src={image || ''}
        width={500}
        height={300}
        alt='project image'
        className='object-center object-cover w-[500px] h-[300px] rounded-[12px]'
      />
    </div>
  )
}

ProjectCard.defaultProps = {}

export default ProjectCard
