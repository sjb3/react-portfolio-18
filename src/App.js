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
    return (
      <div style={{ height: '300px', position: 'relative' }}>
        <Layout fixedHeader>
          <Header
            style={{ backgroundColor: 'transparent' }}
            className="header-color"
            title={(
              <span>
                <strong>
Portfolio
                </strong>
                <br />
                <a style={{ fontSize: '0.6em', color: 'white', fontStyle: 'italic' }} href="https://tleunen.github.io/react-mdl/">
powered by Material Design
                </a>
              </span>
)}
          >
            <Navigation>
              <Link to="/resume">
                <Adiv>

Resume
                </Adiv>

              </Link>
              <Link to="/aboutme">
                <Adiv>
     AboutMe
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
          <Drawer title="Site Map">
            <Navigation>
              <Link to="/resume">
                <Bdiv>
     Resume

                </Bdiv>
              </Link>
              <Link to="/aboutme">
                <Bdiv>
     AboutMe

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
          <Content />
          <Main />
        </Layout>
      </div>
    );
  }
}

export default App;
