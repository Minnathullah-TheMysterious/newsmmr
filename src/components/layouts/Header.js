import React, { useState } from "react";
import { Countries } from "./../../apis/Countries";
import { Select } from "antd";
import { FiSearch } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { useCountry } from "../../context/CountryContext";
import { Categories } from "../../apis/Categories";
import { useCategory } from "../../context/CategoryContext";
import { useSearch } from "../../context/SearchContext";

const Header = () => {
  const [searchValueOnChange, setSearchValueOnChange] = useState("");
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("dark");

  //Context apis
  const [country, setCountry] = useCountry();
  const [category, setCategory] = useCategory();
  const [search, setSearch] = useSearch();

  const handleSearchChange = (e) => {
    setSearchValueOnChange(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(searchValueOnChange);
    setSearchValueOnChange("");
  };

  const handleCountryChange = (value) => {
    setCountry(value);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  const handleDefaultButton = (e) => {
    e.preventDefault();
    setSearch("");
    setCountry("in");
    setCategory("general");
  };

  //disable the button when input box is empty
  const isSearching = () => {
    return searchValueOnChange.length ? false : true;
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("light");
    } else {
      setMode("light");
      setModeText("dark");
    }
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-md bg-body-tertiary fixed-top"
        data-bs-theme={mode}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand fs-5 fw-semibold" to={"/"}>
            NewsMMR
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2 mb-lg-0 mx-lg-1">
                <Select
                  style={{ minWidth: 150 }}
                  bordered={true}
                  size="large"
                  value={category}
                  onChange={handleCategoryChange}
                >
                  {Categories.map((category, index) => (
                    <Select.Option
                      value={category.category_code}
                      key={index}
                      className="fs-6"
                    >
                      {category.category_name}
                    </Select.Option>
                  ))}
                </Select>
              </li>
              <li className="nav-item mb-2 mb-lg-0 mx-lg-1">
                <Select
                  style={{ minWidth: 150 }}
                  size="large"
                  bordered={true}
                  showSearch
                  value={country}
                  onChange={handleCountryChange}
                >
                  {Countries.map((country) => (
                    <Select.Option
                      key={country._id}
                      value={country.country_code}
                      className="fs-6"
                    >
                      {country.country_name}
                    </Select.Option>
                  ))}
                </Select>
              </li>
            </ul>
            <form
              className="d-flex justify-content-center mb-2 mb-lg-0"
              role="search"
              onSubmit={handleSearchSubmit}
            >
              <button
                className="btn btn-outline-success"
                type="submit"
                disabled={isSearching()}
              >
                <FiSearch className="fs-5" />
              </button>
              <input
                className="form-control mx-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchValueOnChange}
                onChange={handleSearchChange}
              />
            </form>
            <button
              className="btn btn-outline-info mx-lg-2 mb-2 mb-lg-0 fw-semibold"
              onClick={handleDefaultButton}
            >
              Set To Default
            </button>
            <div className="form-check form-switch mx-lg-2 mb-2 mb-lg-0">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={toggleMode}
              />
              <label
                className={`form-check-label text-${modeText}`}
                htmlFor="flexSwitchCheckDefault"
              >
                Darkmode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
