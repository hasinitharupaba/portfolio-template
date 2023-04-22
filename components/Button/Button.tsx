import React, { FC } from 'react'
import CN from 'classnames'

export interface ButtonProps {
  [x: string]: any
  rightIcon?: any
  leftIcon?: any
  width?: number | string
  height?: number | string
  label?: string
  appearance?: 'link' | 'primary' | 'active'
}

export const Button: FC<ButtonProps> = ({
  className,
  appearance,
  rightIcon,
  leftIcon,
  width,
  height,
  label,
  ...restProps
}: ButtonProps) => {
  const ButtonClasses = CN(
    'button cursor-pointer w-full',
    {
      'border border-B-600 px-[48px] pt-[12px] pb-[10px] rounded-[4px] text-h6 font-heading text-N-600 hover:text-white hover:bg-N-800 text-center':
        appearance === 'primary',
      'px-[48px] pt-[12px] pb-[10px] rounded-[4px] text-h6 font-heading text-white bg-N-800 text-center':
        appearance === 'active',
      'text-h6 font-heading text-N-600 font-600 hover:text-N-800': appearance === 'link',
    },
    className
  )

  return (
    <div className={ButtonClasses} {...restProps}>
      {leftIcon && <div className='inline-flex'>{leftIcon}</div>}

      <p className='leading-4 font-600 uppercase'>{label}</p>

      {rightIcon && <div className='inline-flex'>{rightIcon}</div>}
    </div>
  )
}

Button.defaultProps = {}

export default Button
