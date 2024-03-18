import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../style'
import { SectionWrapper } from '../hoc'
import {GloveCanvas } from './canvas'
import {fadeIn,textVariant } from '../utils/motion'


const Hero = () => {
  return (
    
      <div className={
        `${styles.paddingX}  max-w-7xl 
      flex lg:flex-row items-start sm:flex-col 
      xs:flex-col text-center justify-center `}>
        
        <motion.div className='mr-2' variants={fadeIn("right","spring" , 0.5* 1, 0.75)}>
            <h1 className={`${styles.heroHeadText} text-white `}>
              <span className='text-white'>Welcome <br /> to</span>
              <br />
              <span className='text-[#FFB000]'>HERC ACADEMY</span>
              
              
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white text-[17px]`}> soar to new heights
              <br className='sm:block hidden' />martial arts fitness academy
            </p>
            

        </motion.div>
        <motion.div  variants={textVariant()} className=' lg:ml-10 lg:mt-28 h-72'>
          <GloveCanvas/>
        </motion.div>
        
        {/* <motion.div  variants={textVariant()} className='flex lg:ml-6 fixed w-64 h-96 right-20'>
          <img src="/src/assets/cly.png" alt="" className='rounded-lg object-cover'/>
        </motion.div> */}
      </div>

      
      
    
  )
}

export default  SectionWrapper(Hero, "Hero")
