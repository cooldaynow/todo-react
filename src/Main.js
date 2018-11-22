import React, { Component } from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.css";
import Note from "./Note";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
class Main extends Component {
  state = {
    noteData: [],
    noteText: "",
    noteDetails: "",
    id: 0
  };
  handleNoteTextarea = e => {
    let value = e.target.value;
    this.setState({ noteText: value });
  };
  handleNoteDetailsTextarea = e => {
    let value = e.target.value;
    this.setState({ noteDetails: value });
  };
  handleCreate = () => {
    let id = Date.now();
    const noteText = this.state.noteText;
    const noteDetails = this.state.noteDetails;
    const noteData = this.state.noteData;
    const noteInfo = { id, noteText, noteDetails };
    noteData.push(noteInfo);
    this.setState({
      noteData,
      id,
      noteText: "",
      noteDetails: ""
    });
  };
  handleDelete = index => {
    let id = this.state.id;
    let noteData = this.state.noteData;
    const newArr = noteData.filter(elem => elem.id !== index);
    this.setState({ noteData: newArr, id: --id });
  };
  handleNoteChange = (value, index) => {
    let noteData = this.state.noteData;
    let newData = noteData.map(elem => {
      if (elem.id === index) {
        elem.noteText = value;
      }
      return elem;
    });

    this.setState({ noteData: newData });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact render={() => <Home main={this} />} />
          {this.state.noteData &&
            this.state.noteData.map(elem => (
              <Route
                key={elem.id}
                path={"/" + elem.id}
                exact
                render={() => (
                  <Note
                    key={elem.id}
                    noteText={elem.noteText}
                    noteDetails={elem.noteDetails}
                    index={elem.id}
                    handleDelete={this.handleDelete}
                    handleNoteChange={this.handleNoteChange}
                    element={elem}
                  />
                )}
              />
            ))}
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
