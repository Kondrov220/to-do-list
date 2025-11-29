import './App.css';
import ToDo from './commponents/TodoList/TodoList';
import styled from 'styled-components';
import { Component } from 'react';

const Box = styled.div`
  max-width: 400px;             /* обмежує ширину */
  margin: 10px auto;            /* центрує по горизонталі */
  padding: 30px;
  background-color: #ffffff;    /* білий фон */
  border-radius: 12px;          /* заокруглені кути */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* легка тінь */
  font-family: 'Segoe UI', Roboto, sans-serif;
  text-align: center;           /* центрований текст */
  transition: all 0.3s ease;
`

const Button = styled.button`
  padding: 10px 20px;
  margin: 8px;
  border: none;
  border-radius: 8px;
  background-color: #e0e0e0;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

`;

class App extends Component {
 remove = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    });
  }

  add = () => {
  this.setState({
    tasks: [...this.state.tasks, {"id": `id-${this.state.tasks.length + 1}`, "text": `${document.querySelector("#input").value}`, "completed": false,}]
  });  
}

  state = {
    tasks: [
  { "id": "id-1", "text": "Вивчити основи React", "completed": true },
  { "id": "id-2", "text": "Розібратися з React Router", "completed": false },
  { "id": "id-3", "text": "Пережити Redux", "completed": false }
],
filter: ""
}

cheked = (id) => {
  this.setState(prev => ({
    tasks: prev.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  }));

};

 sort = () => {
  const sort = this.state.tasks.filter(task => task.completed == true)
  return sort.length
  }

  change = (e) => {
  this.setState({ filter: e.target.value.toLowerCase() });
  }

  render() {
    const toDo = this.state.tasks.filter(contact =>
  contact.text.toLowerCase().includes(this.state.filter)
);
  return (
    <div className="App">
      <Box>
        <p>Всього завдань: <span>{this.state.tasks.length}</span></p>
        <p>Виконано:<span>{this.sort()}</span></p>
      </Box>
      <Box>
        <input id="input"></input>
        <Button onClick={this.add}>Create</Button>
      </Box>
      <Box>
      <p>Фільтр:</p>
      <input id="find" onChange={this.change}></input>
      </Box>
      <ToDo toDo= {toDo} remove = {this.remove} cheked={this.cheked}/>
    </div>
  );
}
}

export default App;
