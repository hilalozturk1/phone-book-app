import React from "react";

function Filter({ todo, setTodo, filterName, setFilterName, newTodo }) {
  const clicked = (e) => {
    return e.target.innerHTML === "All"
      ? setFilterName("All")
      : e.target.innerHTML === "Active"
      ? setFilterName("Active")
      : setFilterName("Completed");
  };

  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>{newTodo.length + " "}</strong>
          items left
        </span>

        <ul className="filters" onClick={clicked}>
          <li>
            <a href="#/" className={filterName === "All" ? "selected" : ""}>
              All
            </a>
          </li>
          <li>
            <a href="#/active" className={filterName === "Active" ? "selected" : ""}>
              Active
            </a>
          </li>
          <li>
            <a href="#/completed" className={filterName === "Completed" ? "selected" : ""}>
              Completed
            </a>
          </li>
        </ul>
        <button
          className="clear-completed"
          onClick={(e) => setTodo(todo.filter((item) => item.done !== true))}
        >
          Clear completed
        </button>
      </footer>
    </>
  );
}

export default Filter;
