import React from "react";
import Swal from "sweetalert2";
import styled from "styled-components";

import type { TodosProps } from "../types/todosType";

function Todolist({ todos, setTodos, listIsDone }: TodosProps) {
  const deleteTodo = (id: number) => {
    Swal.fire({
      icon: "question",
      title: "삭제 하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then((res) => {
      if (res.isConfirmed) {
        setTodos(todos.filter((item) => item.id !== id));
      }
    });
  };

  const switchTodo = (id: number) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <>
      <StTitle>{listIsDone ? "Done..!🎉" : "Working..🔥"}</StTitle>
      {todos
        .filter((todo) => todo.isDone === listIsDone)
        .map((todo) => {
          return (
            <StDiv key={todo.id}>
              <StP>{todo.title}</StP>
              <p>{todo.contents}</p>
              <StBtnDiv>
                <StBtn onClick={() => deleteTodo(todo.id)}>삭제</StBtn>
                <StBtn onClick={() => switchTodo(todo.id)}>
                  {listIsDone ? "취소" : "완료"}
                </StBtn>
              </StBtnDiv>
            </StDiv>
          );
        })}
    </>
  );
}

export default Todolist;

// const StTodoDiv = styled.div`
//   margin: 0px auto;
// `;

const StTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin: 0px 100px;
`;

const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 250px;
  height: 250px;
  background-color: lightgray;
  border-radius: 20px;
  margin: 5px 100px;
`;

const StP = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const StBtnDiv = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;
`;

const StBtn = styled.button`
  width: 80px;
  border: none;
  background-color: dimgray;
  color: white;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;
