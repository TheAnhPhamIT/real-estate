import { useTranslation } from "react-i18next";
import "./NearbyPlaces.scss";

type nearbyPlacesProps = {
  school?: number;
  restaurent?: number;
  busStop?: number;
};

type nearbyPlaceProps = {
  placeName: string;
  unit: string;
  num: number;
  icon: string;
};

export function NearybyPlace({ placeName, unit, num, icon }: nearbyPlaceProps) {
  return (
    <figure className="nearby-place">
      <div className="img-wrap">
        <img src={icon} alt={placeName} />
      </div>
      <figcaption>
        <h6>{placeName}</h6>
        <span>
          {num}
          {unit}
        </span>
      </figcaption>
    </figure>
  );
}

export default function NearbyPlaces({
  restaurent,
  school,
  busStop,
}: nearbyPlacesProps) {
  const { t } = useTranslation();
  return (
    <section className="nearby-places">
      {school && (
        <NearybyPlace
          placeName={t("school")}
          unit="m"
          num={school}
          icon="/assets/school.png"
        />
      )}
      {busStop && (
        <NearybyPlace
          placeName={t("bus-stop")}
          unit="m"
          num={busStop}
          icon="/assets/bus.png"
        />
      )}
      {restaurent && (
        <NearybyPlace
          placeName={t("restaurant")}
          unit="m"
          num={restaurent}
          icon="/assets/restaurant.png"
        />
      )}
    </section>
  );
}
