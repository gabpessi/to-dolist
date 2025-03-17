import { useState } from "react";
import "./List.css";
import EditIcon from "../assets/edit-icon.svg";
import DeleteIcon from "../assets/delete-icon.svg";

const List = ({ listItems, handleUpdateItem, handleDeleteItem }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditClick = (item) => {
    setEditId(item.id);
    setEditText(item.text);
  };

  const handleSaveClick = () => {
    handleUpdateItem(editId, editText);
    setEditId(null);
  };

  return (
    <div className="list">
      <ul>
        {listItems.map((item) => (
          <div className="list-item" key={item.id}>
            {editId === item.id ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <li>{item.text}</li>
            )}
            <div>
              {editId === item.id ? (
                <button onClick={handleSaveClick}>Salvar</button>
              ) : (
                <button onClick={() => handleEditClick(item)}>
                  <img src={EditIcon} alt="Editar" />
                </button>
              )}
              <button onClick={() => handleDeleteItem(item.id)}>
                <img src={DeleteIcon} alt="Deletar" />
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;
