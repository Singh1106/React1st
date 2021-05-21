import React from 'react';
import './card-styles.css';

export const Card = (props)=>(
  <div className='card-container'>
    <img alt="human" src={
      `https://robohash.org/${props.human.id + 1}?set=set2`
    }/>
    <h2>{props.human.name}</h2>
    <p>{props.human.email}</p>
  </div>
)
