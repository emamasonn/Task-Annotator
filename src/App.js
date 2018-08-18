import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navegar from './components/Navigation.js';
import Form from './components/TodoForm.js'
import { todos } from './todos.json';


class App extends Component {
  constructor(){
    super();
    this.state = {
      title: 'Aplicación de tareas',
      todos: todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  removeTodo(index){
    if (window.confirm('Esta seguro que quiere eliminar esta tarea??')){
      this.setState({
        todos: this.state.todos.filter((e,i) => {
          return i !== index
        })
      })
    }
  }
  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <Navegar titulo={this.state.title} ntareas={this.state.todos.length}/>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <Form onAddTodo={this.handleAddTodo}/>
            </div>
            <div className="col-md-9">
              <div className="container">
                <div className="row">
                  {todos}
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
