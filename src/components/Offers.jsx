
import person from '../static/img/offers/person.png'
import offers from '../static/img/offers/offers.png'
import transparency from '../static/img/offers/transparency.png'

const Offers = () => {
    return (
        <div className="offers">

            <div className="container">

                <div className="offers__container">

                    <div className="offers__title_wrapper">
                        <h2 className="offers__title">Наши условия и достоинства</h2>
                    </div>

                    <div className='offers__wrapper'>

                    <div className="offers__section">
                        <img src={offers} alt='offer' className='offers__photo' />
                        <div className='offers__subtitle'>Гибкость сроков аренды</div>
                        <div className='offers__inscription'>
                            От краткосрочных до долгосрочных контрактов, 
                            учитывающих потребности вашего бизнеса.
                        </div>
                    </div>

                    <div className="offers__section">
                        <img src={person} alt='offer' className='offers__photo' />
                        <div className='offers__subtitle'>Персонализированные условия</div>
                        <div className='offers__inscription'>
                        Возможность адаптации офисных помещений 
                        под уникальные требования вашей компании.
                        </div>
                    </div>

                    <div className="offers__section">
                        <img src={transparency} alt='offer' className='offers__photo' />
                        <div className='offers__subtitle'>Прозрачность и удобство</div>
                        <div className='offers__inscription'>
                        Отсутствие скрытых платежей и максимальная 
                        простота в процессе заключения договора.
                        </div>
                    </div>

                    </div>

                </div>
                
            </div>

        </div>
    )
}

export default Offers