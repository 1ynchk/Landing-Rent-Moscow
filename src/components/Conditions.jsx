
import video from '../static/videos/video.mp4'

const Conditions = () => {
    return (
        <div className="conditions">
            <div className="container">
                <div className="conditions__container">

                <div className="conditions__wrapper">

                
                <div className="condition__section section_1">
                    <h2 className="conditions__title">
                    Найдем помещение в пару кликов
                    </h2>

                    <div className='conditions__subtitle'>
                        Начинайте бизнес с высоты!
                    </div>
                </div>

                <div className="condition__section section_2">
                <video 
                    src={video} 
                    autoPlay 
                    loop 
                    muted 
                    className='condition__video'
                    />
                <div className="conditions__inscription">
                Мы предлагаем продуманный и интуитивно 
                понятный сервис, который позволит вам 
                быстро и эффективно находить необходимые варианты. 
                </div>

                </div>

                <div className="condition__section section_3">

                <div className="conditions__inscription">
                Нужен офис для новой команды, современный 
                коворкинг в центре города или 
                просторное здание для бизнеса?
                </div>
                
                <div className="conditions__inscription sect_3">
                С нами это пара кликов!
                </div>
                </div>

                </div>

                </div>
            </div>
        </div>  
    )   
}

export default Conditions