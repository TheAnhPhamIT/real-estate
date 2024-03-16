import { useNavigate } from "react-router-dom";
import { Place } from "../../lib/dummyData";
import "./PlaceCard.scss";

type placeCardProps = {
  place: Place;
};

export default function PlaceCard({ place }: placeCardProps) {
  const navigate = useNavigate();

  const goToPlaceDetail = (placeId: number) => {
    navigate(placeId);
  };
  return (
    <div className="place-card">
      <div className="place-img">
        <img src={place.img} alt={place.title} />
      </div>
      <div className="infos">
        <h2 className="title">
          <a onClick={() => goToPlaceDetail(place.id)}>{place.title}</a>
        </h2>
        <span className="address">
          <img src="/assets/pin.png" alt="location" />
          <span>{place.address}</span>
        </span>
        <span className="price">$ {place.price}</span>
        <div className="info-wrap">
          <div className="left">
            <div className="bedroom left-item">
              <img src="/assets/bed.png" alt="bed" />
              <span>{place.bedroom} Bedroom</span>
            </div>
            <div className="bathroom left-item">
              <img src="/assets/bath.png" alt="bath" />
              <span>{place.bathroom} Bathroom</span>
            </div>
          </div>
          <div className="right">
            <button className="save-btn">
              <img src="/assets/save.png" alt="save" />
            </button>
            <button className="chat-btn">
              <img src="/assets/chat.png" alt="chat" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
