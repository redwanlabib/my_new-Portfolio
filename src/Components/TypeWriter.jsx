import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TypeWriter = ({className}) => {

  return (
    <div className={className}>
    <Typewriter
        words={['Web Designer','React Developer','Front End Developer']}
        loop={1}
        cursor= 'true'
        cursorStyle='|'
        cursorBlinking='false'
        typeSpeed={100}
        deleteSpeed={80}
        delaySpeed={1500}
        // onLoopDone={handleDone}
        // onType={handleType}

    />
  </div>
  )
}

export default TypeWriter