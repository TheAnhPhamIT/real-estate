import "./SizeFeatures.scss";

type sizeFeaturesProps = {
  area?: number;
  beds?: number;
  bathrooms?: number;
};

type sizeFeatureProps = {
  unit: string;
  num: number;
  icon: string;
};

function SizeFeature({ unit, num, icon }: sizeFeatureProps) {
  return (
    <div className="size-item">
      <img src={icon} alt={unit} />
      <span>
        {num} {unit}
      </span>
    </div>
  );
}

export default function SizeFeatures({
  area,
  beds,
  bathrooms,
}: sizeFeaturesProps) {
  return (
    <div className="size-features">
      {area && <SizeFeature unit="sqrt" num={area} icon="/assets/size.png" />}
      {beds && <SizeFeature unit="bed" num={beds} icon="/assets/bed.png" />}
      {bathrooms && (
        <SizeFeature unit="bathroom" num={bathrooms} icon="/assets/bath.png" />
      )}
    </div>
  );
}
