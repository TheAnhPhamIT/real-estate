import "./Places.scss";
import Map from "../../components/Map/Map";
import Filter from "../../components/Filter/Filter";
import { listData } from "../../lib/dummyData";
import PlaceCard from "../../components/PlaceCard/PlaceCard";
import { LatLngTuple } from "leaflet";

const data = listData;
const position = [52.4797, -1.90269] as LatLngTuple;

export default function Places() {
  return (
    <div className="places">
      <div className="places-container">
        <div className="wrapper">
          <div className="filter-wrap">
            <h1 className="search-title">
              Search results for <b>London</b>
            </h1>
            <br />
            <Filter />
          </div>
          <div className="place-list">
            {data.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </div>
      </div>
      <div className="map-container">
        <Map center={position} places={listData} />
      </div>
    </div>
  );
}
