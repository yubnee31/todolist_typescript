import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/modules/todoSlice";
import { RootState } from "../redux/config/ConfigStore";
import { jsonApi } from "../axios/api";

function Todolist({ isDone }: { isDone: boolean }) {
  const [todo, setTodo] = useState([]);
  const dispatch = useDispatch();

  const fetchTodo = async () => {
    try {
      const { data } = await jsonApi.get("/todos");
      setTodo(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, [todo]);

  const onDeleteButtonHandler = async (id: number) => {
    Swal.fire({
      icon: "question",
      title: "삭제 하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then(async (res) => {
      if (res.isConfirmed) {
        try {
          await jsonApi.delete(`/todos/${id}`);
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const onSwitchButtonHandler = async (id: number) => {
    try {
      await jsonApi.patch(`/todos/${id}`, { isDone: !isDone });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <StTitle>{isDone ? "Done..!🎉" : "Working..🔥"}</StTitle>
      <StListDiv>
        {todo
          .filter((item: any) => item.isDone === isDone)
          .map((item: any) => {
            return (
              <StDiv key={item.id}>
                <StP>{item.title}</StP>
                <p>{item.contents}</p>
                <StBtnDiv>
                  <StBtn onClick={() => onDeleteButtonHandler(item.id)}>
                    삭제
                  </StBtn>
                  <StBtn onClick={() => onSwitchButtonHandler(item.id)}>
                    {isDone ? "취소" : "완료"}
                  </StBtn>
                </StBtnDiv>
              </StDiv>
            );
          })}
      </StListDiv>
    </>
  );
}

export default Todolist;

const StTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin: 0px 100px;
`;

const StListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 100px;
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
