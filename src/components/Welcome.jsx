import { motion } from 'framer-motion'

import bj from '../static/img/bg.jpg'
import welcome_1 from '../static/img/welcome/welcome_1.jpg'
import welcome_2 from '../static/img/welcome/welcome_2.jpg'
import welcome_3 from '../static/img/welcome/welcome_3.jpg'
import arrow_down from '../static/img/arrow_down.png'

import { photosVars, inscriptionsVars } from './../static/motion/welcome';

const Welcome = () => {

    return (
        <div className="welcome">
            <img 
                src={bj} 
                className='welcome__bg' 
                alt='bj' />

            <img
                id='arrow'
                src={arrow_down}
                className='welcome__arrow'
                alt='slide down'
                />
            <motion.div
                initial='initial'
                whileInView='visible'
                className='welcome__container'>
                
                <div className='container'>

                    <div className='welcome__wrapper'>

                        <motion.h1
                            custom={1}
                            variants={inscriptionsVars} 
                            className='welcome__title'>
                            Аренда офисных помещений в 
                            крупнейших БЦ Москвы
                        </motion.h1>

                        <motion.h2 
                            custom={2}
                            variants={inscriptionsVars} 
                            className='welcome__subtitle'>
                            Подберите уютный офис для всей команды
                        </motion.h2>

                        <motion.button
                            custom={3}
                            variants={inscriptionsVars}
                            className='welcome__btn'>
                            ПОДОБРАТЬ ОФИС
                        </motion.button>
                        
                        <motion.img
                            custom={3}
                            variants={photosVars}
                            src={welcome_1} 
                            alt='welcome pht' 
                            className='welcome__photo first' />
                        <motion.img
                            custom={5}
                            variants={photosVars}
                            src={welcome_2} 
                            alt='welcome pht' 
                            className='welcome__photo second' />
                        <motion.img 
                            custom={1}
                            variants={photosVars}
                            src={welcome_3} 
                            alt='welcome pht' 
                            className='welcome__photo third' />

                    </div>

                </div>
                
            </motion.div>
        </div>
    )
}

export default Welcome