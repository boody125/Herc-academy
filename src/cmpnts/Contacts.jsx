import React from 'react'
import {motion} from 'framer-motion'
import { Tilt } from 'react-tilt'
import {styles} from '../style'
import {services} from '../constants' 
import { SectionWrapper } from '../hoc'
import {fadeIn,textVariant } from '../utils/motion'




function Contacts() {
  return (

    <div>
      
        <motion.div variants={textVariant()}>    
          <h2 className={`${styles.sectionHeadText} mb-12`}>Contacts </h2>
          
          <div className='flex md:flex-row sm:flex-col xs:flex-col sm mb-10 gap-10'>
            
            <div className='xs:mx-auto md:mr-0'>
              <motion.div 
                className=' p-[1px] rounded-[20px] shadow-card green-pink-gradient w-64'
                variants={fadeIn("right","spring" , 0.5, 0.75)}>
                <div options={{
                  max:45,   
                  scale:1,
                  speed: 450
                }}
                  className='bg-secondary rounded-[20px] py-5 px-12 
                  min-h-[280px] flex flex-col items-center justify-evenly'>
                {/* <img src={icon} alt="title" className='w-16 h-16 object-contain'/> */}

                  <h3 className='text-black text-[20px] font-bold '>Get in touch</h3>
              </div>
            </motion.div>
            </div>
            <div className='xs:mx-auto md:ml-0'>
              <motion.div 
                  className=' p-[1px] rounded-[20px] shadow-card green-pink-gradient w-64'
                  variants={fadeIn("right","spring" , 1.5, 0.75)}>
                  <div options={{
                    max:45,   
                    scale:1,
                    speed: 450
                  }}
                    className='bg-secondary rounded-[20px] py-5 px-12 
                    min-h-[280px] flex flex-col items-center justify-evenly'>
                  {/* <img src={icon} alt="title" className='w-16 h-16 object-contain'/> */}

                    <h3 className='text-black text-[20px] font-bold '>Social</h3>
                </div>
              </motion.div>
            </div>
            
          </div>
          <section className="text-white body-font relative">
            <div className="absolute inset-0 bg-gray-300">
            
              <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.465967437449!2d29.9662737!3d31.235521599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c575d04b7b09%3A0xd0ee71cbfef272f7!2sHerc%20MMA%20academy!5e0!3m2!1sen!2seg!4v1710859234221!5m2!1sen!2seg" ></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
              <div className="lg:w-1/3 md:w-1/2 black-gradient rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 className="text-white text-lg mb-1 font-medium title-font">Contact us by mail</h2>
                <p className="leading-relaxed mb-5 text-white">Behind l eza3a street, Al Aqesa WA Baqos, El Raml 1, Alexandria Governorate 5450210</p>
                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
                  <input placeholder='Your Email' type="email"  id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  
                </div>
                <div className="relative mb-4">
                  <label htmlFor="text" className="leading-7 text-sm text-white">Name</label>
                  <input placeholder='Your name' type="text"  id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  
                </div>
                <div className="relative mb-4">
                  <label htmlFor="text" className="leading-7 text-sm text-white">Phone number</label>
                  <input placeholder='017 1234 5678' type='tel'  id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  
                </div>
                <div className="relative mb-4">
                  <label htmlFor="message" className="leading-7 text-sm text-white">Message</label>
                  <textarea placeholder='Your Message' id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
                <p className="text-xs text-gray-500 mt-3">Feel free to contact us any time.</p>
              </div>
            </div>
          </section>
        </motion.div>
        

    </div>
  )
}

export default SectionWrapper(Contacts,'contact')