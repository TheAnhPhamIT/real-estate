import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.scss";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Place } from "../../lib/dummyData";
import MapMarker from "../MapMarker/MapMarker";

type mapProps = {
  center: LatLngTuple;
  zoom?: number;
  scrollWhellZoom?: boolean;
  places?: Place[];
};

export default function Map({
  center,
  zoom = 7,
  scrollWhellZoom = false,
  places = [],
}: mapProps) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={scrollWhellZoom}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map((place) => {
        return (
          <MapMarker
            key={place.id}
            position={[place.latitude, place.longitude]}
            {...place}
          />
        );
      })}
    </MapContainer>
  );
}
