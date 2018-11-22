import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
const NoteWrapper = styled.div.attrs({
  className: "container"
})`
  display: flex;
  margin-top: 15px;
`;
const Row = styled.div.attrs({
  className: "row"
})`
  width: 100%;
`;
const NoteCol = styled.div.attrs({
  className: "col-9 col-lg-6 "
})``;
const BtnCol = styled.div.attrs({
  className: "col-3 col-lg-2"
})``;
const BtnWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
const NoteBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100px;
  border: 2px solid lightgray;
  overflow: hidden;
`;
const NoteTitle = styled.h4`
  font-size: 20px;
  font-weight: bold;
  color: #acacd7;
  width: 30px;
  height: 30px;
  text-align: center;
  margin: 5px;
`;
const NoteText = styled.textarea`
  min-height: 50px;
  height: ${props => Math.ceil(props.value.length / 50) * 30 + "px"};
  font-size: 16px;
  margin: 10px;
  resize: none;
  overflow: visible;
  border: none;
  background: ${props => (props.readOnly ? "#e4e4e4" : "white")};
  transition: background 0.2s ease;
  &:focus {
    box-shadow: none;
    outline: none;
    border: none;
  }
`;
const NoteDetails = styled.p`
  font-size: 14px;
  margin: 10px;
`;
const EditBtn = styled.button.attrs({
  className: "btn btn-sm btn-info mb-2"
})`
  width: 100px;
  @media (max-width: 370px) {
    font-size: 10px;
    width: 70px;
  }
`;
const DeleteBtn = styled.button.attrs({
  className: "btn btn-sm btn-danger"
})`
  width: 100px;
  @media (max-width: 370px) {
    font-size: 10px;
    width: 70px;
  }
`;
const More = styled.a`
  margin-left: 10px;
  transition: all 0.3s ease;
  &:hover {
    text-decoration: none;
  }
`;
class Note extends Component {
  state = {
    index: this.props.index,
    readonly: true,
    details: false
  };
  handleEdit = () => {
    this.setState({ readonly: !this.state.readonly });
  };
  handleDelete = () => {
    this.props.handleDelete(this.props.index);
  };
  handleNoteChange = e => {
    let value = e.target.value;
    this.props.handleNoteChange(value, this.props.index);
  };
  handleDetails = e => {
    e.preventDefault();
    let details = this.state.details;
    this.setState({ details: !details });
  };
  render() {
    return (
      <NoteWrapper>
        <Row>
          <NoteCol>
            <NoteBody>
              <Link to={"/" + this.props.index}>
                <NoteTitle>{this.props.index}</NoteTitle>
              </Link>
              <NoteText
                value={this.props.noteText}
                readOnly={this.state.readonly}
                onChange={this.handleNoteChange}
              />
              {this.props.noteDetails && !this.state.details && (
                <More onClick={this.handleDetails} href="#details">
                  Подробнее
                </More>
              )}
              {this.state.details && (
                <NoteDetails>
                  Additional info: <br />
                  {this.props.noteDetails}
                </NoteDetails>
              )}
            </NoteBody>
          </NoteCol>
          <BtnCol>
            <BtnWrapper>
              <EditBtn onClick={this.handleEdit}>
                {this.state.readonly ? "Edit" : "End editting"}
              </EditBtn>
              <DeleteBtn onClick={this.handleDelete}>Delete</DeleteBtn>
            </BtnWrapper>
          </BtnCol>
        </Row>
      </NoteWrapper>
    );
  }
}
export default Note;
