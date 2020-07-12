import React from 'react'
import { getHeroesByPublisher } from '../../selector/getHeroesByPublisher';

export const HerosList = ({publisher}) => {

  const heroes = getHeroesByPublisher(publisher);

  return (
   <ul>
     {heroes.map(hero => (
       <li key={hero.id}>
         {hero.superhero}
       </li>
     ))}
   </ul>
  )
}
