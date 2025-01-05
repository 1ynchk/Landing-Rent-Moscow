
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
                                        className='about__arrow'
                                         />

                                    <div className='about__advantages_title'>
                                        реализуем любые нестандартные решения
                                    </div>

                                </div>

                            </div>
                            
                        </div>

                    </div>

                    <img 
                        src={skyscraper} 
                        alt='skycraper'
                        className='about__skycraper'
                        />

                </div>
                
            </div>
            
        </div>
    )
}

export default About