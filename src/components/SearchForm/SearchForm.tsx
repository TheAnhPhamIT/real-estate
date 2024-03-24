import { FormEvent, SyntheticEvent, useState } from "react";
import "./SearchForm.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type searchType = "buy" | "rent";

type searchFormData = {
  type: searchType;
  city: string;
  maxPrice: number | undefined;
  minPrice: number | undefined;
};

export default function SearchForm() {
  const [data, setData] = useState<searchFormData>({
    type: "buy",
    city: "",
    maxPrice: undefined,
    minPrice: undefined,
  });
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    const newData = {
      ...data,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    setData(newData);
  };

  const handleChangeType = (e: SyntheticEvent, type: searchType) => {
    e.preventDefault();
    setData((prev) => ({
      ...prev,
      type,
    }));
  };

  const onSearch = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate("/places");
  };

  return (
    <form>
      <div className="type">
        <button
          onClick={(e: SyntheticEvent) => handleChangeType(e, "buy")}
          className={data.type === "buy" ? "type-btn active" : "type-btn"}
        >
          {t("buy")}
        </button>
        <button
          onClick={(e: SyntheticEvent) => handleChangeType(e, "rent")}
          className={data.type === "rent" ? "type-btn active" : "type-btn"}
        >
          {t("rent")}
        </button>
      </div>
      <div className="inputs-wrapper">
        <input
          name="city"
          type="text"
          onChange={handleOnChange}
          value={data.city}
          placeholder={t("city-location")}
        />
        <input
          type="number"
          min={0}
          max={100000}
          name="maxPrice"
          value={data.maxPrice}
          placeholder={t("max-price")}
          onChange={handleOnChange}
        />
        <input
          type="number"
          min={0}
          max={100000}
          name="minPrice"
          placeholder={t("min-price")}
          onChange={handleOnChange}
        />
        <button type="submit" className="submit-btn" onClick={onSearch}>
          <img src="/assets/search.png" alt="search" />
        </button>
      </div>
    </form>
  );
}
