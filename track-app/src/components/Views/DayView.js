import React from 'react';
import { Header } from '../Header.js';
import { VertTrack } from '../Track/VertTrack.js';

import '../../styles/Day.css';
import '../../styles/VertTrack.css';

export class DayView extends React.Component {
  render() {
    return (
      <div className="day-view">
        <Header />
        <div className="daytrack-container">
          <VertTrack />
          <VertTrack />
          <VertTrack />
        </div>
      </div>
    );
  }
}
