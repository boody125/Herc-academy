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
            <h2 className={styles.sectionHeadText}>Contacts </h2>
        </motion.div>
        

    </div>
  )
}

export default SectionWrapper(Contacts,'contact')