import { motion } from 'framer-motion'

import { photosVars } from './../static/motion/welcome';

const Offer = ({subtitle, inscription, image, index}) => {

    
    return (
        <motion.div
            custom={index}
            variants={photosVars}
            initial='initial'
            whileInView='visible'
            className="offers__section">
            <img src={image} alt='offer' className='offers__photo' />
            <div className='offers__subtitle'>{subtitle}</div>
            <div className='offers__inscription'>
                {inscription}
            </div>
        </motion.div>
    )
}

const Offers = ({data}) => {

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

                    {
                        data.map(el => {
                            return <Offer 
                            subtitle={el.subtitle}
                            inscription={el.inscription}
                            image={el.image}
                            index={el.index}
                            />
                        })
                    }

                    </div>

                </div>
                
            </div>

        </div>
    )
}

export default Offers