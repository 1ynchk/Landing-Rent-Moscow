import { motion } from 'motion/react'
import { useState } from 'react'

import cross from '../static/img/cross.png'

import { widthUL, inscriptionsVars } from '../static/motion/welcome'

const Question = ({id, qu, ans}) => {

    const [isOpen, setIsOpen] = useState(false)

    const openQuestion = () => {
        const crossId = 'faq__cross_' + id
        const cross = document.getElementById(crossId)

        const answerId = 'faq__answer_' + id
        const answer = document.getElementById(answerId)

        if (isOpen) {
            cross.classList.remove('active')
            answer.classList.remove('open')
        } else {
            cross.classList.add('active')
            answer.classList.add('open')
        }
        setIsOpen(!isOpen)
    }

    return (

        <div id={'faq__section_' + id} className='faq__section'>
            <div className='faq__wrapper'>
                <motion.div 
                    whileInView='visible'
                    initial='initial'
                    variants={inscriptionsVars}
                    className="faq__question_value">
                    {qu}
                </motion.div>
                        <img
                            
                            id={'faq__cross_' + id}
                            onClick={() => openQuestion()}
                            className="faq__question_cross" 
                            src={cross} 
                            alt='cross' />
            </div>
            <div id={'faq__answer_' + id} className='faq__answer'>
                {ans}
            </div>
            <motion.div 
                whileInView='visible'
                initial='initial'
                variants={widthUL}
                className='faq__underline'></motion.div>
        </div>

    )
}

const FAQ = () => {

    const data = [
        {id: 1, qu: 'Какие минимальные и максимальные сроки аренды доступны?', 
        ans: 'Мы предлагаем гибкие сроки аренды, начиная от 3 месяцев до нескольких лет, в зависимости от ваших потребностей.'},
        {id: 2, qu: 'Можно ли адаптировать офисное пространство под нужды моей компании?', 
        ans: 'Да, мы предоставляем возможность адаптации офисных помещений под ваши требования, включая изменение планировки и дизайна.'},
        {id: 3, qu: 'Есть ли дополнительные расходы помимо аренды?', 
        ans: 'Все условия, включая возможные дополнительные расходы, прозрачны и обсуждаются при заключении договора. Обычно это может включать коммунальные услуги и обслуживание.'},
        {id: 4, qu: 'Какие услуги включены в аренду офисного помещения?', 
        ans: 'В аренду могут быть включены услуги охраны, клининга, технического обслуживания, а также доступ к конференц-залам и другим общим зонам.'},
        {id: 5, qu: 'Есть ли парковка для арендаторов?', 
        ans: 'Да, большинство наших бизнес-центров оборудованы парковками, доступными для арендаторов и их гостей.'},
        ]
    
    return (
        <div className="faq">

            <div className="container">

                <div className="faq__container">
                    <h2 className="faq__title">Часто задаваемые вопросы</h2>

                    <div className="faq__question_container">

                        {data.map(el => {return <Question 
                            key={el.id} 
                            id={el.id} 
                            qu={el.qu} 
                            ans={el.ans} />})}

                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default FAQ