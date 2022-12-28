import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./Component/Filter";
import Header from "./Component/Header";
import Info from "./Component/Info";
import List from "./Component/List";

function App() {
  const [todo, setTodo] = useState([
    {
      done: true,
      text: "Taste JavaScript",
    },
    {
      text: "Code furiously",
      done: true,
    },
    {
      text: "Promote Mavo",
      done: false,
    },
    {
      text: "Give talks",
      done: false,
    },
    {
      text: "Write tutorials",
      done: true,
    },
    {
      text: "Have a life!",
      done: false,
    },
  ]);
  const [filterName, setFilterName] = useState("All");
  const [newTodo, setNewTodo] = useState(todo);
  const [isDone, setIsDone] = useState(false);
  const change = () => setTodo(todo.map((item) => ({ text: item.text, done: isDone })));

  useEffect(() => {
    setIsDone(!isDone);
  }, [todo]);

  useEffect(() => {
    console.log("filter name değişiti", filterName);
  }, [filterName]);

  useEffect(() => {
    console.log(filterName);
    setNewTodo(
      todo.filter((item) => {
        console.log(item, filterName);
        if (filterName === "All") return true;
        else if (filterName === "Active") return item.done === false;
        else if (filterName === "Completed") return item.done === true;
      })
    );
    console.log("newTodo", newTodo);
  }, [filterName]);

  return (
    <>
      <section className="todoapp">
        <Header todo={todo} setTodo={setTodo} setFilterName={setFilterName} />
        <section className="main">
          <input type="checkbox" className="toggle-all" id="toggle-all" onClick={change} />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <List
            todo={todo}
            setTodo={setTodo}
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            setFilterName={setFilterName}
          />
        </section>
        <Filter
          todo={todo}
          setTodo={setTodo}
          filterName={filterName}
          setFilterName={setFilterName}
          newTodo={newTodo}
        />
      </section>
      <Info />
    </>
  );
}

export default App;
