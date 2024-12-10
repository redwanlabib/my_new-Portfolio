import React from 'react'
import Container from '../../Components/Container';
import Heading from '../Heading';
import Flex from '../Flex';

const Contact = () => {

  return (
    <>
      <div className='bg-ContactBg bg-cover bg-fixed py-10 lg:py-20 relative z-20 after:absolute after:top-0 after:left-0  after:bg-black after:w-full after:h-full  after:opacity-50'>
        <Container>
        <   Heading Headerp1='Contact' Headerp2='Me'/>
            <div className='w-full lg:w-[700px] mx-auto text-center py-20 bg-[#0000009e]  mb-20 mt-10 rounded-[10px] relative z-[1]  '>
              <div>
                <input type="text" placeholder='Your Name' className='py-4 pl-5 pr-28 sm:pr-80 bg-transparent outline-none  hover:outline-primary text-white shadow-[0_0_10px_rgba(0,149,180)] rounded-[8px] mt-6'/>
              </div>
              <div className='sm:flex justify-center  sm:gap-x-5 pt-2'>
                <div>
                  <input type="text" placeholder='Contact Number' className=' py-4 pl-5 pr-28 sm:pr-12 bg-transparent outline-none  hover:outline-primary text-white shadow-[0_0_10px_rgba(0,149,180)] rounded-[8px] mt-6'/>
                </div>
                <div>
                  <input type="text" placeholder='Subject' className=' py-4 pl-5 pr-28 sm:pr-12 bg-transparent outline-none  hover:outline-primary text-white shadow-[0_0_10px_rgba(0,149,180)] rounded-[8px] mt-6'/>
                </div>
              </div>
              <div>
                <input type="Gmail" placeholder='Your Gmail' className='py-4 pl-5 pr-28 sm:pr-80 mt-8 bg-transparent outline-none outline-2 hover:outline-primary text-white shadow-[0_0_10px_rgba(0,149,180)] rounded-[8px]' />
              </div>
              <div>
                <input placeholder='Your message' className='pt-4 pb-28 pr-28 sm:pr-80 pl-5 mt-8 bg-transparent outline-none outline-2 hover:outline-primary text-white shadow-[0_0_10px_rgba(0,149,180)] rounded-[8px]' />
              </div>
              <div>
                <button className='py-3 px-20 md:px-[100px] text-xl font-bold border-2 border-primary bg-primary hover:bg-transparent  duration-300 ease-linear rounded-[10px] text-white mt-10'>Contact</button>
              </div>
            </div>
        </Container>
      </div>
   </>

  )
}

export default Contact