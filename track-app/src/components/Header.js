import React from 'react';

import '../styles/Header.css';

export class Header extends React.Component {
  render() {
    return <div className="header">
      <h1>Thursday<hr /></h1>
      <div className="subheader">
        <p className="header-date">04 / 10 / 2001<hr /></p>
        <p className="header-time">4:09 PM<hr /></p>
      </div>
    </div>
  }
}
