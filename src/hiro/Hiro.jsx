import React, { Component } from "react";
import "aframe";
import "aframe-ar"; // Correct library for AR.js integration in A-Frame

class Hiro extends Component {
  render() {
    return (
      <a-scene embedded arjs>
        {/* Marker with 'hiro' preset */}
        <a-marker preset="hiro">
          {/* A blue box inside the marker */}
          <a-box position="0 0.5 0" color="blue"></a-box>
        </a-marker>
        {/* Camera entity */}
        <a-entity camera></a-entity>
      </a-scene>
    );
  }
}

export default Hiro;
