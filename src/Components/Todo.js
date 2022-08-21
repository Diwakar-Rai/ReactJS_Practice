import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInput: props.taskInput,
      taskId: 0,
      taskArray: [],
    };
  }
  handleChange = (e) => {
    this.setState({
      taskInput: e.target.value,
      taskId: this.state.taskId + 1,
    });
  };
  addItem = (e) => {
    e.preventDefault();
    let taskArray = [...this.state.taskArray];
    taskArray.push({
      taskInput: this.state.taskInput,
      taskId: this.state.taskId,
    });
    console.log(taskArray);
    this.setState({
      taskArray,
      taskInput: "",
    });
  };
  // deleteItem = (key) => {
  //   let taskArray = [...this.state.taskArray];
  //   let updateArray = taskArray.filter((task) => task.taskId !== key);
  //   this.setState({
  //     taskArray: updateArray,
  //   });
  // };

  render() {
    return (
      <>
        <div className="container my-5">
          <h1>Todo App</h1>
          <h6>Using the Class Component</h6>
          <hr className="my-3" />
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={this.state.taskInput}
              onChange={this.handleChange}
            />
            <button
              className="input-group-text bg-info text-white"
              id="inputGroup-sizing-default"
              onClick={this.addItem}
            >
              Add Task
            </button>
          </div>
          <div className="mt-5">
            {this.state.taskArray &&
              this.state.taskArray.length > 0 &&
              this.state.taskArray.map((task) => (
                <div className="input-group mb-3" key={task.taskId}>
                  <div className="form-control">{task.taskInput}</div>
                  {/* <button
                    className="input-group-text bg-danger"
                    onClick={this.deleteItem(task.taskId)}
                    id="inputGroup-sizing-default"
                  >
                    Delete
                  </button> */}
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }
}
