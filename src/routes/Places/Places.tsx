import "./Places.scss";
import Filter, { SearchFormData } from "@components/Filter/Filter";
import { listData } from "@/lib/dummyData";
import PlaceCard from "@components/PlaceCard/PlaceCard";
import { LatLngTuple } from "leaflet";
import { useTranslation } from "react-i18next";
import Map from "@components/Map/Map";
// import { api } from "../../services";

const data = listData;
const position = [52.4797, -1.90269] as LatLngTuple;

export default function Places() {
  const { t } = useTranslation();

  async function onSearch(data: SearchFormData) {
    console.log(data);
    // const res = await api.get("/places", { params: data });
    // update places list
  }

  return (
    <div className="places">
      <div className="places-container">
        <div className="wrapper">
          <div className="filter-wrap">
            <h1 className="search-title">
              {t("search-results")} <b>London</b>
            </h1>
            <br />
            <Filter onSubmit={onSearch} />
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
