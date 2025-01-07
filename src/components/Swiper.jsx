
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation } from "swiper/modules";

import img_1 from '../static/img/galery/img_1.jpg'
import img_2 from '../static/img/galery/img_2.jpg'
import img_3 from '../static/img/galery/img_3.jpg'
import img_4 from '../static/img/galery/img_4.jpg'
import img_5 from '../static/img/galery/img_5.jpg'

const Galery = () => {
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
                grabCursor
            >

                <SwiperSlide>
                    <div className='galery__photo_container'>
                        <img src={img_1} alt='galery' className='galery__photo' />
                    </div>
                </SwiperSlide>  
                <SwiperSlide>
                    <div className='galery__photo_container'>
                        <img src={img_2} alt='galery' className='galery__photo' />
                    </div>
                </SwiperSlide>  
                <SwiperSlide>
                    <div className='galery__photo_container'>
                        <img src={img_3} alt='galery' className='galery__photo' />
                    </div>
                </SwiperSlide>  
                <SwiperSlide>
                    <div className='galery__photo_container'>
                        <img src={img_4} alt='galery' className='galery__photo' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='galery__photo_container'>
                        <img src={img_5} alt='galery' className='galery__photo' />
                    </div>
                </SwiperSlide>

            </Swiper>

            <div className="custom-prev">&lt;-</div>
            <div className="custom-next">-&gt;</div>

        </div>
    )
}

export default Galery