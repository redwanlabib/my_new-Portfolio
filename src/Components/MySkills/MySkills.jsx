import React from 'react'
import ProgressBars from '../ProgressBars/ProgressBars'
import SkillItems from './SkillItems'
import Img from '../../assets/profile.gif'
import Heading from '../Heading'
import Particle from '../Particle'
import Container from '../Container'

const MySkills = () => {
  return (
    <div className='py-10 lg:py-20 bg-black '>
      <Container className='relative z-20'>
        <Heading Headerp1='My' Headerp2='Skills'></Heading>      
        <ProgressBars className='relative pb-20'/>
        <SkillItems></SkillItems>  
      </Container>
    </div>
  )
}

export default MySkills