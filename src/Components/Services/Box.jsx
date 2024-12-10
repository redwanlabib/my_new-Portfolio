import React from 'react'

const Box = ({className,Title,ImgSrc,PItem}) => {
  return (
    <div>
        <div className={`w-[300px] lg:w-[370px] border-2 border-primary rounded-xl  text-white text-center ${className} relative after:absolute after:top-0 after:left-0  after:bg-black after:w-full after:h-full after:rounded-xl after:opacity-80 hover:scale-105 drop-shadow-[0_04px_5px_rgba(0,149,180)] duration-200 ease-linear z-[1]`}>
        <img src={ImgSrc} alt="" className='h-[250px] w-full relative z-[1] rounded-t-[10px]'/>
           <div className='py-10 px-8'>
            <h1 className='relative z-[1] text-primary text-lg lg:text-xl font-bold pb-4 uppercase '>{Title}</h1>
            <p className='relative z-[1] capitalize text-justify text-xs lg:text-base'>{PItem}</p>
           </div>
        </div>
    </div>
  )
}

export default Box