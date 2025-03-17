import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import List from './components/List'

function App() {

  const[listItems, setListItems] = useState([])

  const handleAddItem = (listItem) => setListItems([...listItems, { id: crypto.randomUUID(), text: listItem }])

  const handleUpdateItem = (id, newText) => {
    setListItems(
      listItems.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setListItems(listItems.filter((item) => item.id !== id));
  };





  return (
    <div className="container">
      <SearchBar handleAddItem={handleAddItem}/>
      <List listItems={listItems} handleUpdateItem={handleUpdateItem} handleDeleteItem={handleDeleteItem}/>
    </div>
  )
}

export default App
