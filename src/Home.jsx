import React, { Component } from "react";
import styled from "styled-components";
import Note from "./Note";

const Wrapper = styled.div.attrs({
  className: "container mb-5"
})`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;
const NoteRow = styled.div.attrs({
  className: "row align-items-center justify-content-center"
})`
  width: 75%;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #ccc;
  text-align: center;
  margin: 50px 0;
`;
const NoteTextWrapper = styled.div.attrs({
  className: "form-group col-12 col-lg-5"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NoteTextLabel = styled.label.attrs({
  htmlFor: "NoteTextarea"
})``;
const NoteTextarea = styled.textarea.attrs({
  id: "NoteTextarea"
})`
  width: 80%;
  min-height: 100px;
  resize: vertical;
  border: 1px solid #ccc;
  padding: 10px;
`;
const NoteDetailsWrapper = styled.div.attrs({
  className: "form-group col-12 col-lg-5"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NoteDetailsLabel = styled.label.attrs({
  htmlFor: "NoteDetailsTextarea"
})``;
const NoteDetailsTextarea = styled.textarea.attrs({
  id: "NoteDetailsTextarea"
})`
  width: 80%;
  min-height: 100px;
  resize: vertical;
  border: 1px solid #ccc;
  padding: 10px;
`;
const CreateBtn = styled.button.attrs({
  className: "btn btn-primary btn-sm col-4 col-lg-2"
})`
  min-width: 100px;
  align-self: center;
`;

class Home extends Component {
  state = {};
  render() {
    const {
      handleNoteTextarea,
      handleNoteDetailsTextarea,
      handleCreate,
      state,
      handleDelete,
      handleNoteChange
    } = this.props.main;
    return (
      <React.Fragment>
        <Title>ToDo List</Title>
        <Wrapper>
          <NoteRow>
            <NoteTextWrapper>
              <NoteTextLabel>Input your note</NoteTextLabel>
              <NoteTextarea
                onChange={handleNoteTextarea}
                value={state.noteText}
              />
            </NoteTextWrapper>
            <NoteDetailsWrapper>
              <NoteDetailsLabel>Input your note details here</NoteDetailsLabel>
              <NoteDetailsTextarea
                onChange={handleNoteDetailsTextarea}
                value={state.noteDetails}
              />
            </NoteDetailsWrapper>
            <CreateBtn onClick={handleCreate} disabled={!state.noteText.trim()}>
              Create a note
            </CreateBtn>
          </NoteRow>
        </Wrapper>
        {state.noteData &&
          state.noteData.map((elem, index) => (
            <Note
              key={index}
              noteText={elem.noteText}
              noteDetails={elem.noteDetails}
              index={elem.id}
              handleDelete={handleDelete}
              handleNoteChange={handleNoteChange}
            />
          ))}
      </React.Fragment>
    );
  }
}

export default Home;
