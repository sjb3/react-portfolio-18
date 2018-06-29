import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

export default class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div style={{ display: 'flex' }}>
            {this.props.skills}
            <ProgressBar

              style={{ margin: 'auto', width: '75%' }}
              progress={this.props.progress}

            />
          </div>
        </Cell>
      </Grid>
    );
  }
}
