import React from 'react'
import Bars from './Bars'
import Flex from '../Flex'
import Container from '../Container'

const ProgressBars = ({className}) => {
  return (
    <div className={className}>
        <Container>
          <div className='grid lg:grid-cols-2 gap-x-8'>

            <div className='pt-8'>
            <p className='text-white  text-base lg:text-lg font-semibold'>HTML</p>
            <Bars completed={95} className='pt-2'></Bars>
            </div>
            <div className='pt-8'>
            <p className='text-white text-base lg:text-lg font-semibold'>CSS</p>
            <Bars completed={90} className='pt-2'></Bars>
            </div>
            <div className='pt-8'>
            <p className='text-white text-base lg:text-lg font-semibold'>Javascript</p>
            <Bars completed={70} className='pt-2'></Bars>
            </div>
            <div className='pt-8'>
            <p className='text-white text-base lg:text-lg font-semibold'>Bootstrap</p>
            <Bars completed={80} className='pt-2'></Bars>
            </div>
            <div className='pt-8'>
            <p className='text-white text-base lg:text-lg font-semibold'>Taiwind CSS</p>
            <Bars completed={85} className='pt-2'></Bars>
            </div>
            <div className='pt-8'>
            <p className='text-white text-base lg:text-lg font-semibold'>React JS</p>
            <Bars completed={70} className='pt-2'></Bars>
            </div>
            <div className='pt-8'>
            <p className='text-white text-base lg:text-lg font-semibold'>VITE JS</p>
            <Bars completed={75} className='pt-2'></Bars>
            </div>
            <div className='pt-8'>
            <p className='text-white text-base lg:text-lg font-semibold'>Next JS</p>
            <Bars completed={50} className='pt-2'></Bars>
            </div>
           
          </div>  
        </Container>
    </div>
  )
}

export default ProgressBars