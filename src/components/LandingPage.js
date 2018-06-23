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
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Rembrandt_van_Rijn%2C_Landscape_with_the_Rest_on_the_Flight_into_Egypt.jpg"
            alt="avatar"
            className="avatar-img"
          />
          <div className="banner-text">
            <h1>
              Full Stack Web Developer
            </h1>
            <hr />
            <p>

HTML5/CSS3 || JavaScript || ReactJS || nodeJS || Express || MongoDB

            </p>
            {/* Later move to Contacts.js */}
            <div className="icon-links">
              <a href="https://github.com/sjb3" targer="_blank">
                <i className="fab fa-github-alt" />
              </a>
              <a href="https://linkedin.com/in/justin-byun" targer="_blank">
                <i className="fab fa-linkedin" />
              </a>
              <a targer="_blank">
                <i className="fas fa-phone-square" />
              </a>
              <a targer="_blank">
                <i className="fas fa-at" />
              </a>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
