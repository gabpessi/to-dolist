import './SearchBar.css'
import { useState } from 'react'

  const SearchBar = ({handleAddItem}) => {

  const [listItem, setListItem] = useState("")  

  const handleButtonClick = () => {
    if (listItem.trim() === "") return
    handleAddItem(listItem)
    setListItem("")
  };

  const handleChange = (e) => {
    setListItem(e.target.value)
  }

  return (
    <div className="searchbar">
      <input onChange={handleChange} value={listItem} placeholder="Adicione uma tarefa..." />
      <button onClick={handleButtonClick} className="add-button">+</button>
    </div>
  )
}

export default SearchBar