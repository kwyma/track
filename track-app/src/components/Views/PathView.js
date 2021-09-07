import React from 'react';
import { Header } from '../Header.js';
import { VertTrack } from '../Track/VertTrack.js';

import '../../styles/Path.css';
import '../../styles/VertTrack.css';

export class PathView extends React.Component {
  render() {
    return (
      <div className="path-view">
        <Header />
        <div className="pathtrack-container">
          <VertTrack perspective={true}/>
          <VertTrack perspective={true}/>
          <VertTrack perspective={true}/>
        </div>
      </div>
    );
  }
}
