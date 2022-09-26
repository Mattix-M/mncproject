import React , { useState } from 'react';
import {Link, animateScroll as scroll} from "react-scroll";
import './header.css';

function Header() {
    return (
      <div className="all-header">
        <Link activeClass = "active" to = "firstpage" spy={true} smooth={true} offset = {-50} duration = {500}> 
            <img className="logo" src="http://www.mathncode.kz/templates/gk_box/images/logo.png">
            </img>
        </Link>

        <div className="compas-txt">
            <div className = "txts">
                <Link activeClass = "active" to = "fourthpage" spy={true} smooth={true} offset = {-50} duration = {500} >
                    О нас 
                </Link>
            </div>

            <div className = "txts">
                <Link activeClass = "active" to = "thirdpage" spy={true} smooth={true} offset = {-50} duration = {500}>
                    Для кого
                </Link>
            </div>

            <div className = "txts">
                <Link activeClass = "active" to = "fifthpage" spy={true} smooth={true} offset = {-50} duration = {500}>
                    Программы
                </Link>
            </div>

            <div className = "txts">
                <Link activeClass = "active" to = "sixthpage" spy={true} smooth={true} offset = {-50} duration = {500}>
                    Тренера
                </Link>
            </div>

            <div className = "txts">
                <Link activeClass = "active" to = "seventhpage" spy={true} smooth={true} offset = {-50} duration = {500}>
                    Стоимость
                </Link>
            </div>
        </div>

        <nav role='navigation'>
                <div id="menuToggle">
                    <input type="checkbox" />
        
                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                        <Link activeClass = "active" to = "fourthpage" spy={true} smooth={true} offset = {-50} duration = {500}> 
                            <a href="#"><li>О нас</li></a>
                         </Link>

                         <Link activeClass = "active" to = "thirdpage" spy={true} smooth={true} offset = {-50} duration = {500}> 
                            <a href="#"><li>Для кого</li></a>
                         </Link>

                         <Link activeClass = "active" to = "fifthpage" spy={true} smooth={true} offset = {-50} duration = {500}> 
                            <a href="#"><li>Программы</li></a>
                         </Link>

                         <Link activeClass = "active" to = "sixthpage" spy={true} smooth={true} offset = {-50} duration = {500}> 
                            <a href="#"><li>Тренера</li></a>
                         </Link>

                         <Link activeClass = "active" to = "seventhpage" spy={true} smooth={true} offset = {-50} duration = {500}> 
                            <a href="#"><li>Стоимость</li></a>
                         </Link>
                    </ul>
                </div>
            </nav>

        {/* <div className="compas-txt">
            <div className="txts">
                О нас
            </div>

            <div className="txts">
                Для кого
            </div>

            <div className="txts">
                Программы
            </div>

            <div className="txts">
                Тренера
            </div >

            <div className="txts">
                Стоимость
            </div>
        </div> */}
      </div>
    );
  }
  export default Header;