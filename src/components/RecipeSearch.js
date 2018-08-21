import React, { Component } from 'react';
import Form from './Form';
import Recipes from './Recipes';
import { H2 } from '../styled/App.style';

const API_KEY = 'bbb4a5c7f1aaa7e665e2bc11422b1ef6'

class RecipeSearch extends Component {
  state = {
    recipes: []
  }
  // funciton to call API
  // instead constructor function and bind and such, use v16 way

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    //to trick/bypass the cross origin issue, you can add cors-anywhere... right before the url
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=5`)
    const data = await api_call.json();
    this.setState({recipes: data.recipes});
    // console.log(this.state.recipes)
  }
  componentDidMount = () => {
    const json = localStorage.getItem('recipes');
    const recipes = JSON.parse(json);
    this.setState({recipes});
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem('recipes', recipes)
  }

  render() {
    return (
      <div className='recipe-gradient-background'>
        <header className='recipe-gradient-background'>
          <H2 style={{fontFamily: 'Lobster', color:'#ea1543', paddingTop:'2rem',
          paddingBottom: '2rem',
    width: '400px', marginRight: 'auto', marginLeft: 'auto', border: '1px #000',
  }}>
Recipe Finder:
          </H2>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeSearch;
