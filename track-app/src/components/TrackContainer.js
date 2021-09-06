import React from 'react';
import { Track } from './Track.js';

import '../styles/Track.css';

export class TrackContainer extends React.Component {
  render() {
    return <div className="track-container">
    <Track />
    <Track />
    <Track />
    </div>
  }
}
