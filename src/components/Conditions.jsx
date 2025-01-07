import { motion } from 'motion/react'

import video from '../static/videos/video.mp4'

import { 
    inscriptionsVars, 
    photosVars,
    ScaleVars } from './../static/motion/welcome';

const Conditions = () => {
    return (
        <div
            
            className="conditions">
            <div className="container">
                <div className="conditions__container">

                <motion.div className="conditions__wrapper">

                
                <motion.div 
                    initial='initial'
                    whileInView='visible'
                    className="condition__section section_1">
                    <motion.h2
                        custom={1}
                        variants={inscriptionsVars}
                        className="conditions__title">
                    Найдем помещение в пару кликов
                    </motion.h2>

                    <motion.div 
                        custom={2}
                        variants={inscriptionsVars}
                        className='conditions__subtitle'>
                        Начинайте бизнес с высоты!
                    </motion.div>
                </motion.div>

                <motion.div 
                    initial='initial'
                    whileInView='visible'
                    className="condition__section section_2">
                <motion.video
                    custom={3}
                    variants={photosVars}
                    src={video} 
                    autoPlay 
                    loop 
                    muted 
                    className='condition__video'
                    />
                <motion.div
                    initial='initial'
                    whileInView='visible' 
                    custom={6}
                    variants={photosVars}
                    className="conditions__inscription sect_2">
                Мы предлагаем продуманный и интуитивно 
                понятный сервис, который позволит вам 
                быстро и эффективно находить необходимые варианты. 
                </motion.div>

                </motion.div>

                <div className="condition__section section_3">

                <motion.div
                    initial='initial'
                    whileInView='visible'
                    custom={8}
                    variants={photosVars}
                    className="conditions__inscription sect_4">
                Нужен офис для новой команды, современный 
                коворкинг в центре города или 
                просторное здание для бизнеса?
                </motion.div>
                
                <motion.div
                    initial='initial'
                    whileInView='visible'
                    variants={ScaleVars}
                    className="conditions__inscription sect_3">
                С нами это пара кликов!
                </motion.div>
                </div>

                </motion.div>

                </div>
            </div>
        </div>  
    )   
}

export default Conditions