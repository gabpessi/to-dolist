import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import List from "./components/List";

function App() {
  const [listItems, setListItems] = useState([]);

  // Carregar tarefas do LocalStorage ao iniciar o app
  useEffect(() => {
    const storedItems = localStorage.getItem("todoList");
    if (storedItems) {
      try {
        setListItems(JSON.parse(storedItems));
      } catch (error) {
        console.error("Erro ao carregar tarefas:", error);
        setListItems([]); // Evita crash se o localStorage estiver corrompido
      }
    }
  }, []);

  // Salvar tarefas no LocalStorage sempre que a lista for alterada
  useEffect(() => {
    if (listItems.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(listItems));
    }
  }, [listItems]);

  const handleAddItem = (listItem) => {
    const newItem = { id: crypto.randomUUID(), text: listItem };
    setListItems((prev) => [...prev, newItem]);
  };

  const handleUpdateItem = (id, newText) => {
    setListItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, text: newText } : item))
    );
  };

  const handleDeleteItem = (id) => {
    setListItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <SearchBar handleAddItem={handleAddItem} />
      <List
        listItems={listItems}
        handleUpdateItem={handleUpdateItem}
        handleDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default App;
