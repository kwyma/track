import React from 'react';
import { Header } from '../Header.js';
import { Track } from '../Track/Track.js';

import '../../styles/TrackViews.css';

export class SingleTrackView extends React.Component {
  render() {
    return (
      <div className="track-view">
        <Header />
        <div className="singletrack-container">
          <Track solo={true} />
        </div>
      </div>
    );
  }
}
