import React , { useState } from 'react';
import './third-page.css'
import bag from './imgs/bag.svg'
import head from './imgs/head.svg'
import page3 from './imgs/page3.jpg'
function Tpage (props){
    const { id } = props
    return(
        <div id={id} className="all-tpage">
            <div className="thirdpage__main-txt">
                Для кого предназначено наше обучение?
            </div>
            <div className="thirdpage__blocks">
                <div className="thirdpage__l-block">
                    <img className="thirdpage__bag" src={bag}>
                    </img>

                    <div className='thirdpage__l-block-txt'>
                        Для школьников 9-11 классов, желающих изучить программирование
                    </div>
                </div>

                <div className="thirdpage__r-block">
                    <img className="thirdpage__head" src={head}>
                    </img>

                    <div className="thirdpage__r-block-txt">
                        Для студентов 1-4 курсов, желающих углубить свои знания в разработке
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tpage