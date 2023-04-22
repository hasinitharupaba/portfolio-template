import React, { FC, useEffect, useState } from 'react'
import CN from 'classnames'

export interface DropdownMenuProps {
  [x: string]: any
}

export const DropdownMenu: FC<DropdownMenuProps> = ({
  className,
  list,
  disabled,
  isError,
  placeholder,
  label,
  name,
  required,
  ...restProps
}: DropdownMenuProps) => {
  const DropdownMenuClasses = CN(
    `dropdown-menu bg-white border rounded-[4px] border-N-100 outline-none focus-within:border-B-400 focus-within:shadow-[inset_0px_0px_0px_1px_#A3B9DC] h-[38px] flex items-center relative z-[1]`,
    className,
    {
      'mt-[28px]': label,
    },
    className
  )

  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    setMenuItems(list)
  }, [list])

  return (
    <div className={DropdownMenuClasses} {...restProps}>
      {label && (
        <label
          className={CN(
            'text-field__label absolute top-[-28px] left-[-2px] z-10 !text-md font-500 text-N-600 after:absolute after:left-0 after:right-0 after:bottom-[2px] after:z-[0] after:h-[9px] after:content-[""]',
            {
              // 'after:bg-white': !disabled,
              // 'after:bg-N-50': disabled,
            }
          )}
          htmlFor={name}>
          <span className='relative z-[1]'>
            {label} {required && <span className='text-B-400'>*</span>}
          </span>
        </label>
      )}

      <select
        {...restProps}
        className='relative z-[1] h-full w-full appearance-none rounded-[4px] bg-transparent px-[16px] text-base outline-none'
        disabled={disabled}>
        <option value=''>{placeholder || `Filter by shoot type`}</option>
        {(menuItems || []).map((value: any, index: number) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>

      <i className='ri-arrow-down-s-line absolute right-[0] z-[0] px-[16px]' />
    </div>
  )
}

DropdownMenu.defaultProps = {}

export default DropdownMenu
