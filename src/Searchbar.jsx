import { useState } from "react";
import List from "./List";

function Searchbar() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <>
      <div className="search">
        <p>Find your language or library</p>
        <div>
          <a href="https://react-portfolio-lauren-powers.netlify.app/features">
            {" "}
            <button className="button-54">Back</button>
          </a>
        </div>
        <input
          onChange={inputHandler}
          label="Search"
          placeholder="Search"
          className="search-bar"
        ></input>

        <List input={inputText} />
      </div>
    </>
  );
}

export default Searchbar;
