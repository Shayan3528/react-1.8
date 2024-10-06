
/*

import { person } from './component//Data.jsx';
import { getImageUrl} from './component/Utlis.jsx';

export default function App() {

  const chemistry = person.filter(person => person.profession==='chemist');
  const everyoneElse = person.filter(person => person.profession !=='chemist');


  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemists</h2>
      <ul>
        {chemistry.map( person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
      <h2>Everyone Else</h2>
      <ul>
        {everyoneElse.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
    </article>
  );  



}

*/

import {recipes} from './component/Data.jsx';
/*
export default function App(){
  return (
    <div>
      <h1>Recipes</h1>
      { recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient => (
              <li key={ingredient}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

*/

  function Recipe({id,name,ingredients}){
  return(
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredients => 
          <li key = {ingredients}>
            {ingredients}

          </li>
        )}
      </ul>
    </div>
  );

}
  export default function App(){
    return(
      <div>
        <h1>Recipe</h1>
        {recipes.map(recipes => 
          <Recipe {...recipes} key = {recipes.id} />
        )}
      </div>
    )
  }

