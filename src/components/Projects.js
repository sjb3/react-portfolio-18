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
            This is nodeJS
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
            React Movie Search
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
      <h1>
Capstron
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

// import React, { Component } from 'react';
// import {
//   Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton,
// } from 'react-mdl';


// class Projects extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { activeTab: 0 };
//   }

//   toggleCategories() {
//     if (this.state.activeTab === 0) {
//       return (
//         <div className="projects-grid">
//           {/* Project 1 */}
//           <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
//             <CardTitle style={{
//               color: '#54e5cd',
//               height: '176px',
//               background:
//              'url(https://media.giphy.com/media/Il9f7ZhytEiI0/giphy.gif) center / cover',
//             }}
//             >
//               React Portfolio 2017
//             </CardTitle>
//             <CardText>
//               2017 Portfolio using ReactJS, giffy GIFs and styled-components
//             </CardText>
//             <CardActions border>
//               <Button colored>
//                 <a href="https://blooming-mesa-91250.herokuapp.com/#/">
//                   Deployed +
//                 </a>
//               </Button>
//             </CardActions>
//             <CardMenu style={{ color: 'red' }}>
//               <IconButton name="share" />
//             </CardMenu>
//           </Card>

//           {/* Project 2 */}
//           <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
//             <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }}>
// React Project #2
//             </CardTitle>
//             <CardText>
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
//             </CardText>
//             <CardActions border>
//               <Button colored>
// GitHub
//               </Button>
//               <Button colored>
// CodePen
//               </Button>
//               <Button colored>
// Live Demo
//               </Button>
//             </CardActions>
//             <CardMenu style={{ color: '#fff' }}>
//               <IconButton name="share" />
//             </CardMenu>
//           </Card>

//           {/* Project 3 */}
//           <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
//             <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }}>
// React Project #3
//             </CardTitle>
//             <CardText>
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
//             </CardText>
//             <CardActions border>
//               <Button colored>
// GitHub
//               </Button>
//               <Button colored>
// CodePen
//               </Button>
//               <Button colored>
// Live Demo
//               </Button>
//             </CardActions>
//             <CardMenu style={{ color: '#fff' }}>
//               <IconButton name="share" />
//             </CardMenu>
//           </Card>
//         </div>


//       );
//     } if (this.state.activeTab === 1) {
//       return (
//         <div>
//           <h1>
// This is Angular
//           </h1>
//         </div>
//       );
//     } if (this.state.activeTab === 2) {
//       return (
//         <div>
//           <h1>
// This is VueJS
//           </h1>
//         </div>
//       );
//     } if (this.state.activeTab === 3) {
//       return (
//         <div>
//           <h1>
// This is MongoDB
//           </h1>
//         </div>
//       );
//     }
//   }


//   render() {
//     return (
//       <div>
//         <Tabs activeTab={this.state.activeTab} onChange={tabId => this.setState({ activeTab: tabId })} ripple>
//           <Tab>
// React
//           </Tab>
//           <Tab>
// Angular
//           </Tab>
//           <Tab>
// VueJS
//           </Tab>
//           <Tab>
// MongoDB
//           </Tab>
//         </Tabs>


//         <Grid>
//           <Cell col={12}>
//             <div className="content">
//               {this.toggleCategories()}
//             </div>
//           </Cell>
//         </Grid>


//       </div>
//     );
//   }
// }

// export default Projects;
