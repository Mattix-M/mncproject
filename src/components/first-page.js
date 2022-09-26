import React , { useState } from 'react';
import './first-page.css'
import arrow from './imgs/arrow.svg'
import front1 from './imgs/front1.svg'
import {Link, animateScroll as scroll} from "react-scroll";
import pege1 from './imgs/page1.svg'

function Fpage(props){
    const { id } = props
    return(
        <div id={id} className="all-fpage">
            <div className='firstpage__l-block'>
                <div className="firstpage__block-main-txt">
                    <div className='firstpage__main-txt'>
                        ПРОЕКТНОЕ ПРОГРАММИРОВАНИЕ M&C - JAVA РАЗРАБОТКА
                    </div>
                </div>

                <div className='firstpage_button-N-arrow'>
                    <Link activeClass = "active" to = "seventhpage" spy={true} smooth={true} offset = {-50} duration = {500}> 
                        <button className="firstpage__button">
                            <div className="firstpage__button-txt">
                                Оставить заявку 
                            </div>
                        </button>
                    </Link>
                    
                    <img className="firstpage__arrow" src={arrow}>
                    </img>
                </div>
            </div>
            <div className='firstpage__r-block'>
                <img src={front1} alt="" />
            </div>
        </div>
    )
}

export default Fpage;