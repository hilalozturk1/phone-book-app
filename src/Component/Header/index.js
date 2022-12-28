import { useState } from "react";

function Header({ todo, setTodo, setFilterName }) {
  const [newTodo, setNewTodo] = useState({ text: "", done: false });
  const addValue = (e) => {
    e.preventDefault();
    if (!newTodo.text) return false;
    setTodo([...todo, newTodo]);
    setFilterName("All");
    setNewTodo({ text: "", done: false });
  };
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={addValue}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            name="text"
            value={newTodo.text}
            onChange={(e) => setNewTodo({ ...newTodo, [e.target.name]: e.target.value })}
          />
        </form>
      </header>
    </>
  );
}

export default Header;
