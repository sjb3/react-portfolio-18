import React from 'react';

export default props => (
  <div>
    {
      props.recipes.map(recipe => (
        <div key={recipe.recipe_id}>
          <img src={recipe.image_url} alt={recipe.title} />
          <p>
            {recipe.title}
          </p>
        </div>
      ))
    }
  </div>
);
