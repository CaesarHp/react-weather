import React, { useEffect, useState } from "react";

import classes from "./SearchBar.module.scss";
import searchIconActive from "../local-img/search-icon-active.svg";
import searchIconDisable from "../local-img/search-icon-disable.svg";

const SearchBar = function ({ onSetCity, error }) {
  const [textInput, setTextInput] = useState("");
  const [hasInput, setHasInput] = useState(false);

  const typeInputHandler = function (e) {
    setTextInput(e.target.value);
  };

  const searchSubmitHandler = function (e) {
    e.preventDefault();
    onSetCity(textInput);

    setTextInput("");
  };

  useEffect(() => {
    if (textInput.length > 1) {
      setHasInput(true);
    }

    if (textInput.length <= 1) {
      setHasInput(false);
    }
  }, [textInput]);

  return (
    <React.Fragment>
      <div>
        <form onSubmit={searchSubmitHandler} className={classes["search-bar"]}>
          <input
            onChange={typeInputHandler}
            type="text"
            placeholder={"Search your city..."}
            value={textInput}
            className={classes["search-bar-input"]}
          ></input>
          <button
            type="submit"
            className={classes["search-bar-button"]}
            disabled={!hasInput}
          >
            <img
              src={!hasInput ? searchIconDisable : searchIconActive}
              alt="icon"
              className={classes["search-bar-icon"]}
            />
          </button>
        </form>
        {error && (
          <p className={classes["search-bar-error-message"]}>{error}</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
