import React from 'react';

import '../../styles/Menu.css';

export class Option extends React.Component {
  render() {
    let optionDisplay = this.props.display ? "option-show" : "option-hide";
    return (
      <div className={`option ${optionDisplay}`} onClick={this.props.onClick}>
        <img src={this.props.icon} alt={this.props.name} />
        <span>
          <p>{this.props.name}</p>
          <hr />
        </span>
      </div>
    );
  }
}
