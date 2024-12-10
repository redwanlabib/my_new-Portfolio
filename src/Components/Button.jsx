import React from 'react'

const Button = ({className,BtnName,Icon,children}) => {
  return (
    <button className={className}>{BtnName}{Icon}{children}</button>
  )
}

export default Button