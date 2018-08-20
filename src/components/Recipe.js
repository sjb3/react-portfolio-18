import React, { Component } from 'react';
const API_KEY = 'bbb4a5c7f1aaa7e665e2bc11422b1ef6'

export default class Recipe extends Component {
  state = {
    activeRecipe: []
  }

  componentDidMount = () => {
    const title = this.props.location.state.recipe;
    //to trick/bypass the cross origin issue, you can add cors-anywhere... right before the url
    const req = await fetch
      (`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}&count=5`);
    const res = await req.json();
    this.setState({activeRecipe: res.recipes[0]});
    console.log(this.state.activeRecipe)
  }
  render() {
    // console.log(req);

    return (
      <div>
        HELLO
      </div>
    );
  }
}
