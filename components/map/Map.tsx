"use client";
import "leaflet/dist/leaflet.css";
import { useRef } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  const markerRef = useRef(null);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100vh" }}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
      <Marker ref={markerRef} position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export { Map };
