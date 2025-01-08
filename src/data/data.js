
import person from '../static/img/offers/person.png'
import offers from '../static/img/offers/offers.png'
import transparency from '../static/img/offers/transparency.png'

import img_1 from '../static/img/galery/img_1.jpg'
import img_2 from '../static/img/galery/img_2.jpg'
import img_3 from '../static/img/galery/img_3.jpg'
import img_4 from '../static/img/galery/img_4.jpg'
import img_5 from '../static/img/galery/img_5.jpg'

export const dataOffers = [
    {
    subtitle: 'Гибкость сроков аренды', 
    inscription: 'От краткосрочных до долгосрочных контрактов, учитывающих потребности вашего бизнеса.',
    image: offers,
    index: 1
    },
    {
    subtitle: 'Персонализированные условия',
    inscription: 'Возможность адаптации офисных помещений под уникальные требования вашей компании.',
    image: person,
    index: 2
    },
    {
    subtitle: 'Прозрачность и удобство',
    inscription: 'Отсутствие скрытых платежей и максимальная простота в процессе заключения договора.',
    image: transparency,
    index: 3
    }
]

export const dataAbout = [
    {
        header: '10 лет',
        title: 'реализуем любые нестандартные решения',
        index: 1,
        degree: 'fv_degree'
    },
    {
        header: 'на 20%',
        title: 'наши цены ниже рыночной цены',
        index: 2,
        degree: 'mfv_degree'
    },
    {
        header: '> 1000',
        title: 'довольных клиентов пользуются нашими услугами',
        index: 3,
        degree: 'nt_degree'
    },
    {
        header: '100%',
        title: 'качество и соблюдение договоренности по проекту',
        index: 4
    },
]

export const dataGalery = [
    {index: 1, image: img_1},
    {index: 2, image: img_2},
    {index: 3, image: img_3},
    {index: 4, image: img_4},
    {index: 5, image: img_5},
]