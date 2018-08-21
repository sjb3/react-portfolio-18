import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
const API_KEY = 'bbb4a5c7f1aaa7e665e2bc11422b1ef6'

export default class Recipe extends Component {
  state = {
    activeRecipe: []
  }

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    //to trick/bypass the cross origin issue, you can add cors-anywhere... right before the url
    const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    const res = await req.json();
    this.setState({activeRecipe: res.recipes[0]})
    // console.log(res)
  }
  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className='container'>
        {
          this.state.activeRecipe.length != 0 &&
          <div className='active-recipe' style={{marginTop: '2rem'}}>
          <img className='active-recipe__img' src={recipe.image_url} alt={recipe.title} />
          <h3 style={{fontFamily:'Shrikhand'}} className='active-recipe__title'>{recipe.title}</h3>
          <h4 className='active-recipe__publisher'>Publisher: <span>{recipe.publisher}</span></h4>
          <p className='active-recipe__website'>
            <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
          </p>
          {/* <button style={{marginBottom:'2rem', color: 'black'}}> */}
            <Link to='/recipesearch'><FaSearch style={{fontSize:'2rem', marginBottom:'2rem', color: 'black'}}/></Link>
          {/* </button> */}
        </div>
        }
      </div>
    );
  }
}

