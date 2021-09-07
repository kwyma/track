import React from 'react';
import { Header } from '../Header.js';
import { Track } from '../Track/Track.js';

import '../../styles/TrackViews.css';

export class MultiTrackView extends React.Component {
  render() {
    return (
      <div className="track-view">
        <Header />
        <div className="multitrack-container">
          <Track />
          <Track />
          <Track />
        </div>
      </div>
    );
  }
}
