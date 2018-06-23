import React, { Component } from 'react';
import {
  Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton,
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  toggleCategory() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <Card shadow={5} style={{ midWidth: '450', margin: 'auto' }}>
            <CardTitle style={{
              color: 'black',
              height: '176px',
              background:
            'src(../assets/portfolio17.png) center / cover',
            }}
            >
React Portfolio 2017

            </CardTitle>
            <CardText>
2017 Portfolio using ReactJS, giffy GIFs and styled-components
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/sjb3/">
GitHub
                </a>
              </Button>
              <Button colored>
                <a href="https://blooming-mesa-91250.herokuapp.com/#/">
Deployed +
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>
            This is nodeJS
          </h1>
        </div>
      );
    } return (
      <h1>
        This is graphQL
      </h1>
    );
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={tabId => this.setState({ activeTab: tabId })} ripple>
          <Tab>
React
          </Tab>
          <Tab>
nodeJS
          </Tab>
          <Tab>
          GraphQL
          </Tab>
          <Tab>
          Prev Capstone
          </Tab>
        </Tabs>


        <Grid className="projects-grid">
          <Cell col={12}>
            <div className="content">
              {this.toggleCategory()}
            </div>
          </Cell>
        </Grid>


      </div>
    );
  }
}

export default Projects;
