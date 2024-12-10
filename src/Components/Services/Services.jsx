import React from 'react'
import Box from './Box'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Design from '../../assets/Design.jpg'
import Design2 from '../../assets/Design2.jpg'
import Design3 from '../../assets/Design3.jpg'


const Services = () => {
  return (
    <div className='z-10 pt-10 lg:py-20 lg:pb-32 bg-ServiceImg bg-no-repeat bg-cover bg-center bg-fixed relative after:absolute after:top-0 after:left-0  after:bg-black after:w-full after:h-full after:opacity-80'>
        <Container>
        <Heading Headerp1='My' Headerp2='Services'></Heading>
           <Flex className='flex-wrap gap-y-10 gap-x-16 justify-center pt-10'>
            <Box className='relative z-10' ImgSrc={Design} Title='Responsive Web Design' PItem='i will do responsive web designs. using HTML, CSS, JAVASCRIPT, BOOTSTRAP, using media query. Fully responsive & Pixel perfect Qualityfull designs as you want. '></Box> 
            <Box className='relative z-10' ImgSrc={Design3} Title='Vite+React Aplication' PItem='i will do  Vite + React Aplications, designs. using HTML, CSS, JAVASCRIPT, Tailwind CSS, VIte JS, REACT JS Fully responsive & Pixel perfect Qualityfull designs as you want.  '></Box>
            <Box className='relative z-10' ImgSrc={Design2} Title='Frontend development' PItem='i will do any kind of frontEnd development designs & Aplications. using HTML, CSS, JAVASCRIPT, Tailwind CSS, VIte JS, REACT JS Fully responsive & Pixel perfect Qualityfull designs as you want.'></Box>
           </Flex>
        </Container>
    </div>
  )
}

export default Services