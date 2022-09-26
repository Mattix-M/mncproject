import React , { useState } from 'react';
import './footer.css'
import facebook from './imgs/facebook.svg'
import insta from './imgs/insta.svg'
import twitt from './imgs/twitt.svg'
import utube from './imgs/utube.svg'
function Footer(){
    return(
        <div className="all-footer">
        
            <div>
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.641817233163!2d76.90380901514949!3d43.21700147913864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388368c55d9696f3%3A0xa74c749620eaf731!2z0KPRh9C10LHQvdGL0Lkg0KbQtdC90YLRgCAiTSZDIg!5e0!3m2!1sru!2skz!4v1632403889463!5m2!1sru!2skz" width="100%" height="488" allowfullscreen="" loading="lazy">
                </iframe> 
            </div>
            <div className="contacts">

                <div className="contacti">
                    Контакты:
                </div>
                
                <div className="socials">
                    <img href='https://www.facebook.com/mathncode/' className="face" src={facebook}>
                    </img>

                    <img className="twitt" src={twitt}>
                    </img>

                    <img className="utube" src={utube}>
                    </img>

                    <img className="insta" src={insta}>
                    </img>
                </div>
            </div>
        </div>
    )
}

export default Footer