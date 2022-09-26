import React , { useState } from 'react';
import './seventh-page.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Sepage(props){
    const { id } = props
    const notify = () => toast.success("Ваша заявка успешно отпралена" , {position: toast.POSITION.TOP_CENTER, autoClose:2000});
    return(
        <div id={id} className='all-sepage'>
            <div className='seventh-page__blocks'>
                <div className='seventh-page__l-block'>
                    <div className='seventh-page__l-block-1'>
                        8 уроков
                    </div>

                    <div className='seventh-page__l-block-2'>
                        Занятия проходят 2 раза в неделю по 2 часа
                    </div>

                    <div className='seventh-page__l-block-3'>
                        20 000 тенге
                    </div>
                </div>

                <div className='seventh-page__r-block'>
                    <div className='seventh-page__r-block-0'>
                        Оставить заявку на курс
                    </div>

                    <div className='seventh-page__r-block-1'>
                        Ваше имя
                    </div>

                    <input className='seventh-page__r-block-input'>
                    </input>

                    <div className='seventh-page__r-block-3'>
                        Ваш номер
                    </div>

                    <input className='seventh-page__r-block-input'>
                    </input>

                    <div className='seventh-page__r-block-5'>
                        Ваш электронный адрес
                    </div>

                    <input className='seventh-page__r-block-input'>
                    </input>

                    <button onClick={notify} className='seventh-page__r-block-button'>
                        <ToastContainer />
                        <div className='seventh-page__r-block-button-txt'>
                            Оставить заявку
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sepage;