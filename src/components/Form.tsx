import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todoSlice";

function Form() {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const dispatch = useDispatch();

  const onChangeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContentsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  const onSubmitButtonHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) {
      return Swal.fire("제목을 입력해주세요.");
    } else if (!contents) {
      return Swal.fire("내용을 입력해주세요.");
    }
    const newTodo = {
      id: Date.now(),
      title,
      contents,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setContents("");
  };
  return (
    <div>
      <StForm onSubmit={onSubmitButtonHandler}>
        <StLabel htmlFor="title">제목</StLabel>
        <StInput value={title} onChange={onChangeTitleHandler} />
        <StLabel htmlFor="contents">내용</StLabel>
        <StInput value={contents} onChange={onChangeContentsHandler} />
        <StButton type="submit">추가</StButton>
      </StForm>
    </div>
  );
}

export default Form;

const StForm = styled.form`
  margin: 5px auto;
  width: 1000px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: wheat;
  gap: 20px;
`;

const StLabel = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

const StInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px;
  font-size: large;
`;

const StButton = styled.button`
  height: 50px;
  width: 100px;
  padding: 10px;
  border: none;
  background-color: #7489f1b0;
  border-radius: 20px;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;
