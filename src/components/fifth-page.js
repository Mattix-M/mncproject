import React from 'react'
import Slider from './common/slider'
import './fifth-page.css'
import page5 from './imgs/page5.jpg'

function Fipage (props){
    const { id } = props
    return(
        <div id={id} className='all-fipage'>
            <div className='fifth-page_blur-blocks'> 
                <div className='fifth-page_blur-block-1'>
                </div>

                <div className='fifth-page_blur-block-2'> 
                </div>
            </div>

            <div className='fifth-page_main-txt'>
                Уровни обучения:
            </div>
            
            <Slider />
        </div>
    )

}

export default Fipage