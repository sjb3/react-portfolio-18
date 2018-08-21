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
        <div className="projects-grid">
          {/* Project #1 */}
          <Card shadow={5} style={{ midWidth: '450', margin: 'auto' }}>
            <CardTitle style={{
            // fontFamily: 'Cute Font',
              fontStyle: 'italic',
              color: '#54e5cd',
              height: '176px',
              background:
            'url(https://media.giphy.com/media/Il9f7ZhytEiI0/giphy.gif) center / cover',
            }}
            >
            React Portfolio 2017
            </CardTitle>
            <CardText>
            2017 Portfolio using ReactJS, giffy GIFs and styled-components
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://blooming-mesa-91250.herokuapp.com/#/">
              Deployed +
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: 'red' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project #2 */}
          <Card shadow={5} style={{ midWidth: '450', margin: 'auto' }}>
            <CardTitle style={{
              // fontFamily: 'Cute Font',
              fontStyle: 'italic',
              color: 'black',
              height: '176px',
              background:
            'url(https://koditips.com/wp-content/uploads/create-tmdb-api-key-1080x675.png) center / cover',
            }}
            >
            React Movie Search
            </CardTitle>
            <CardText>
            Movie Search App, using ReactJS, material-ui and MovieDB API
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/sjb3/react-movies-search">
              gitHub +
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: 'red' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>
            This is nodeJS: coming soon
          </h1>
        </div>
      );
    } if (this.state.activeTab === 2) {
      return (
        <Card shadow={5} style={{ midWidth: '450', margin: 'auto' }}>
          <CardTitle style={{
          // fontFamily: 'Cute Font',
            fontStyle: 'italic',
            color: 'black',
            height: '176px',
            background:
            'url(https://cdn-images-1.medium.com/max/1200/1*RCeGDSIqqW68bS5kYucTvA.png) center / cover',
          }}
          >
            GraphQL + MERN Playlist
          </CardTitle>
          <CardText>
            GraphQL(+ React) study with front and backend
          </CardText>
          <CardActions border>
            <Button colored>
              <a href="https://github.com/sjb3/graphql-playlist">
              gitHub +
              </a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: 'red' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    } return (
      <div className="projects-grid">
        <Card shadow={5} style={{ midWidth: '450', margin: 'auto' }}>
          <CardTitle style={{
          // fontFamily: 'Cute Font',
            fontStyle: 'italic',
            color: 'white',
            height: '176px',
            background:
        'url(https://media.giphy.com/media/xUA7aPMdVzwSKsHNW8/giphy.gif) center / cover',
          }}
          >
        Concert Finder
          </CardTitle>
          <CardText>
        Building Web app for concert finder\n
        Concert Finder App, adopting Goldfrappe's image theme:
        Songkick, MapBox, Leaflet API's are used for dynamic display
          </CardText>
          <CardActions border>
            <Button colored>
              <a href="https://github.com/BbDgtl/finalProject-301n1">
          gitHub +
              </a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: 'red' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        <Card shadow={5} style={{ midWidth: '450', margin: 'auto' }}>
          <CardTitle style={{
            // fontFamily: 'Cute Font',
            fontStyle: 'italic',
            color: 'black',
            height: '176px',
            background:
      'url(http://images2.fanpop.com/image/photos/13800000/Coffee-coffee-13874217-1600-1200.jpg) center / cover',
          }}
          >
      Brew Buddy
          </CardTitle>
          <CardText>
      Building Web app for coffee aficinado's assist them to customize their morning joe's
      Back End: nodeJS
      Front End: Angular 1.x
          </CardText>
          <CardActions border>
            <Button colored>
              <a href="https://github.com/sjb3/brew-buddy-coffee-companion">
        gitHub +
              </a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: 'red' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
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
          Capstone
          </Tab>
        </Tabs>


        <Grid>
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
