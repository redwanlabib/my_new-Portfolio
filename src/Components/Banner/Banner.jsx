import React from 'react';
import Container from '../Container'
import Particle from '../Particle';
import Flex from '../Flex';
import TypeWriter from '../TypeWriter';
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {AiFillInstagram} from 'react-icons/ai'
import Button from '../Button';

const Banner = () => {

  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
    <div className='relative after:w-full after:h-full after:absolute after:left-0 after:top-0 after:z-0 after:bg-black after:opacity-60 bg-BannerImg  bg-no-repeat bg-cover lg:h-screen bg-center' >
    <div><Particle/></div>
   
        <Container>
            <Flex>
            <div className='w-80 lg:w-[550px] pt-24 pb-14 lg:py-48 relative z-10 '>
                <p className='text-sec font-semibold text-sm lg:text-xl font-yellowtail'>Hi, I'm</p>
                <h1 className='text-3xl lg:text-6xl font-semibold text-white py-2'>Redwan Labib</h1>
                <h2 className='text-xl lg:text-3xl font-semibold pb-2 lg:py-2'><span className='text-white '>I'm a </span><TypeWriter className='text-primary inline-block'/></h2>
                <p className=' text-white text-xs lg:text-lg text-justify'>I am a highly passionate, enthusiastic, hardworking and dedicated learner. Self-motivated IT professional with good knowledge and proficiency HTML, CSS, Bootstrap,Tailwind CSS, Javascript, React Js, Vite Js and mobile responsive website development, as well as highly potent skills and ability in encoding virus-free and efficient code. I have a strong passion for the creativity and discipline that goes into front-end development. Keeping in mind scalability and clean code that is maintainable and readable.</p>
                <Flex className='gap-x-4 py-3'>
                  <a href="https://github.com/redwanlabib"> <AiFillGithub className='text-white text-2xl lg:text-4xl hover:scale-110  hover:drop-shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear'/></a>
                  <a href="https://www.linkedin.com/in/redwanul-hassan-labib-522a66212/"><AiFillLinkedin className='text-white text-2xl lg:text-4xl hover:scale-110 hover:drop-shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear'/></a>
                  <a href="https://wa.me/qr/TQMLHGYNVUUZH1"><IoLogoWhatsapp className='text-white text-2xl lg:text-4xl hover:scale-110 hover:drop-shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear'/></a>
                  <a href="https://www.facebook.com/Redwanul.Hasan.Labib"><BiLogoFacebookCircle className='text-white text-2xl lg:text-4xl hover:scale-110  hover:drop-shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear'/></a>
                  <a href="https://www.instagram.com/redwanlabib/"><AiFillInstagram className='text-white text-2xl lg:text-4xl hover:scale-110 hover:drop-shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear'/></a>
            </Flex>
            <button
            className='mt-4 lg:mt-8 px-[20px] lg:px-[40px] py-[6px] lg:py-[12px] text-xs lg:text-lg text-primary font-bold rounded-[5px] lg:rounded-[10px] border lg:border-2 border-primary hover:scale-[.98] hover:shadow-none shadow-[2px_02px_3px_rgba(0,149,180)] lg:shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear' 
            onClick={() => setShowModal(true)}
          
            >
              Hire Me
            </button>    
              <a href="https://drive.google.com/"  target="_blank">
              <Button BtnName='My Resume' className='ml-2 lg:ml-6 lg:mt-8 px-[20px] lg:px-[40px] py-[6px] lg:py-[12px] text-xs lg:text-lg text-primary font-bold rounded-[5px] lg:rounded-[10px] border lg:border-2 border-primary hover:scale-[.98] hover:shadow-none shadow-[2px_02px_3px_rgba(0,149,180)] lg:shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear'/></a>

              {showModal ? (
                <>
                  <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                  >
                    <div className="relative w-[800px]  mt-40 md:my-10 mx-auto">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                        {/*header*/}
                        <div className="bg-[#00181D] flex items-center justify-between py-4 px-5 border-b border-solid border-blueGray-200 rounded-t">
                          <h3 className="text-3xl font-semibold text-white">
                            Hire Me 
                          </h3>
                          <button
                            className="p-1 ml-auto  border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className=" h-6 w-6 font-bold text-3xl text-white">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative  flex-auto bg-ContactBg opacity-90 rounded-b">
                          <div className='w-full  mx-auto text-center py-10 bg-[#000000b0]  rounded-[10px] relative z-[1]  '>
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
                            <button
                                className='py-3 px-20 md:px-[100px] text-xl font-bold border-2 border-primary bg-primary hover:bg-transparent  duration-300 ease-linear rounded-[10px] text-white mt-10 mb-5'   
                                onClick={() => setShowModal(false)}>
                                send message
                            </button>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}

            </div>
          {/* <div className='absolute right-10 bottom-20'>
            <img src={BGD} alt="" className='h-[500px] w-[500px]'/>
          </div> */}
          </Flex>

      </Container>
    </div>
    </>
  )
}

export default Banner