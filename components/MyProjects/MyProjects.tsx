import React, { FC } from 'react'
import CN from 'classnames'
import Image from 'next/image'
import { ProjectCard } from 'components/atoms/ProjectCard'

export interface MyProjectsProps {
  [x: string]: any
}

export const MyProjects: FC<MyProjectsProps> = ({ className, ...restProps }: MyProjectsProps) => {
  const MyProjectsClasses = CN(
    `my-projects container pt-[12px] pb-[24px] md:py-[60px] flex flex-col gap-[24px] md:gap-[40px]`,
    className
  )

  return (
    <div className={MyProjectsClasses} {...restProps}>
      <h2 className='text-h2 md:text-display-md font-700 font-heading text-center md:text-left'>Featured projects</h2>
      <div className='flex flex-col gap-[24px]'>
        <ProjectCard
          heading='Fashionista'
          description='A responsive and scalable e-commerce web app for a fashion brand, developed using React
          and Redux. I contributed to the project by designing the user interface, developing the
          front-end, and integrating the app with third-party APIs for payment processing and
          inventory management.'
          image='https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        />
        <ProjectCard
          heading='Health Care'
          description='An online booking system for a healthcare provider, developed using React and Node.js. I played a key role in designing the user experience, developing the front-end, and integrating the app with a custom-built backend for appointment management and scheduling.'
          image='https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        />
      </div>
    </div>
  )
}

MyProjects.defaultProps = {}

export default MyProjects
