import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return (
      <div div={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid" style={{ height: '100%' }}>
          <Cell col={12} />
          <img
            // backgrounImage=url
            src="http://1.bp.blogspot.com/-NpMwueYYmNQ/UPwzNIVsleI/AAAAAAAAFI0/fzQ1inpZUnk/s1600/tomoffinland3-2009.jpg"
            alt="avatar"
            className="avatar-img"
          />
          <div className="banner-text">
            <h1>
              Full Stack Web Developer
            </h1>
          </div>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
