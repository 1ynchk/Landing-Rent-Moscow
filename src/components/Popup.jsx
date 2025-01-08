import { motion, AnimatePresence } from 'motion/react';
import { ScaleBG } from '../static/motion/welcome';

import { useDispatch, useSelector } from "react-redux"

import { activateReducer } from "../store/PopupSlice"
import cross from '../static/img/cross.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper/modules";
import 'swiper/css'
import 'swiper/swiper-bundle.css';

const PopupGalery = ({data}) => {

    return (
        <Swiper
            modules={[Navigation]}
            navigation={{
                nextEl: '.popup-next',
                prevEl: '.popup-prev',
              }}
            spaceBetween={100}
            centeredSlides={true}
            loop={true}
            slidesPerView={1}
            grabCursor
            className="popup__galery"
        >
            {
                data.map(el => {
                    return (
                        <SwiperSlide
                            key={el.index}
                            >
                            <div className='popup__photo_container'>
                                <img 
                                    src={el.image} 
                                    alt='galery' 
                                    className='popup__photo' />
                            </div>
                        </SwiperSlide>
                    ) 
                })
            }
        </Swiper>
    )
}

const Proposal = () => {
    return (
        <div className='proposal'>

            <div className='proposal__container'>

            <div className='proposal__title'>Оставить заявку</div>

            <div className='proposal__claim'>Мы ждем именно вас!</div>


                <form className='proposal__form'>

                    <div className='proposal__section'>
                        <div className='proposal__subtitle'>Ваше имя</div>
                        <input className='proposal__input' />
                    </div>

                    <div className='proposal__section'>
                        <div className='proposal__subtitle'>Ваша фамилия</div>
                        <input className='proposal__input' />
                    </div>

                    <div className='proposal__section'>
                        <div className='proposal__subtitle'>Ваше имя</div>
                        <input className='proposal__input' />
                    </div>

                    <div className='proposal__section'>
                        <div className='proposal__subtitle'>Ваше имя</div>
                        <input className='proposal__input' />
                    </div>

                </form>

                <button className='proposal__button'>Отправить</button>

            </div>

        </div>
    )
}

const Popup = ({data}) => {

    const dispatch = useDispatch()
    const active = useSelector(state => state.popup.active)
    const type = useSelector(state => state.popup.type)

    if (!active) {
        return
    } else {
    return (
        <motion.div
            
            className="popup">

            <div 
                onClick={() => dispatch(activateReducer())}
                className="popup__overlay">

                <AnimatePresence>

                    <motion.div
                        initial='initial'
                        animate='visible'
                        variants={ScaleBG}
                        onClick={(event) => event.stopPropagation()}
                        className={"popup__container " + type }>
                        {
                            type == 'gallery' ?  [
                                <PopupGalery data={data} />,
                                <div className="popup-prev">&lt;</div>,
                                <div className="popup-next">&gt;</div>
                            ] : <Proposal/>
                        }
                        
                        <img 
                            onClick={() => dispatch(activateReducer())}
                            src={cross} className={'popup__cross ' + type} alt='cross'/>

                    </motion.div>
                        
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

}

export default Popup