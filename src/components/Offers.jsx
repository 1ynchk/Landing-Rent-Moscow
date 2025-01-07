import { motion } from 'framer-motion'

import person from '../static/img/offers/person.png'
import offers from '../static/img/offers/offers.png'
import transparency from '../static/img/offers/transparency.png'

import { photosVars } from './../static/motion/welcome';

const Offers = () => {
    return (
        <div className="offers">

            <div className="container">

                <div className="offers__container">

                    <motion.div
                        initial='initial'
                        whileInView='visible'
                        className="offers__title_wrapper">
                        <motion.h2 
                            variants={photosVars}
                            className="offers__title">
                                Наши условия и достоинства
                        </motion.h2>
                    </motion.div>

                    <div className='offers__wrapper'>

                    <motion.div
                        custom={1}
                        variants={photosVars}
                        initial='initial'
                        whileInView='visible'
                        className="offers__section">
                        <img src={offers} alt='offer' className='offers__photo' />
                        <div className='offers__subtitle'>Гибкость сроков аренды</div>
                        <div className='offers__inscription'>
                            От краткосрочных до долгосрочных контрактов, 
                            учитывающих потребности вашего бизнеса.
                        </div>
                    </motion.div>

                    <motion.div
                        custom={2} 
                        variants={photosVars}
                        initial='initial'
                        whileInView='visible'
                        className="offers__section">
                        <img src={person} alt='offer' className='offers__photo' />
                        <div className='offers__subtitle'>Персонализированные условия</div>
                        <div className='offers__inscription'>
                        Возможность адаптации офисных помещений 
                        под уникальные требования вашей компании.
                        </div>
                    </motion.div>

                    <motion.div
                        custom={3} 
                        variants={photosVars}
                        initial='initial'
                        whileInView='visible'
                        className="offers__section">
                        <img src={transparency} alt='offer' className='offers__photo' />
                        <div className='offers__subtitle'>Прозрачность и удобство</div>
                        <div className='offers__inscription'>
                        Отсутствие скрытых платежей и максимальная 
                        простота в процессе заключения договора.
                        </div>
                    </motion.div>

                    </div>

                </div>
                
            </div>

        </div>
    )
}

export default Offers