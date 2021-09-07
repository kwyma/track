import React from 'react';
import { VertTrackLabel } from './VertTrackLabel.js';
import { VertTrackStage } from './VertTrackStage.js';

import '../../styles/VertTrack.css';

export class VertTrack extends React.Component {

  render() {
    let wrapperClass = this.props.perspective ?
      "verttrack-wrapper-perspective" :
      "verttrack-wrapper";

    let trackClass = this.props.perspective ?
      "verttrack-reverse" :
      "verttrack";
    return (
      <div className={wrapperClass}>
        <div className={trackClass}>
          <VertTrackLabel />
          <VertTrackStage />
          <VertTrackStage />
          <VertTrackStage />
        </div>
      </div>
    );
  }
}

VertTrack.defaultProps = {
  perspective: false
}