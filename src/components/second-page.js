import React , { useState } from 'react';
import './second-page.css'
import red_3s from './imgs/red_3s.svg'
function Spage (props){
    const { id } = props
    return(
        <div id={id} className="all-spage">
            <div className="secondpage__txt">
                Java один из самых востребованных языков программирования. По версии TIOBE в 2021 году занимает 2 место в мире по популярности среди всех языков.
            </div>
        </div>
    )
}

export default Spage