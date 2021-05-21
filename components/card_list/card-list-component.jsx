import React from 'react';
import './card-list-styles.css';
import {Card} from '../card/card-component.jsx';

export const CardList = (props)=>(
  <div className='CardListCSS'>
    {props.humans.map(human=>(
      <Card key={human.id} human={human}/>
    ))}
  </div>
)
