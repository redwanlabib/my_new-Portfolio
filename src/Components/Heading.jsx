import React from 'react'

const Heading = ({Headerp1,Headerp2,className}) => {
  return (
    <div className=''>
        <h1 className='relative z-[1] text-2xl lg:text-6xl font-IBM  text-center py-8 lg:py-14 text-white'>{Headerp1}<span className='text-primary'> {Headerp2}</span>
          <div className={` relative h-[3px] w-80 lg:h-[4px] lg:w-[600px] bg-primary mx-auto mt-5 before:content-[""] before:absolute before:top-[-6px] before:left-[-5px] before:rounded-full before:w-4 before:h-4 before:bg-white after:content-[""] after:absolute after:top-[-6px] after:right-[-5px] after:rounded-full after:w-4 after:h-4 after:bg-white ${className} `}/>
        </h1> 
    </div>
  )
}

export default Heading