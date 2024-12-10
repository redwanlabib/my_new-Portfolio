import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../index.css'
import Project from './Project'
import Heading from '../Heading'
import Container from '../Container'
import ecommerce from '../../assets/projects/Ecommerce.png'
import avada from '../../assets/projects/avada.png'
import finsweet from '../../assets/projects/Finsweet.png'
import PDFTool from '../../assets/projects/PDFTools.png'
import Innovate from '../../assets/projects/innovate.png'
import Qurier from '../../assets/projects/qurierbox.png'
import Finix from '../../assets/projects/Finix.png'
import Sublime from '../../assets/projects/Sublime.png'
import {FaAngleRight} from 'react-icons/fa'
import {FaAngleLeft} from 'react-icons/fa'




const Projects = () => {

  function SampleNextArrow(props) {
    const {onClick} = props;
    return (
      <div className='absolute top-[44%] -right-2 lg:right-[-30px] hover:bg-primary text-white hover:text-black w-10 h-10 rounded-full flex justify-center items-center font-bold text-xl  border-2 hover:border-none'  onClick={onClick}>
        <FaAngleRight/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className='absolute top-[44%] -left-2 lg:left-[-30px] hover:bg-white text-white hover:text-black w-10 h-10 
      rounded-full flex justify-center items-center font-bold text-xl  border-2 hover:border-none z-10'  onClick={onClick}>
      <FaAngleLeft/>
    </div>
    );
  }

    const settings = {
        className: '',
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
   
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='bg-ProjectBg bg-no-repeat bg-cover bg-center bg-fixed after:content[""] after:bg-black after:absolute after:top-0 after:w-full after:h-full after:opacity-80  relative z-20 py-20 '>
        <Heading Headerp1='My Projects '/>
       <Container>
       <div className='relative z-10 py-10'>
        <Slider {...settings}>
          
            <div>
                <Project ImgSrc={ecommerce} CodeSrc="https://github.com/redwanlabib"  liveSrc='https://github.com/redwanlabib' PName='Orebi E commerce'/>
            </div> 
            <div>
                <Project ImgSrc={avada} CodeSrc='https://github.com/redwanlabib' liveSrc='https://github.com/redwanlabib' PName='Avada Extreme Sports'/>
            </div>  
            <div>
               <Project ImgSrc={PDFTool} CodeSrc='https://github.com/redwanlabib' liveSrc='https://github.com/redwanlabib' PName='PDF Tools'/>  
            </div>    
            <div>
                <Project ImgSrc={finsweet} CodeSrc='https://github.com/redwanlabib' liveSrc='https://github.com/redwanlabib' PName='Finsweet'/>
            </div> 
            <div>
                <Project ImgSrc={Qurier} CodeSrc='https://github.com/redwanlabib' liveSrc='https://github.com/redwanlabib' PName='Qurier Box'/>
            </div> 
            <div>
                <Project ImgSrc={Innovate} CodeSrc='https://github.com/redwanlabib' liveSrc='https://github.com/redwanlabib' PName='Innovate'/>
            </div>
            <div>
                <Project ImgSrc={Finix} CodeSrc="https://github.com/redwanlabib"  liveSrc='https://github.com/redwanlabib' PName='Finix'/>
            </div> 
            <div>
                <Project ImgSrc={Sublime} CodeSrc='https://github.com/redwanlabib' liveSrc='https://github.com/redwanlabib' PName='Sublime'/>
            </div>  
            <div>
                <Project ImgSrc={ecommerce} CodeSrc="https://github.com/redwanlabib"  liveSrc='https://github.com/redwanlabib' PName='Orebi E commerce'/>
            </div>  
           
           
        </Slider>
      </div>
    </Container>
    </div>
  )
}

export default Projects