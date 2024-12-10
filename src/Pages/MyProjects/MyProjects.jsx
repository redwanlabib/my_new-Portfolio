import React from 'react'
import Container from '../../Components/Container'
import Flex from '../../Components/Flex'
import Project from '../../Components/Projects/Project'
import Heading from '../../Components/Heading'
import ecommerce from '../../assets/projects/Ecommerce.png'
import avada from '../../assets/projects/avada.png'
import finsweet from '../../assets/projects/Finsweet.png'
import PDFTool from '../../assets/projects/PDFTools.png'
import Innovate from '../../assets/projects/innovate.png'
import Qurier from '../../assets/projects/qurierbox.png'
import Finix from '../../assets/projects/Finix.png'
import Sublime from '../../assets/projects/Sublime.png'

const MyProjects = () => {
  return (
    <div className='bg-ProjectBg bg-cover bg-fixed relative after:absolute after:top-0 after:left-0  after:bg-black after:w-full after:h-full  after:opacity-90 pt-10 lg:pt-20 pb-64 '> 
        <Container>
        <Heading Headerp1='My Projects' className='mb-10'/>
            <Flex className='flex-wrap gap-x-16 gap-y-10 justify-center relative z-[1]'>
            <div>
                <Project ImgSrc={ecommerc} CodeSrc="https://github.com//E-comrce"  liveSrc='https://ore.netlify.app/' PName='Oi E cerce'/>
            </div> 
            <div>
                <Project ImgSrc={avada} CodeSrc='https://github.com//Extreme-Sports' liveSrc='https://exspo.netlify.app/' PName='Avada Extreme Sports'/>
            </div>  
            <div>
               <Project ImgSrc={PDFTool} CodeSrc='https://github.com//PDF-TOOLS' liveSrc='https://pdftoompledesign.netlify.app/' PName='PDools'/>  
            </div>    
            <div>
                <Project ImgSrc={finsweet} CodeSrc='https://github.com//finsweet' liveSrc='https://digho.github.io/finsweet/' PName='Finsweet'/>
            </div> 
            <div>
                <Project ImgSrc={Qurier} CodeSrc='https://github.com//QuriarBox' liveSrc='https://quriox.netlify.app/' PName='Qurier Box'/>
            </div> 
            <div>
                <Project ImgSrc={Innovate} CodeSrc='https://github.com//innovate' liveSrc='https://digholn.github.io/innovate/' PName='Innovate'/>
            </div>
            <div>
                <Project ImgSrc={Finix} CodeSrc="https://github.com//finix"  liveSrc='https://d.github.io/finix/#' PName='Finix'/>
            </div> 
            <div>
                <Project ImgSrc={Sublime} CodeSrc='https://github.com//Extreme-Sports' liveSrc='https://eorts.netlify.app/' PName='Sublime'/>
            </div>  
            <div>
                <Project ImgSrc={ecommerce} CodeSrc="https://github.com//E-commerce"  liveSrc='https://orecrce.netlify.app/' PName='Orebi E commerce'/>
            </div>   
            </Flex>
        </Container>
    </div>
  )
}

export default MyProjects