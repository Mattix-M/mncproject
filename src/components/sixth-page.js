import React , { useState } from 'react';
import './sixth-page.css'
import './imgs/page6.jpg'
import adina from './imgs/adina.svg'
import line from './imgs/line.svg'
import kiril from './imgs/kiril.svg'
function Sipage(props){
    const { id } = props
    return(
        <div id={id} className='all-sipage'>

            <div className='sixpage__main-txt'>
                Тренерский состав
            </div>
            
            <div className='sixpage__blocks'>
                <div className='sixpage__block'>
                    <img className='sixpage__img' src={adina}>
                    </img>

                    <div className='sixpage__name'>
                        Адина Магавина
                    </div>

                    {/* <img className='sixpage__line' src={line}>
                    </img> */}

                    <div className='sixpage__txt'>
                        <li>
                            Международная Евразийская олимпиада серебро 2012
                        </li>
                        
                        <li>
                            Республиканская Олимпиада золото 2012, бронза 2011
                        </li>

                        <li>
                            Полуфиналист чемпионата мира по программированию ACM ICPC
                        </li>

                        <li>
                            Google I/O, Mountain View, California, USA
                        </li>

                        <li>
                            Google Conference Grant, Craft Conference, Budapest, Hungary
                        </li>
                    </div>
                </div>

                <div className='sixpage__block'>
                    <img className='sixpage__img' src={kiril}>
                    </img>

                    <div className='sixpage__name'>
                        Хлыновский Кирилл
                    </div>

                    {/* <img className='sixpage__line' src={line}>
                    </img> */}

                    <div className='sixpage__txt'>
                        <li>
                            Java/Kotlin разработчик
                        </li>

                        <li>
                        Разработал астропроцессор для расчета координат планет относительно небесной сферы
                        </li>

                        <li>
                            Разработал фреймворк для создания CLI-интерфейсов
                        </li>

                        <li>
                            Преподает стек технологий: ORMLite - Javalin - Jackson
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sipage