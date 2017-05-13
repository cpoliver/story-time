import React, { Component } from 'react';

import './overlay.css';
import referenceImage from '../../../public/gmt_master_pepsi_overlay.jpg';

class Overlay extends Component {
  constructor(props) {
    super(props);

    this.state = { opacity: 25 };

    this.onOpacityChange = this.onOpacityChange.bind(this);
  }

  onOpacityChange(event) {
    this.setState({
      opacity: event.target.value
    });
  }

  render() {
    const { opacity } = this.state;

    return (
      <div className="overlay">
        <input type="number" min="0" max="100" value={opacity} onChange={event => this.onOpacityChange(event)} />
        <img src={referenceImage} alt="overlay" style={{ opacity: opacity / 100 }} />
      </div>
    );
  }
}

export default Overlay;
