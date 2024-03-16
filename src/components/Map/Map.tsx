import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.scss";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { listData } from "../../lib/dummyData";
import MapMarker from "../MapMarker/MapMarker";

const position = [52.4797, -1.90269] as LatLngTuple;
const data = listData;

export default function Map() {
  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((item) => {
        return (
          <MapMarker
            key={item.id}
            position={[item.latitude, item.longitude]}
            {...item}
          />
        );
      })}
    </MapContainer>
  );
}
