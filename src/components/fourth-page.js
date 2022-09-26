import React , { useState } from 'react';
import check from './imgs/check.svg'
import './fourth-page.css'
import page4 from './imgs/page4.jpg'
import chel from './imgs/chel.svg'
import casebag from './imgs/casebag.svg'

function Fopage(props){
    const { id } = props
    return(
        <div id={id} className="all-Fopage">
            <div className="fourthpage__main-txt">
                Наши преимущества
            </div>

            <div className='fourthpage__blocks'>
                <div className='fourthpage__first-block'>
                    <img className="fourthpage__check" src={check}>
                    </img>

                    <div className="fourthpage__lil-txt-1">
                        Актуальность программы
                    </div>

                    <div className="fourthpage__big-txt-1">
                        Программа обучения включает в себя актуальные технологии программирования. Каждый год мы совершенствуем план занятий, вносим изменения в задачи.
                    </div>
                </div>

                <div className='fourthpage__second-block'>
                    <img className='fourthpage__chel' src={chel}>
                    </img>

                    <div className='fourthpage__lil-txt-2'>
                        Практикующие тренера
                    </div>

                    <div className='fourthpage__big-txt-2'>
                        Наши тренера являются практиками, работают в сфере разработки программного обеспечения.
                    </div>
                </div>

                <div className='fourthpage__third-block'>
                    <img className='fourthpage__casebag' src={casebag}>
                    </img>

                    <div className='fourthpage__lil-txt-3'>
                        Проект в портфолио
                    </div>

                    <div className='fourthpage__big-txt-3'>
                        По завершению обучения наши студенты разрабатывают проект, который публикуется в их портфолио.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fopage