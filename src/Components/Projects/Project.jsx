import React from 'react'
import Flex from '../Flex'
import {AiFillGithub} from 'react-icons/ai'
import {HiExternalLink} from 'react-icons/hi'



const Project = ({ImgSrc,PName,CodeSrc,liveSrc}) => {
  return (
    <div className=' my-4 drop-shadow-[0_04px_5px_rgba(0,149,180)] duration-200 ease-linear'>
        <div className='w-[300px] lg:w-[370px] overflow-y-hidden group'>
            <div className='relative'>
                <img src={ImgSrc} alt="" className='h-[250px] w-full rounded-t-[10px]'/>
                <div className='bg-black opacity-80 rounded-t-[10px]  h-[110px] absolute bottom-[-250px] group-hover:bottom-0 w-full md:w-[370px] duration-300 pt-6 '>
                      <Flex className='justify-between '>
                      <a href={CodeSrc} target="_blank">
                      <button className='text-white text-lg font-bold pt-4 pl-2 group' ><AiFillGithub className='inline mr-2 text-white text-4xl group-hover:scale-110  group-hover:drop-shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear' />View Codes</button>
                      </a>
                     <a href={liveSrc} target="_blank">
                     <button className='text-white text-lg font-bold pt-4 pr-2 group' ><HiExternalLink className='inline mr-2 text-white text-4xl group-hover:scale-110  group-hover:drop-shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear' />View Live</button>
                     </a>
                      </Flex>
                </div>
            </div>
        </div>
        <div className='relative z-[1] w-[300px] lg:w-[370px] bg-black opacity-80 text-white text-center py-10 px-8 rounded-b-[10px]'>
            <h1 className='text-lg lg:text-xl font-bold text-primary uppercase'>{PName}</h1>
            <p className='text-justify pt-4 text-xs lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, id reprehenderit suscipit mollitia assumenda totam repellat sint reiciendis magni veniam!</p>
        </div>
    </div>
  )
}

export default Project