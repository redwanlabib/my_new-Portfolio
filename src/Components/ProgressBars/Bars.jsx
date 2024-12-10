import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

const Bars = ({className,completed}) => {
  return (
    <ProgressBar 
    className={className}
    completed={completed} 
    maxCompleted={100}
    bgColor='#0095B4'
    height='25px'
    borderRadius='30px'
    animateOnRender= 'false'
    transitionDuration='2s'
    />
  )
}

export default Bars