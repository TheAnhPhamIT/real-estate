import "./GeneralFeatures.scss";

export type generalFeaturesProps = {
  utilities?: string;
  petPolicy?: string;
  propertyFees?: string;
};

type generalFeatureProps = {
  name: string;
  icon: string;
  info: string;
};

function GeneralFeature({ name, icon, info }: generalFeatureProps) {
  return (
    <div className="item">
      <div className="img-wrap">
        <img src={icon} alt={name} />
      </div>

      <div className="text-wrap">
        <h6>{name}</h6>
        <span>{info}</span>
      </div>
    </div>
  );
}
export default function GeneralFeatures({
  utilities,
  petPolicy,
  propertyFees,
}: generalFeaturesProps) {
  return (
    <div className="general-features">
      {utilities && (
        <GeneralFeature
          name="Utilities"
          icon="/assets/utility.png"
          info={utilities}
        />
      )}
      {petPolicy && (
        <GeneralFeature
          name="Pet policy"
          icon="/assets/pet.png"
          info={petPolicy}
        />
      )}
      {propertyFees && (
        <GeneralFeature
          name="Property Fees"
          icon="/assets/fee.png"
          info={propertyFees}
        />
      )}
    </div>
  );
}
