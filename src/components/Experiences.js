import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experiences extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p style={{ fontStyle: 'italic' }}>
            {this.props.startYear}
-
            {this.props.endYear}
          </p>
        </Cell>

        <Cell col={8}>
          <h5 style={{ marginTop: '0px', fontStyle: 'italic' }}>
            {this.props.jobTitle}
          </h5>
          <h5 style={{ marginTop: '0px', fontStyle: 'italic' }}>
            {this.props.jobLocation}
          </h5>
          <p>
            {this.props.jobDescription}
          </p>
        </Cell>


      </Grid>
    );
  }
}

export default Experiences;
