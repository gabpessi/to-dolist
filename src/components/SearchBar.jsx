import "./SearchBar.css";
import AddIcon from "../assets/add-icon.svg";
import { useState } from "react";

const SearchBar = ({ handleAddItem }) => {
  const [listItem, setListItem] = useState("");

  const handleButtonClick = () => {
    if (listItem.trim() === "") return;
    handleAddItem(listItem);
    setListItem("");
  };

  const handleChange = (e) => {
    setListItem(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <>
      <h1>To-Do List 📝</h1>
      <div className="searchbar">
        <input
          className="search-input"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={listItem}
          placeholder="Adicione uma tarefa..."
        />
        <button onClick={handleButtonClick} className="add-button">
          <img src={AddIcon} alt="Adicionar" />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
