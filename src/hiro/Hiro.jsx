import React, { useEffect } from "react";

function Hiro() {
  useEffect(() => {
    const marker = document.querySelector("a-marker");
    const box = document.querySelector("a-box");

    // Named event handlers for adding/removing
    const handleMarkerFound = () => {
      console.log("Marker detected! Box should be visible.");
      if (box) {
        box.setAttribute("visible", "true");
      }
    };

    const handleMarkerLost = () => {
      console.log("Marker lost! Box is hidden.");
      if (box) {
        box.setAttribute("visible", "false");
      }
    };

    if (marker) {
      marker.addEventListener("markerFound", handleMarkerFound);
      marker.addEventListener("markerLost", handleMarkerLost);
    }

    // Cleanup
    return () => {
      if (marker) {
        marker.removeEventListener("markerFound", handleMarkerFound);
        marker.removeEventListener("markerLost", handleMarkerLost);
      }
    };
  }, []);

  return (
    <a-scene
      embedded
      vr-mode-ui="enabled: false"
      arjs="sourceType: webcam; trackingMethod: best; debugUIEnabled: false;"
    >
      {/* Hiro Marker */}
      <a-marker preset="hiro">
        {/* Add a blue box with rotation animation */}
        <a-box
          position="100 150 0"
          material="color: blue; opacity: 1;"
          scale="1000 1000 1000"
          visible="false" // Initially hidden
          animation="property: rotation; to: 0 360 0; loop: true; dur: 5000"
        ></a-box>
      </a-marker>

      {/* Camera */}
      <a-entity camera position="0 0 0" look-controls></a-entity>
    </a-scene>
  );
}

export default Hiro;
