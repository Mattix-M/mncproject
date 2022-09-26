import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { isMobile } from 'react-device-detect';
import './index.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Slider = () => {
    const arr = [
        {
            title: 'Основы программирования на Java - алгоритмизация.Введение в Java',
            list:[
                'Ввод-вывод',
                'Условные операторы',
                'Операторы цикла',
                'Массивы',
                'Строки'
            ]
        },
        {
            title: 'Back-end с фреймворком Javalin',
            list:[
                'основы сетей(OSI, TCP, UDP, HTTP)',
                'основы баз данных (нормальные формы до 3NF, SQL), ORM',
                'сериализация/десериализация JSON (Jackson)',
                'методологии разработки веб сервисов (REST)',
                'основы информационной безопасности (Authentification / Authorization, Paswords salting + hashing)',
                'Git'

            ]
        },
        {
            title: 'Объектно-ориентированное программирование на Java',
            list:[
              'Java как экосистема',
              'Методы',
              'Конструкторы',
              'Инкапсуляция и модификаторы доступа',
              'Наследование',
              'Полиморфизм',
              'Исключения',
              'Коллекции',
              'Многопоточность',
              '3 проекта',
              'Элементы функционального программирования'
            ]
        },
    ]

    console.log({isMobile})
  return (
    <div className="slider">
        <Carousel centerMode={!isMobile} itemClass={'slider__main-item'} draggable={false} infinite={true} showDots={true} responsive={responsive}>
        {arr.map((elem, i) => (
            <div className="slider__item">
                <div className='slider__item-title'>
                    {elem.title}
                </div>
                
                <div className='slider__item-list'>
                  <ul>
                    {elem.list.map((el, i) => (
                      <li key={i}>{el}</li>
                    ))}
                  </ul>
                </div>        
            </div>
        ))}
        </Carousel>
    </div>
  )
}

export default Slider;
