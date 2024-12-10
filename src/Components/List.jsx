import React from 'react'

const List = ({ className, children}) => {
  return (
    <ul className={className}>{children}</ul>
  )
}

export default List