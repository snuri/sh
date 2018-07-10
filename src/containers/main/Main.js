import React, { Component, Fragment } from 'react';
import gameBuild from "../../resources/slutholm.zip";
import './Main.css';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <main className="main">
          <a href="https://www.patreon.com/slutholm" target="_blank" rel="noopener noreferrer" className="patron-button" />
          <a href={gameBuild} className="download-button" download="slutholmya"/>
        </main>
        <div className="project-relation">
          <span className="text-reasons">
            * First of all,
            <span className="text-delimiter"/>
            <br/>
            <span className="text-padding">we create an interesting story;</span>
            <br/>
            * All arts are unique, made by us;
            <br/>
            * Unlimited options for expansion;
          </span>
          <span className="text-game">
            SLUTHOLM
            <br/>
            is an <span className="color-violet">NSFW</span>
            <br/>
            dating sim/
            <br/>
            visual novel
            <br/>
            in development.
          </span>
          <span className="text-story">
            You come back to your native town
            <br/>
            to check rumors you heard about
            <br/>
            strange things happening there.
            <br/>
            <br/>
            And the town is full of women -
            <br/>
            ervants at your family mansion,
            <br/>
            locals of all kinds, even monster girls...
          </span>
        </div>
      </Fragment>
    );
  }
}

export default Main;
