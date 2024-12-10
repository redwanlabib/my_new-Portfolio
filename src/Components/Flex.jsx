import React from 'react'

const Flex = ({className,children}) => {
  return (
    <div className={`flex ${className}`}>{children}</div>
  )
}

export default Flex