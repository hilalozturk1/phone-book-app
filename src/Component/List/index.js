import { useEffect } from "react";

function List({ todo, setTodo, newTodo, setNewTodo, setFilterName }) {
  
  useEffect(() => {
    setNewTodo(todo);
    setFilterName("All");
    console.log("new todo", newTodo);
    console.log("todo:", todo);
  }, [todo]);

  return (
    <ul className="todo-list">
      {newTodo.map((item, idx) => (
        <li className={item.done === true ? "completed" : ""} key={idx}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={() => {
                setTodo([
                  { text: item.text, done: !item.done },
                  ...todo.filter((item, index) => index !== idx),
                ]);
              }}
              value={item.done}
              checked={item.done}
            />
            <label>{item.text}</label>
            <button
              className="destroy"
              onClick={() =>
                setTodo(
                  todo.filter((removeItem) => {
                    return item !== removeItem;
                  })
                )
              }
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
