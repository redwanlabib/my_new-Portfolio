import React from 'react'

const Container = ({className,children}) => {
  return (
    <div className={`max-w-container px-2.5 py- mx-auto ${className}`}>{children}</div>
  )
}

export default Container