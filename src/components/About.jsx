
import skyscraper from '../static/img/skyscraper.jpg'
import arrow from '../static/img/arrow.png'

const About = () => {
    return (
        <div className="about">

            <div className="container">

                <div className="about__container">

                    <div className='about__advantages'>

                        <div className="about__section">
                            <div className='about__subsection'>
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
                            </div>
                            <div className='about__underline'></div>
                        </div>

                        <div className="about__section">
                            <div className='about__subsection'>
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
                            </div>
                            <div className='about__underline'></div>
                        </div>

                        <div className="about__section">
                            <div className='about__subsection'>
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
                            </div>
                            <div className='about__underline'></div>
                        </div>

                        <div className="about__section">
                            <div className='about__subsection'>
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
                            </div>
                            <div className='about__underline'></div>
                        </div>

                    </div>


                    <div className='about__photo_container'>
                        <img 
                            src={skyscraper} 
                            alt='skycraper'
                            className='about__skycraper'
                            />
                        <div className='about__vector vector_1'></div>

                        <div className='about__vector vector_2'></div>
                    </div>
                    

                </div>
                
            </div>
            
        </div>
    )
}

export default About