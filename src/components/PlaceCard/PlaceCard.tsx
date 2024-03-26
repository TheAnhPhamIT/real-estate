import { useNavigate } from "react-router-dom";
import { Place } from "../../lib/dummyData";
import "./PlaceCard.scss";
import { useChatsUpdate } from "../../contexts/ChatContext";
import { useTranslation } from "react-i18next";

type placeCardProps = {
  place: Place;
};

export default function PlaceCard({ place }: placeCardProps) {
  const navigate = useNavigate();
  const { addChat } = useChatsUpdate();
  const { t } = useTranslation();

  function goToPlaceDetail(placeId: number) {
    navigate(`/places/${placeId}`);
  }

  function onChat() {
    addChat && addChat(place.userId);
  }
  return (
    <div className="place-card">
      <div className="place-img">
        <img
          src={place.img}
          alt={place.title}
          onClick={() => goToPlaceDetail(place.id)}
        />
      </div>
      <div className="infos">
        <h2 className="title" onClick={() => goToPlaceDetail(place.id)}>
          <span>{place.title}</span>
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
              <span>
                {place.bedroom} {t("bedroom")}
              </span>
            </div>
            <div className="bathroom left-item">
              <img src="/assets/bath.png" alt="bath" />
              <span>
                {place.bathroom} {t("bathroom")}
              </span>
            </div>
          </div>
          <div className="right">
            <button className="save-btn">
              <img src="/assets/save.png" alt="save" />
            </button>
            <button className="chat-btn" onClick={onChat}>
              <img src="/assets/chat.png" alt="chat" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
