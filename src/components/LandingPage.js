import React, { Component } from 'react';
import {
  Grid, Cell, Button, Dialog, DialogTitle, DialogContent, DialogActions,
} from 'react-mdl';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);

    this.handleOpenDialog2 = this.handleOpenDialog2.bind(this);
    this.handleCloseDialog2 = this.handleCloseDialog2.bind(this);
  }

  handleOpenDialog() {
    console.log('hello');

    this.setState({
      openDialog: true,
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false,
    });
  }

  handleOpenDialog2() {
    console.log('hello');
    this.setState({
      openDialog2: true,
    });
  }

  handleCloseDialog2() {
    this.setState({
      openDialog2: false,
    });
  }

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

HTML5/CSS3 || JavaScript || ReactJS || nodeJS || Express || MongoDB || graphQL

            </p>
            {/* Later move to Contacts.js */}
            <div className="icon-links">
              <a href="https://github.com/sjb3" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github-alt" />
              </a>
              <a href="https://linkedin.com/in/justin-byun" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin" />
              </a>
              <a>
                <i className="fas fa-phone-square" onClick={this.handleOpenDialog} />
                <Dialog open={this.state.openDialog}>
                  <DialogTitle style={{ fontSize: '0.5em', fontFamily: 'Shrikhand' }}>
206) 327-7850
                  </DialogTitle>
                  <DialogContent style={{ fontSize: '0.5em', fontFamily: 'Open Sans Condensed' }}>
                    <p>
Seattle/Bellevue, WA
                    </p>
                  </DialogContent>
                  <DialogActions>

                    <Button style={{ color: 'red' }} type="button" onClick={this.handleCloseDialog}>
Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </a>

              <a>
                <i className="fas fa-at" onClick={this.handleOpenDialog2} />
                <Dialog open={this.state.openDialog2}>
                  <DialogTitle style={{ fontSize: '0.4em', fontFamily: 'Shrikhand' }}>
klofseattle@hotmail.com
                  </DialogTitle>
                  <DialogActions>
                    <Button style={{ color: 'red' }} type="button" onClick={this.handleCloseDialog2}>
Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </a>


            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
