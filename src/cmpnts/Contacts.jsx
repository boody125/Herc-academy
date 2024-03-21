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
                <div 
                  className='bg-secondary rounded-[20px] py-9 px-5
                  min-h-[280px] flex flex-col items-start justify-evenly'>
                {/* <img src={icon} alt="title" className='w-16 h-16 object-contain'/> */}

                  <h3 className='text-black text-[20px] font-bold '>Get in touch</h3>
                  <div className='flex text-black gap-2 text-sm '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mt-1">
                      <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                      <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                    </svg>

                    <a target="_blank" className=' underline'href="mailto:mahmoudramadanrashed339@gmail.com?subject=subject text">mahmoudramadanrashed<br/>339@gmail.com</a>
                  </div>

                  <div className='flex text-black gap-2 text-sm '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
                    </svg>
                    <a target="_blank" className='underline' href="tel:+201203371746">012 0337 1746</a>

                  </div>
                  

              </div>
            </motion.div>
            </div>
            <div className='xs:mx-auto md:ml-0'>
              <motion.div 
                  className=' p-[1px] rounded-[20px] shadow-card green-pink-gradient w-64'
                  variants={fadeIn("right","spring" , 1.5, 0.75)}>
                  <div 
                    className='bg-secondary rounded-[20px] py-9 px-5 
                    min-h-[280px] flex flex-col items-start justify-evenly'>
                  {/* <img src={icon} alt="title" className='w-16 h-16 object-contain'/> */}

                    <h3 className='text-black text-[20px] font-bold '>Social</h3>
                    <span className="flex gap-1 [&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#128c7e] text-sm">
                      
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 448 512">
                       
                        <path
                          d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                      <a target="_blank" className='underline text-black' href="https://wa.me/201203371746">012 0337 1746</a>
                    </span>
                    <span className="flex gap-1 text-sm [&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        
                        <path
                          d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                      </svg>
                      <a target="_blank" className='underline text-black' href="https://www.facebook.com/profile.php?id=61553548413077">Herc MMA Academy </a>
                    </span>

                    
                    <span className="flex gap-1 text-sm [&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                       
                        <path
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                      <a target="_blank" className='underline text-black' href="https://www.instagram.com/herc_academy57?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">@herc_academy57</a>
                    </span>
                    
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