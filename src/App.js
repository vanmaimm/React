import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
class App extends Component{
  constructor (){
    super();
    this.todoList=[
      {'title':"Install NodeJS", 'isComplete':"true"},
      {'title':"Create React App"},
      {'title':"Write Code"}
    ]
  }
render() {
  return (
    <div className="App">
      {
        this.todoList.map((item, index)=>
         <TodoItem key={index} item={item} />)
      }
    </div>
  );
}
}
export default App;
