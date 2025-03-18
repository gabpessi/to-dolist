import { useState, useEffect, useRef } from "react";
import EditIcon from "../assets/edit-icon.svg";
import DeleteIcon from "../assets/delete-icon.svg";
import CheckBox from "../assets/checkbox.svg";
import CheckedIcon from "../assets/checked-icon.svg";
import "./List.css";

const List = ({ listItems, handleUpdateItem, handleDeleteItem }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [checkedItems, setCheckedItems] = useState({});
  const [isInvalid, setIsInvalid] = useState(false);

  const editInputRef = useRef(null);


  // Foca no input de edição
  useEffect(() => {
    if (editId !== null && editInputRef.current) {
      editInputRef.current.focus(); 
    }
  }, [editId]);

  // Carregar checkboxes do LocalStorage
  useEffect(() => {
    const storedChecked = localStorage.getItem("checkedItems");
    if (storedChecked) {
      setCheckedItems(JSON.parse(storedChecked)); 
    }
  }, []);

  // Salvar estado dos checkboxes no LocalStorage sempre que houver mudança
  useEffect(() => {
    if (Object.keys(checkedItems).length > 0) {
      localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
    }
  }, [checkedItems]);

  const handleEditClick = (item) => {
    setEditId(item.id);
    setEditText(item.text);
  };

  const handleSaveClick = () => {
    if (editText.trim() === "") {
      setIsInvalid(true);
      return;
    }
    handleUpdateItem(editId, editText);
    setEditId(null);
    setIsInvalid(false);
  };

  // Função para alternar o estado de checked de um item específico
  const handleCheckBoxClick = (id) => {
    setCheckedItems((prev) => {
      const newCheckedItems = { ...prev, [id]: !prev[id] }; 
      return newCheckedItems;
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSaveClick(); 
    }
  };

  return (
    <div className="list">
      {listItems.length === 0 ? (
        <p className="empty-list">Suas tarefas aparecerão aqui.</p>
      ) : (
        <ul>
          {listItems.map((item) => (
            <div className="list-item" key={item.id}>
              {editId === item.id ? (
                <input
                  ref={editInputRef}
                  className={`edit-input ${isInvalid ? "invalid" : ""}`}
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              ) : (
                <li className={checkedItems[item.id] ? "checked" : ""}>
                  {item.text}
                </li>
              )}
              <div>
                {editId === item.id ? (
                  <button className="salvar-btn" onClick={handleSaveClick}>
                    Salvar
                  </button>
                ) : (
                  <>
                    <button onClick={() => handleCheckBoxClick(item.id)}>
                      <img
                        className="list-icons"
                        src={checkedItems[item.id] ? CheckedIcon : CheckBox}
                        alt=""
                      />
                    </button>
                    <button onClick={() => handleEditClick(item)}>
                      <img className="list-icons" src={EditIcon} alt="Editar" />
                    </button>
                    <button onClick={() => handleDeleteItem(item.id)}>
                      <img className="list-icons" src={DeleteIcon} alt="Deletar" />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
