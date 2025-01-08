import { motion } from 'framer-motion'

import skyscraper from '../static/img/skyscraper.jpg'
import arrow from '../static/img/arrow.png'

import { 
    inscriptionsVars, 
    ScaleBG,
    widthUL } from './../static/motion/welcome';

const AboutSubComp = ({header, title, index, degree}) => {

    return (
        <motion.div
            whileInView='visible'
            initial='initial'
            className="about__section">
            <motion.div 
                variants={inscriptionsVars}
                custom={index}
                className='about__subsection'>
                <div className='about__header'>
                    {header}
                </div>
                <div className='about__box'>
                    <img 
                        src={arrow}
                        alt='arrow'
                        className={'about__arrow ' + degree}
                         />
                    <div className='about__advantages_title'>
                        {title}
                    </div>
                </div>
            </motion.div>
            <motion.div 
                variants={widthUL}
                className='about__underline'></motion.div>
        </motion.div>       
    )
}

const About = ({data}) => {

    
    
    return (
        <div className="about">
            <div className="container">
                <div className="about__container">
                    <div className='about__advantages'>

                        {
                            data.map(el => {
                                return <AboutSubComp 
                                    header={el.header}
                                    title={el.title}
                                    index={el.index}
                                    degree={el.degree}
                                />
                            })
                        }

                    </div>

                    <motion.div 
                        initial='initial'
                        whileInView='visible'
                        variants={inscriptionsVars}

                        className='about__photo_container'>
                        <img
                            
                            src={skyscraper} 
                            alt='skycraper'
                            className='about__skycraper'
                            />
                        <motion.div 
                            custom={2}
                            variants={ScaleBG} 
                            className='about__vector vector_1'></motion.div>

                        <motion.div 
                            custom={4}
                            className='about__vector vector_2'
                            variants={ScaleBG}></motion.div>
                    </motion.div>
                    

                </div>
                
            </div>
            
        </div>
    )
}

export default About