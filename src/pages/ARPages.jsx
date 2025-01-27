import React, { useEffect } from "react";
import "aframe";
import "ar.js";

function ARPages() {
  useEffect(() => {
    // Ensure AFRAME is properly initialized
    if (window.AFRAME) {
      console.log("AFRAME is ready!");
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh", margin: 0, padding: 0 }}>
      <a-scene
        vr-mode-ui="enabled: false"
        arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        embedded
      >
        {/* NFT Marker */}
        <a-nft
          type="nft"
          url="assets/marker/default-marker" // Path to your NFT marker files (without extension)
          smooth="true"
          smoothCount="10"
          smoothTolerance="0.01"
          smoothThreshold="5"
        >
          {/* 3D Box */}
          <a-box
            scale="100 100 100" // Adjust scale as needed
            position="0 0.5 0"
            material="color: red;"
          ></a-box>
        </a-nft>

        {/* Camera */}
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

export default ARPages;