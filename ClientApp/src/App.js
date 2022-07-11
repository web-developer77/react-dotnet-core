import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import CreateTask from './components/CreateTask'
import { DisplayBoard } from './components/DisplayBoard'
import { getAllTasks, createTask } from './services/TaskService'

class App extends Component {

  state = {
    task: {},
    tasks: [],
    numberOfTasks: 0
  }

  createTask = (e) => {
    createTask(this.state.task)
      .then(response => {
        console.log(response);
        this.setState({numberOfTasks: this.state.numberOfTasks + 1})
    });
  } 

  getAllTasks = () => {
    getAllTasks()
      .then(tasks => {
        console.log(tasks)
        this.setState({tasks: tasks, numberOfTasks: tasks.length})
      });
  }

  onChangeForm = (e) => {
    let task = this.state.task
    if (e.target.name === 'taskname') {
        task.taskName = e.target.value;
    } else if (e.target.name === 'taskdesc') {
        task.taskDesc = e.target.value;
    }
    this.setState({task})
  }

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
                <CreateTask
                  onChangeForm={this.onChangeForm}
                  createTask={this.createTask}
                  getAllTasks={this.getAllTasks}
                  >
                </CreateTask>
            </div>
            <div className="col-md-4">
                <DisplayBoard
                  numberOfTasks={this.state.numberOfTasks}
                  getAllTasks={this.getAllTasks}
                >
                </DisplayBoard>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Tasks tasks={this.state.tasks}></Tasks>
        </div>
      </div>
    );
  }
}

export default App;