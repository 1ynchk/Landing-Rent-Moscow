import { YMaps, Map, Placemark } from 'react-yandex-maps';

const Maps = () => {

    

    return (
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
        
    )
}

export default Maps