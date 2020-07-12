import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selector/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HerosList = ({publisher}) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
   <div className="card-columns">
     {heroes.map(hero => (
       <HeroCard key={hero.id} {...hero}>
       </HeroCard>
     ))}
   </div>
  )
}
