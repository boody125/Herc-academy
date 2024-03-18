import React from 'react'
import {motion} from 'framer-motion'
import { Tilt } from 'react-tilt'
import {styles} from '../style'
import {services} from '../constants' 
import { SectionWrapper } from '../hoc'
import {fadeIn,textVariant } from '../utils/motion'



const ServiceCard = ({index , title ,icon}) =>{
  return (
    <Tilt className='xs:w-[250px] w-full' >
      <motion.div 
        className='w-full p-[1px] rounded-[20px] shadow-card green-pink-gradient '
        variants={fadeIn("right","spring" , 0.5* index, 0.75)}>
        <div options={{
          max:45,
          scale:1,
          speed: 450
        }}
        className='bg-secondary rounded-[20px] py-5 px-12 
        min-h-[280px] flex flex-col items-center justify-evenly'>
          <img src={icon} alt="title" className='w-16 h-16 object-contain'/>

          <h3 className='text-black text-[20px] font-bold text-center'>{title}</h3>
        </div>
        </motion.div>
    </Tilt>

    
  )
}


function Details() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <div className=''>

      <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn(" " ," " ,0.1 ,1)}>
          Take Boxing or Kickboxing conditioning to Fight Fit and Daily Ultimate 
          Training (HIIT) to immerse yourself in invigorating workout.
          Tailored to benefit all ages and athletic abilities.
          Come try and see what it is all about.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
        
    </div>
    
    </>
    
  )
}

export default SectionWrapper(Details,'Details')