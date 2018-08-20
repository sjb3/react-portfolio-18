import React, { Component } from 'react';
import './App.css';
import {
  Layout, Header, Navigation, Drawer, Content,
} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/Main';
import { Adiv, Bdiv } from './styled/App.style';

class App extends Component {
  render() {
    // const date = Date.now();
    // console.log(date);

    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={(
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/" scroll>
                <Adiv>
                  <h4 style={{ fontFamily: 'Shrikhand' }}>
Portfolio
                  </h4>
                </Adiv>
              </Link>
)}
            scroll
          >

            <Navigation>
              <Link to="/resume">
                <Adiv>
Resume
                </Adiv>
              </Link>
              <Link to="/recipesearch">
                <Adiv>
Recipe Search
                </Adiv>
              </Link>
              <Link to="/projects">
                <Adiv>
Projects
                </Adiv>
              </Link>
              <Link to="/contacts">
                <Adiv>
Contacts
                </Adiv>
              </Link>
            </Navigation>
          </Header>
          <Drawer title={(
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
              <Bdiv>
Portfolio
              </Bdiv>
            </Link>
)}
          >
            <Navigation>
              <Link to="/resume">
                <Bdiv>
Resume
                </Bdiv>
              </Link>
              <Link to="/recipesearch">
                <Bdiv>
Recipe Search
                </Bdiv>
              </Link>
              <Link to="/projects">
                <Bdiv>
Projects
                </Bdiv>
              </Link>
              <Link to="/contacts">
                <Bdiv>
Contacts
                </Bdiv>
              </Link>
            </Navigation>
          </Drawer>

          <Content>
            <div className="page-content" />
            <Main />
          </Content>

          <footer className="app-footer">
            <hr />
            <a style={{ fontSize: '1em', color: 'black', fontStyle: 'italic' }} href="https://tleunen.github.io/react-mdl/">
            powered by Material Design Lite
            </a>
          </footer>
        </Layout>

      </div>

    );
  }
}

export default App;
