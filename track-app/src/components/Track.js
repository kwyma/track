import React from 'react';
import { TrackLabel } from './TrackLabel.js';
import { TrackStage } from './TrackStage.js';

import '../styles/Track.css';

export class Track extends React.Component {
  render() {
    return (
      <div className="track-wrapper">
        <hr/>
        <div className="track">
          <TrackLabel />
          <TrackStage />
          <TrackStage />
          <TrackStage />
        </div>
        <hr />
      </div>
    );
  }
}
