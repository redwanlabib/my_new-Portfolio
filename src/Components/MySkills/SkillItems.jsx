import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import nextJs from '../../assets/SkillItems/next-js.png'
import vite from '../../assets/SkillItems/vite.png'
import react from '../../assets/SkillItems/react.png'
import tailwind from '../../assets/SkillItems/tailwind.png'
import rb from '../../assets/SkillItems/rb.png'
import bootstrap from '../../assets/SkillItems/bootstrap.png'
import js from '../../assets/SkillItems/js.png'
import css from '../../assets/SkillItems/css.png'
import github from '../../assets/SkillItems/github.png'
import firebase from '../../assets/SkillItems/firebase.png'
import html from '../../assets/SkillItems/html.png'
import vs from '../../assets/SkillItems/vs.png'
import figma from '../../assets/SkillItems/figma.png'

const SkillItems = () => {
  return (
    <div className='bg-black mt- py-5'>
        <Container>
                  <Flex className='justify-between'>
                  <div className='w-10 h-10 hover:drop-shadow-icon rounded-full duration-300 '>
                        <img src={nextJs} alt="" className='w-full h-full border-2 rounded-full'/>

                    </div>
                    <div className='w-10 h-10 hover:drop-shadow-icon rounded-full duration-300'>
                        <img src={vite} alt="" className='w-full h-full'/>
                
                    </div>
                    <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
                        <img src={react} alt="" className='w-full h-full'/>
                    
                    </div>
                    <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
                        <img src={github} alt="" className='w-full h-full'/>

                    </div>
                    <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
                        <img src={firebase} alt="" className='w-full h-full'/>

                    </div>
                    <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
                        <img src={tailwind} alt="" className='w-full h-full'/>

                    </div>
                    <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
                        <img src={rb} alt="" className='w-full h-full'/>

                    </div>
                    <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
                        <img src={bootstrap} alt="" className='w-full h-full'/>

                    </div>
                    <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
                        <img src={js} alt="" className='w-full h-full'/>

                    </div>
                    <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
                        <img src={css} alt="" className='w-full h-full'/>

                    </div>
                    <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
                        <img src={html} alt="" className='w-full h-full'/>

                    </div>
                    <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
                        <img src={vs} alt="" className='w-full h-full'/>

                    </div>
                    <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
                        <img src={figma} alt="" className='w-full h-full'/>

                    </div>
                  </Flex>
        </Container>
    </div>
  )
}

export default SkillItems