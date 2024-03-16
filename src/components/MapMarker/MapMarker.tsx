import { LatLngTuple } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import "./MapMarker.scss";

type mapMarkerProps = {
  position: LatLngTuple;
  img: string;
  title: string;
  price: number;
  bedroom: number;
};

export default function MapMarker({
  position,
  img,
  title,
  price,
  bedroom,
}: mapMarkerProps) {
  return (
    <Marker position={position}>
      <Popup>
        <div className="popup-wrapper">
          <img src={img} alt={title} />
          <div className="infos">
            <span className="title">{title}</span>
            <span className="bedroom">
              {bedroom} {bedroom > 1 ? "bedrooms" : "bedroom"}
            </span>
            <b className="price">$ {price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
