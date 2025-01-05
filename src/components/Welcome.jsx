import bj from '../static/img/bg.jpg'
import welcome_1 from '../static/img/welcome/welcome_1.jpg'
import welcome_2 from '../static/img/welcome/welcome_2.jpg'
import welcome_3 from '../static/img/welcome/welcome_3.jpg'
import arrow_down from '../static/img/arrow_down.png'

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
            <div className='welcome__container'>
                
                <div className='container'>

                    <div className='welcome__wrapper'>

                        <h1 className='welcome__title'>
                            Аренда офисных помещений в 
                            крупнейших БЦ Москвы
                        </h1>

                        <h2 className='welcome__subtitle'>
                            Подберите уютный офис для всей команды
                        </h2>

                        <button className='welcome__btn'>
                            ПОДОБРАТЬ ОФИС
                        </button>
                        
                        <img 
                                src={welcome_1} 
                                alt='welcome pht' 
                                className='welcome__photo first' />
                        <img 
                            src={welcome_2} 
                            alt='welcome pht' 
                            className='welcome__photo second' />
                        <img 
                            src={welcome_3} 
                            alt='welcome pht' 
                            className='welcome__photo third' />

                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Welcome