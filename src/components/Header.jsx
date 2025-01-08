import { useDispatch } from 'react-redux'
import logo from '../static/img/logo.png'

import { activateReducer } from '../store/PopupSlice';

const Header = () => {

    const dispatch = useDispatch()
    
    return (
        <div className="header">
            <div className="header__container">

                <div className="header__section logo">
                        <img 
                            src={logo} 
                            className='header__logo'
                            alt='logo'/>
                        <div className='header__title'>OFFICE NEARBY</div>
                </div>

                <div className="header__section nav">
                    <a href='#offers' className='header__nav_wrapper'>
                        <div className='header__nav_btn'>УСЛОВИЯ АРЕНДЫ</div>
                        <div className='header__underline'></div>
                    </a>
                    <a href='#maps' className='header__nav_wrapper'>
                        <div className='header__nav_btn'>ОФИСЫ НА КАРТЕ</div>
                        <div className='header__underline'></div>
                    </a>
                    <div 
                        onClick={() => dispatch(activateReducer('pproposal'))}
                        className='header__nav_wrapper proposall'>
                        <div className='header__nav_btn'>Подобрать офис</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header