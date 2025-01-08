
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation } from "swiper/modules";

import { activateReducer } from '../store/PopupSlice';
import { useDispatch } from 'react-redux';

const Galery = ({data}) => {

    const dispatch = useDispatch()

    return (
        <div className='galery'>

            <div className='container'>
                <div className='galery__title'>Галерея</div>
            </div>


            <Swiper
                modules={[Autoplay, Navigation]}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                  }}
                spaceBetween={150}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 3000, 
                    disableOnInteraction: false, 
                  }}
                className='galery__swiper'
            >

                {
                    data.map(el => {
                        return (
                            <SwiperSlide
                                key={el.index}
                                className='galery__slide'
                                onClick={() => 
                                    dispatch(activateReducer('gallery')
                                )}
                                >
                                <div className='galery__photo_container'>
                                    <img 
                                        src={el.image} 
                                        alt='galery' 
                                        className='galery__photo' />
                                </div>
                            </SwiperSlide>
                        ) 
                    })
                }

            </Swiper>

            <div className="custom-prev">&lt;</div>
            <div className="custom-next">&gt;</div>

        </div>
    )
}

export default Galery