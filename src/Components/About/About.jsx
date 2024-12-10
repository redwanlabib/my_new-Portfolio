import React from 'react'
import Container from '../Container'
import Img from '../../assets/ImgShapes/3.png'
import TypeWriter from '../TypeWriter'
import Heading from '../Heading'

const About = () => {
  return (
    <div className=' bg-[#000] py-10 lg:py-20'>    
      <Container className='relative z-20'>
          <Heading Headerp1='About' Headerp2='Me'></Heading>
          <div className='mx-auto '>
            <img src={Img} alt="" className='relative mx-auto p-2  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  z-[1]  hover:scale-105 drop-shadow-[0_04px_10px_rgba(0,149,180)] duration-200 ease-linear'/>
          </div>
          <div className='text-center'>
          <p className='text-xs lg:text-lg text-white pt-8'>Hello  I'm</p>
          <h1 className=' text-primary text-3xl lg:text-5xl font-semibold pt-2'>Redwan Labib</h1>
          <h1 className='text-white text-sm lg:text-lg pt-2 lg:pt-4'>Im  a professional <span className='inline-block text-sec font-medium text-xl lg:text-2xl'><TypeWriter/></span></h1>
          <p className='mx-auto text-white text-xs lg:text-lg font-IBM w-full lg:w-[800px] mt-5 lg:mt-10 text-justify'>I am a Student of computer science and im also a student of creative it institute. I'm highly passionate, enthusiastic, hardworking and dedicated learner.I have good knowledge of web programming languages, im a Self-motivated IT professional with good knowledge and proficiency <span className='text-primary'> HTML, CSS, Bootstrap, Tailwind CSS, Javascript, React JS, Vite JS</span> and mobile responsive website development. The use of tools are <span className='text-primary'>VScode, GitHub, Firebase, Versal, Netlify, Figma</span> as well as highly potent skills and ability in encoding virus-free and efficient code. I have a strong passion for the creativity and discipline that goes into Front-end development.Keeping in mind scalability and clean code that is maintainable and readable. If you are looking a complete service then feel free to contact me. I believe my abilites would be perfect for your projects. I am ready to translate my skill sets to your projects. I am always ready to finish this job within the necessary time frame. I am very responsible for my duty. <span className='text-primary'>Thank You.</span></p>
          </div>
       </Container>
    </div>
  )
}

export default About