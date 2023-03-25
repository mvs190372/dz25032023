import React from 'react'
import './Xy.css';

/*Задание. Написать компонент который выводит координаты курсора внутри области 500х500px.*/

function Xy({data}) {
  return (
        <div className="obl"><p>x={data.x} : y={data.y}</p></div>
  );
}

export default Xy