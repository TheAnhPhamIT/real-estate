import { useNavigate, useParams } from "react-router-dom";
import "./PlaceDetail.scss";
import { useEffect, useState } from "react";
import { Place, listData, placeImages, userData } from "../../lib/dummyData";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Map from "../../components/Map/Map";
import { LatLngTuple } from "leaflet";
import GeneralFeatures, {
  generalFeaturesProps,
} from "../../components/GeneralFeatures/GeneralFeatures";
import SizeFeatures from "../../components/SizeFeatures/SizeFeatures";
import NearbyPlaces from "../../components/NearbyPlaces/NearbyPlaces";
import { useUser } from "../../contexts/UserContext";
import Modal from "../../components/Modal/Modal";
import { useChatsUpdate } from "../../contexts/ChatContext";

// constants you should replace when write real app
const generalFeatures: generalFeaturesProps = {
  utilities: "Renter is responsible",
  petPolicy: "Pets Allowed",
  propertyFees: "Must have 3x the rent in total household income",
};

const images = placeImages;
const owner = userData;

export default function PlaceDetail() {
  const { placeId } = useParams();
  const [place, setPlace] = useState<Place | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const user = useUser();
  const { addChat } = useChatsUpdate();

  useEffect(() => {
    // load detail place if needed
    if (placeId === undefined) return;
    setPlace(listData.find((place) => place.id === +placeId) || null);
  }, []);

  function handleSavePlace() {
    if (!user) {
      setOpenModal(true);
    } else {
      // call api to save the place to saved list
    }
  }

  function handleChat() {
    if (!user) {
      setOpenModal(true);
    } else {
      // open box chat
      if (!place?.userId) return;
      addChat && addChat(place.userId);
    }
  }

  return (
    <div className="place-detail">
      <div className="left">
        <div className="wrapper">
          <div className="image-container">
            <ImageSlider images={images} />
          </div>
          <div className="infos">
            <div className="info-wrap">
              <div className="left-part">
                <h1 className="title">{place?.title}</h1>
                <div className="address">
                  <img src="/assets/pin.png" alt="adress icon" />
                  <span>{place?.address}</span>
                </div>
                <div className="price">$ {place?.price}</div>
              </div>
              <div className="right-part">
                <figure className="user">
                  <img src={owner.img} alt={owner.name} />
                  <figcaption>{owner.name}</figcaption>
                </figure>
                <button className="send-message-btn" onClick={handleChat}>
                  <img src="/assets/chat.png" alt="send message" />
                  <span>Send a message</span>
                </button>
                <button className="save-btn" onClick={handleSavePlace}>
                  <img src="/assets/save.png" alt="save place" />
                  <span>Save the place</span>
                </button>
              </div>
            </div>

            <div className="desc">
              Future alike hill pull picture swim magic chain seed engineer nest
              outer raise bound easy poetry gain loud weigh me recognize farmer
              bare danger. actually put square leg vessels earth engine matter
              key cup indeed body film century shut place environment were stage
              vertical roof bottom lady function breeze darkness beside tin view
              local breathe carbon swam declared magnet escape has from pile
              apart route coffee storm someone hold space use ahead sheep jungle
              closely natural attached part top grain your grade trade corn
              salmon trouble new bend most teacher range anybody every seat
              fifteen eventually
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="place-infos">
          <div className="info-item">
            <h2 className="title">General</h2>
            <GeneralFeatures {...generalFeatures} />
          </div>
          <div className="info-item">
            <h2 className="title">Size</h2>
            <SizeFeatures
              bathrooms={place?.bathroom}
              beds={place?.bedroom}
              area={80}
            />
          </div>
          <div className="info-item">
            <h2 className="title">Nearby Places</h2>
            <NearbyPlaces busStop={300} restaurent={500} school={800} />
          </div>
          <div className="info-item">
            <h2 className="title">Location</h2>
            <div className="map-wrap">
              {place && (
                <Map
                  center={[place?.latitude, place?.longitude] as LatLngTuple}
                  places={[place]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <div className="modal-content">
          <h3>You need to login first!!!</h3>
          <p>To use this function you have to login</p>
          <div className="btns">
            <button className="login-btn" onClick={() => navigate("/login")}>
              Go to Login page
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
