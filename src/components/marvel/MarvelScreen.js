import React from 'react'
import { HerosList } from '../hero/HerosList';

export const MarvelScreen = () => {
  return (
    <div>
      <h1>Marvel Screen</h1>
      <HerosList publisher="Marvel Comics" />
    </div>
  )
}
