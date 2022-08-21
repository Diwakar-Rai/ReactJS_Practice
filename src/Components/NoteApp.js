import React, { Component } from "react";

export class NoteApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      note: props.note,
      notes: [],
    };
  }
  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleNoteChange = (e) => {
    this.setState({
      note: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    let notes = [...this.state.notes];
    notes.push({
      title: this.state.title,
      note:this.state.note
    });
    // console.log(notes);
    this.setState({
      notes,
      title: "",
      note:"",
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <h1>Notes App</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="title"
              placeholder="Enter the title here"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </div>
          <div className="mb-3">
            <textarea
              value={this.state.note}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="note"
              placeholder="Enter Your Note Here"
              onChange={this.handleNoteChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
        <hr className="m-3" />
        <h3>Your Note</h3>
        <div className="row mt-3">
        {this.state.notes &&
            this.state.notes.length > 0 &&
            this.state.notes.map((item) => (
              <div className="col-md-3 m-1">
              <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.note}</p>
              </div>
            </div>
            </div>
            ))}
            </div>
      </div>
    );
  }
}

export default NoteApp;
