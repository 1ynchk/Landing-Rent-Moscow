import logo from '../static/img/logo.png'

const Header = () => {
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
                    <div className='header__nav_wrapper'>
                        <div className='header__nav_btn'>УСЛОВИЯ АРЕНДЫ</div>
                        <div className='header__underline'></div>
                    </div>
                    <div className='header__nav_wrapper'>
                        <div className='header__nav_btn'>ОФИСЫ НА КАРТЕ</div>
                        <div className='header__underline'></div>
                    </div>
                    <div className='header__nav_wrapper'>
                        <div className='header__nav_btn'>ДЛЯ СОБСТВЕННИКОВ</div>
                        <div className='header__underline'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header