import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos'
import Header from './layout/Header'
import AddTodo from './components/AddTodo'
import SearchTodo from './components/SearchTodo'
import About from './components/About'
import { v4 as uuidv4 } from 'uuid'
import './App.css';

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "working on somenthing",
      completed: false
    },
    {
      id: uuidv4(),
      title: "working on somenthing2",
      completed: false
    }
  ]);

  const [filtered, setFiltered] = useState(todos);

  const [filtervalue, setFilterValue] = useState({ value: 'all' });


  const markComplete = (id) => {
    setFiltered(filtered.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    );
    searchTodo(filtervalue);
  }

  const delTodo = (id) => {
    setTodos(todos => [...todos.filter(todo => todo.id !== id)]);
    setFiltered(filter => [...todos.filter(todo => todo.id !== id)]);
  }
  const addTodo = (title) => {
    const id = uuidv4();
    setTodos(todos => [...todos, { id: id, title: title, completed: false }]);
    setFiltered(filter => [...todos, { id: id, title: title, completed: false }]);
  }


  const searchTodo = (value) => {
    if (value.value === "completed") {
      setFiltered([...todos.filter(todo => todo.completed === true)]);
      setFilterValue({ value: 'completed' });
    }
    else if (value.value === "notCompleted") {
      setFiltered([...todos.filter(todo => todo.completed === false)]);
      setFilterValue({ value: 'notCompleted' });
    }
    else {
      setFiltered(todos);
      setFilterValue({ value: 'all' });
    }
  }



  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <div className="toDoAddSearchDiv">
              <AddTodo addTodo={addTodo} />
              <SearchTodo SearchTodo={searchTodo}></SearchTodo>
            </div>
            <div className="toDoList">
              <Todos todos={filtered}
                markComplete={markComplete}
                delTodo={delTodo} />
            </div>
          </React.Fragment>
        )} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );

}

export default App;
