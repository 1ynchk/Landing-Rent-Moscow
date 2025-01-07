import { motion } from 'framer-motion'

import skyscraper from '../static/img/skyscraper.jpg'
import arrow from '../static/img/arrow.png'

import { 
    inscriptionsVars, 
    ScaleBG,
    widthUL } from './../static/motion/welcome';

const About = () => {
    return (
        <div className="about">

            <div className="container">

                <div className="about__container">

                    <div className='about__advantages'>

                        <motion.div
                            whileInView='visible'
                            initial='initial'
                            className="about__section">
                            <motion.div 
                                variants={inscriptionsVars}
                                custom={1}
                                className='about__subsection'>
                                <div className='about__header'>
                                    10 лет
                                </div>
                                <div className='about__box'>
                                    <img 
                                        src={arrow}
                                        alt='arrow'
                                        className='about__arrow fv_degree'
                                         />

                                    <div className='about__advantages_title'>
                                        реализуем любые нестандартные решения
                                    </div>
                                </div>
                            </motion.div>
                                
                                
                            <motion.div 
                                variants={widthUL}
                                className='about__underline'></motion.div>
                        </motion.div>

                        <motion.div 
                            whileInView='visible'
                            initial='initial'
                            className="about__section">
                            <motion.div 
                                variants={inscriptionsVars}
                                custom={2}
                                className='about__subsection'>
                                <div className='about__header'>
                                    на 20%
                                </div>
                                <div className='about__box'>
                                    <img 
                                        src={arrow}
                                        alt='arrow'
                                        className='about__arrow'
                                         />

                                    <div className='about__advantages_title'>
                                        наши цены ниже рыночной цены
                                    </div>
                                </div>
                            </motion.div>
                                
                                
                            <motion.div 
                                variants={widthUL}
                                className='about__underline'></motion.div>
                        </motion.div>

                        <motion.div 
                            whileInView='visible'
                            initial='initial'
                            className="about__section">
                            <motion.div 
                                variants={inscriptionsVars}
                                custom={3}
                                className='about__subsection'>
                                <div className='about__header'>
                                    &gt; 1000 
                                </div>
                                <div className='about__box'>
                                    <img 
                                        src={arrow}
                                        alt='arrow'
                                        className='about__arrow mfv_degree'
                                         />

                                    <div className='about__advantages_title'>
                                        довольных клиентов пользуются нашими услугами
                                    </div>
                                </div>
                            </motion.div>
                                
                                
                            <motion.div 
                                variants={widthUL}
                                className='about__underline'></motion.div>
                        </motion.div>

                        <motion.div 
                            whileInView='visible'
                            initial='initial'
                            className="about__section">
                            <motion.div 
                                variants={inscriptionsVars}
                                custom={4}
                                className='about__subsection'>
                                <div className='about__header'>
                                    100%
                                </div>
                                <div className='about__box'>
                                    <img 
                                        src={arrow}
                                        alt='arrow'
                                        className='about__arrow nt_degree'
                                         />

                                    <div className='about__advantages_title'>
                                        качество и соблюдение договоренности по проекту
                                    </div>
                                </div>
                            </motion.div>
                                
                                
                            <motion.div 
                                variants={widthUL}
                                className='about__underline'></motion.div>
                        </motion.div>

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