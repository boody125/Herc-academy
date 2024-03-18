import React from 'react'
import {motion} from 'framer-motion'
import { Tilt } from 'react-tilt'
import {styles} from '../style'
import {services} from '../constants' 
import { SectionWrapper } from '../hoc'
import {fadeIn,textVariant } from '../utils/motion'



function Program() {
  return (
    <>
     
            <motion.div variants={textVariant()}>
                
                <h2 className={styles.sectionHeadText}>Program</h2>
            </motion.div>
            

            <div className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
            >
                
                <motion.p variants={fadeIn(" " ," " ,0.1 ,1)} className={`${styles.sectionSubText} mt-8 mb-3 text-[#FFB000]`}> Ready for Battle ?</motion.p>
                <div className='flex lg:flex-row sm:flex-col 
                xs:flex-col gap-24'>
                    <motion.p variants={fadeIn(" " ," " ,0.3 ,1)} className=''>Take Boxing or Kickboxing conditioning to Fight Fit and Daily Ultimate 
                        Training (HIIT) to immerse yourself in invigorating workout.
                        Tailored to benefit all ages and athletic abilities.
                        Come try and see what it is all about.</motion.p>
                    <motion.div variants={fadeIn(" " ," " ,0.5 ,1)} className='flex w-full '>
                        <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1667493127440401%2F&show_text=false&width=267&t=0" 
                        width="232" height="412" scrolling='no' className="border mx-auto border-stone-950 rounded-md overflow-hidden"  
                        
                        ></iframe>
                    </motion.div>
                    
                </div>
                <motion.p variants={fadeIn(" " ," " ,0.7 ,1)} className={`mt-8 mb-3 text-[#FFB000] ${styles.sectionSubText} `}> Yestarday kids are today's wariors. </motion.p>
                <div className='flex lg:flex-row sm:flex-col 
                xs:flex-col gap-24 '>
                    
                    <motion.p variants={fadeIn(" " ," " ,0.9 ,1)} className=''>Take Boxing or Kickboxing conditioning to Fight Fit and Daily Ultimate 
                        Training (HIIT) to immerse yourself in invigorating workout.
                        Tailored to benefit all ages and athletic abilities.
                        Come try and see what it is all about.</motion.p>
                        <motion.div variants={fadeIn(" " ," " ,1.1 ,1)} className='flex w-full'>
                            <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1011731529913469%2F&show_text=false&width=267&t=0" 
                            width="232" height="412" className="border mx-auto border-stone-950 rounded-md overflow-hidden"   
                            scrolling="no" allowfullscreen="true" ></iframe>
                        </motion.div>
                       
                </div>

                <motion.p variants={fadeIn(" " ," " ,1.3 ,1)} className={`mt-8 mb-3 text-[#FFB000] ${styles.sectionSubText} `}> Change your life today. </motion.p>
                <div className='flex lg:flex-row sm:flex-col 
                xs:flex-col gap-24 '>
                    
                    <motion.p variants={fadeIn(" " ," " ,1.5 ,1)} className=''>Take Boxing or Kickboxing conditioning to Fight Fit and Daily Ultimate 
                        Training (HIIT) to immerse yourself in invigorating workout.
                        Tailored to benefit all ages and athletic abilities.
                        Come try and see what it is all about.</motion.p>
                        <motion.div variants={fadeIn(" " ," " ,1.7 ,1)} className='flex w-full'>
                            <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F61553548413077%2Fvideos%2F707125208059288%2F&show_text=false&width=267&t=0" 
                            width="232" height="412" className="border mx-auto border-stone-950 rounded-md overflow-hidden"   
                            scrolling="no" allowfullscreen="true" ></iframe>
                        </motion.div>
                       
                       
                </div>
            </div>
            
  

    </>
    
  )
}

export default SectionWrapper(Program,'program')