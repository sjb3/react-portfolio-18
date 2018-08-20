import React from 'react';
import {
  Button,
} from 'react-mdl';
import { Link } from 'react-router-dom';

export default props => (
  <div className="container">
    <div className="row">
      {props.recipes.map(recipe => (
        <div key={recipe.title} className="col-md-4" style={{ marginBottom: '2rem' }}>
          <div className="recipes__box">
            <img
              className="recipe__box-img"
              width="100px"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <div className="recipe__text">
              <h5 className="recipe__title">
                {recipe.title.length < 20 ? `${recipe.title}`
                  : `${recipe.title.substring(0, 25)}... `}
              </h5>
              <p className="recipe__subtitle">
Publisher:
                <span>
                  {recipe.publisher}
                </span>
              </p>
            </div>
            {/* <Button style={{ color: 'grey' }}>
View Recipe
            </Button> */}
            <button className="recipe_buttons">
              <Link to={{
                pathname: `/recipe/${recipe.recipe_id}`,
                state: { recipe: recipe.title },
              }}
              >
View Recipe
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
