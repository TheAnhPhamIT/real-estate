import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./Filter.scss";

type formData = {
  city: string;
  type: "" | "buy" | "rent";
  property: "" | "house" | "apartment" | "condo" | "land";
  minPrice: number | undefined;
  maxPrice: number | undefined;
  bedroom: number | undefined;
};

export default function Filter() {
  const [data, setData] = useState<formData>({
    city: "",
    type: "",
    property: "",
    minPrice: undefined,
    maxPrice: undefined,
    bedroom: undefined,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const newData = {
      ...data,
      [e.currentTarget.name]: [e.currentTarget.value],
    };
    setData(newData);
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    // do something
  };

  return (
    <form className="filter-form">
      <div className="input-item city-search">
        <label htmlFor="city">Location</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="City Location"
          onChange={handleInputChange}
        />
      </div>
      <div className="inputs">
        <div className="input-item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type" onChange={handleInputChange}>
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="input-item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property" onChange={handleInputChange}>
            <option value="">any</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="input-item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            min={0}
            max={1000000}
            name="minPrice"
            placeholder="any"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            min={0}
            max={1000000}
            name="maxPrice"
            placeholder="any"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="number"
            min={0}
            max={10}
            name="bedroom"
            placeholder="any"
            onChange={handleInputChange}
          />
        </div>
        <button className="search-btn" onClick={onSubmit}>
          <img src="/assets/search.png" alt="search" />
        </button>
      </div>
    </form>
  );
}
