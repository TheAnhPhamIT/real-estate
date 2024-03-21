import { useState } from "react";
import "./ImageSlider.scss";

type imageSliderProps = {
  images: string[];
  focusIdx?: number;
};

export default function ImageSlider({
  images,
  focusIdx = 0,
}: imageSliderProps) {
  const [activeIdx, setActiveIdx] = useState(focusIdx);

  return (
    <div className="image-slider">
      <div className="focus-image">
        <img src={images[activeIdx]} alt={`image #${activeIdx}`} />
      </div>
      <div className="images">
        {images.map((img, idx) => (
          <div
            className={activeIdx === idx ? "small-img active" : "small-img"}
            key={idx}
            onClick={() => setActiveIdx(idx)}
          >
            <img src={img} alt={`image #${idx}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
