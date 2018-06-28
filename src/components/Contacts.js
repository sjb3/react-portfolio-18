import React, { Component } from 'react';
import {
  Grid, Cell, Dialog, DialogTitle, DialogContent, DialogActions, Button,
} from 'react-mdl';


class Contacts extends Component {
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
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>

            <div className="contact-banner-text">
              <h1>
              Full Stack Web Developer
              </h1>
              <hr />
              <p>

HTML5/CSS3 || JavaScript || ReactJS || nodeJS || Express || MongoDB || graphQL

              </p>

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
Seattle/Bellevue
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
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contacts;
