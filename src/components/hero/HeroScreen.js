import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selector/getHeroById';

export const HeroScreen = ({history}) => {
  const { heroeId } = useParams();
  console.log(heroeId);

  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
  const { superhero, alter_ego, publisher, first_appearance, characters } = hero;

  console.log(hero);
  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleClick = () => {
    if(history.lenght <= 2){
      history.push('/')
    } else {
      history.goBack();
    }
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../../../assets/heroes/${heroeId}.jpg`}
          className="img-thumbnail"
          alt={superhero}
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:{alter_ego}</b>
          </li>
          <li className="list-group-item">
            <b>Publisher:{publisher}</b>
          </li>
          <li className="list-group-item">
            <b>first Apparence:{first_appearance}</b>
          </li>
        </ul>
        <h5>Charactes</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleClick}>
          Return
        </button>
      </div>
    </div>
  );
};
