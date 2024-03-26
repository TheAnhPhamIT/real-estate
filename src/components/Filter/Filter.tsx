import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./Filter.scss";
import { useTranslation } from "react-i18next";

export type SearchFormData = {
  city: string;
  type: "" | "buy" | "rent";
  property: "" | "house" | "apartment" | "condo" | "land";
  minPrice: number | null;
  maxPrice: number | null;
  bedroom: number | null;
};

type FilterProps = {
  onSubmit: (queryData: SearchFormData) => void;
};

export default function Filter({ onSubmit }: FilterProps) {
  const [data, setData] = useState<SearchFormData>({
    city: "",
    type: "",
    property: "",
    minPrice: null,
    maxPrice: null,
    bedroom: null,
  });

  const { t } = useTranslation();

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = e.currentTarget;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    // do something
    onSubmit(data);
  }

  return (
    <form className="filter-form">
      <div className="input-item city-search">
        <label htmlFor="city">{t("location")}</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder={t("city-location")}
          onChange={handleInputChange}
        />
      </div>
      <div className="inputs">
        <div className="input-item">
          <label htmlFor="type">{t("type")}</label>
          <select
            name="type"
            id="type"
            value={data.type}
            onChange={handleInputChange}
          >
            <option value="">{t("any")}</option>
            <option value="buy">{t("buy")}</option>
            <option value="rent">{t("rent")}</option>
          </select>
        </div>
        <div className="input-item">
          <label htmlFor="property">{t("property")}</label>
          <select
            name="property"
            id="property"
            value={data.property}
            onChange={handleInputChange}
          >
            <option value="">{t("any")}</option>
            <option value="house">{t("house")}</option>
            <option value="apartment">{t("apartment")}</option>
            <option value="condo">{t("condo")}</option>
            <option value="land">{t("land")}</option>
          </select>
        </div>
        <div className="input-item">
          <label htmlFor="minPrice">{t("min-price")}</label>
          <input
            type="number"
            min={0}
            max={1000000}
            name="minPrice"
            placeholder="any"
            onChange={handleInputChange}
            value={data.minPrice!}
          />
        </div>
        <div className="input-item">
          <label htmlFor="maxPrice">{t("max-price")}</label>
          <input
            type="number"
            min={0}
            max={1000000}
            name="maxPrice"
            placeholder="any"
            onChange={handleInputChange}
            value={data.maxPrice!}
          />
        </div>
        <div className="input-item">
          <label htmlFor="bedroom">{t("bedroom")}</label>
          <input
            type="number"
            min={0}
            max={10}
            name="bedroom"
            placeholder="any"
            onChange={handleInputChange}
            value={data.bedroom!}
          />
        </div>
        <button className="search-btn" onClick={handleSubmit}>
          <img src="/assets/search.png" alt="search" />
        </button>
      </div>
    </form>
  );
}
