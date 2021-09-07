import React from 'react';

import '../styles/Header.css';

export class Header extends React.Component {
  render() {
    return <div className="header">
      <h1>Thursday<hr /></h1>
      <div className="subheader">
        <span>04 / 10 / 2001<hr /></span>
        <span>4:09 PM<hr /></span>
      </div>
    </div>
  }
}
