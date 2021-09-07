import React from 'react';
import { Option } from './Option.js';

import '../../styles/Menu.css';
import { VIEWS } from '../../constants.js';

export class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: false
    }
  }

  tabMenu = (event) => {
    if (event.keyCode === 9) {
      event.preventDefault();
      this.toggleMenu();
    }
  }

  toggleMenu = () => {
    this.setState({
      display: !this.state.display
    })
  }

  setView = (setView) => {
    console.log("set view");
    this.toggleMenu();
    this.props.setViewFunction(setView);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.tabMenu);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.tabMenu);
  }

  render() {
    let menuDisplay = this.state.display ? 'menu-show' : 'menu-hide';
    return (
      <div className={`menu-view ${menuDisplay}`}>
        <div className="menu-container">
          <Option
            name="Multi Track"
            icon="/menu_multitrack.png"
            show={this.state.display}
            onClick={() => this.setView(VIEWS.MULTITRACK)}
          />
          <Option
            name="1 Track"
            icon="/menu_1track.png"
            show={this.state.display}
            onClick={() => this.setView(VIEWS.SINGLETRACK)}
          />
          <Option
            name="Day"
            icon="/menu_day.png"
            show={this.state.display}
            onClick={() => this.setView(VIEWS.DAY)}
          />
          <Option
            name="Path"
            icon="/menu_path.png"
            show={this.state.display}
            onClick={() => this.setView(VIEWS.PATH)}
          />
          <Option
            name="Configure"
            icon="/menu_hammer.png"
            show={this.state.display}
          />
          <Option
            name="Settings"
            icon="/menu_settings.png"
            show={this.state.display}
          />
        </div>
      </div>
    );
  }
}
