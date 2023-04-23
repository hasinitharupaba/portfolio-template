import React, { FC } from 'react'
import CN from 'classnames'

export interface ButtonProps {
  [x: string]: any
  appearance?: 'link' | 'primary' | 'active'
  height?: number | string
  label?: string
  leftIcon?: any
  rightIcon?: any
  width?: number | string
}

export const Button: FC<ButtonProps> = ({
  appearance,
  className,
  height,
  label,
  leftIcon,
  rightIcon,
  width,
  ...restProps
}: ButtonProps) => {
  const ButtonClasses = CN(
    'button cursor-pointer flex items-center gap-[12px] h-[40px]',
    {
      'bg-B-400 text-white py-[12px] px-[24px] rounded-full text-h4 font-700 font-heading hover:text-white hover:bg-N-800 text-center':
        appearance === 'primary',
      'px-[48px] pt-[12px] pb-[10px] rounded-[4px] text-h6 font-heading text-white bg-N-800 text-center':
        appearance === 'active',
      'text-h4 font-heading text-N-800 font-600 hover:text-B-500': appearance === 'link',
    },
    className
  )

  return (
    <div className={ButtonClasses} {...restProps}>
      {leftIcon && <div className='inline-flex'>{leftIcon}</div>}

      <p className='leading-4 font-500'>{label}</p>

      {rightIcon && <div className='inline-flex'>{rightIcon}</div>}
    </div>
  )
}

Button.defaultProps = {}

export default Button
