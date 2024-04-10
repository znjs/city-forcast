"use client";

import { memo } from "react";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  useMap,
} from "react-leaflet";

export default memo(Map);

function Map() {
  const map = useRef(null);
  const markerRef1 = useRef(null);
  const markerRef2 = useRef(null);
  const iconMap = new L.Icon({
    iconUrl: require("../../assets/map-pin.png"),
    iconSize: new L.Point(60, 60),
  });

  const icon1 = new L.Icon({
    iconUrl: "https://img.icons8.com/color/48/pin.png",
    iconSize: [30, 30],
    iconAnchor: [0, 30],
    popupAnchor: [0, -20],
  });
  const icon2 = new L.Icon({
    iconUrl: "https://img.icons8.com/color-glass/48/define-location.png",
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -20],
  });

  function SmoothZoom() {
    const map = useMap();

    useEffect(() => {
      map.setZoom(8, { animate: true, duration: 2 });
      map.panInsideBounds(
        [
          [12.9716, 77.5946],
          [12.9165, 79.1325],
        ],
        {
          animate: true,
          duration: 3,
        }
      );
    }, [map]);

    return null;
  }

  return (
    <>
      <MapContainer
        ref={map}
        // center={[28.7041, 77.1025]}
        center={[0, 0]}
        zoom={13}
        zoomControl={false}
        className="h-[calc(100vh-64px)] w-full"
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
        <Marker
          eventHandlers={{
            mouseover: (ele) => {
              // @ts-ignore
              markerRef1.current && markerRef1.current?.openPopup();
            },
            mouseout: () => {
              // @ts-ignore
              markerRef1.current && markerRef1.current?.closePopup();
            },
          }}
          icon={icon1}
          ref={markerRef1}
          position={[12.9716, 77.5946]}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker
          eventHandlers={{
            mouseover: () => {
              // @ts-ignore
              markerRef2.current && markerRef2.current?.openPopup();
            },
            mouseout: () => {
              // @ts-ignore
              markerRef2.current && markerRef2.current?.closePopup();
            },
          }}
          ref={markerRef2}
          riseOnHover={true}
          icon={icon2}
          position={[12.9165, 79.1325]}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <ZoomControl position="bottomleft" />
        <SmoothZoom />
      </MapContainer>
    </>
  );
}
