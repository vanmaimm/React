import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
class App extends Component{
  constructor (){
    super();
    this.todoList=[
      "Install NodeJS",
      "Create React App",
      "Write Code"
    ]
  }
render() {
  return (
    <div className="App">
      {
        this.todoList.map((item, index)=> <TodoItem key={index} title={item}/>)
      }
    </div>
  );
}
}
export default App;
