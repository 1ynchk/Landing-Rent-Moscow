import { YMaps, Map, Placemark } from 'react-yandex-maps';

const Maps = () => {

    

    return (
        <div className='maps'>

            <div className='container'>
                <div className='aps__title'>Мы на карте</div>
                    <YMaps query={{ apikey: 'ваш_API_ключ', lang: 'ru_RU' }}>
                        <Map
                            defaultState={{
                                center: [55.751574, 37.573856],
                                zoom: 10,
                            }}
                            width="100%"
                            height="400px"
                        >
                            <Placemark geometry={[55.751574, 37.573856]} />
                        </Map>
                    </YMaps>
                </div>
        </div>
        
    )
}

export default Maps