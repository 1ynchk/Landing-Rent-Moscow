
import tg from '../static/img/footer/tg.png'
import vk from '../static/img/footer/vk.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">

                <div className="footer__container">

                    <div className="footer__section">
                        <div className="footer__section_title">Наши контакты</div>

                        <div className="footer__wrapper">
                            <div className="footer__inscription">8 982 625 74 77</div>

                            <div className='footer__images'>
                                <a href='https://web.telegram.org/a/#ynchk1'>
                                    <img src={tg} alt='tg' className="footer__image tg"/>
                                </a>
                                
                                <a href='https://web.telegram.org/a/#ynchk1'>
                                    <img src={vk} alt='vk' className="footer__image vk"/>
                                </a>
                            </div>

                        </div>
                        
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Footer