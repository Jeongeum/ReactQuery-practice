import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getTodosDetail } from "../api/axios";

const TestItem = () => {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, isError, error } = useQuery(
    ["detailtodo", id],
    () => {
      return getTodosDetail(id);
    }
  );

  if (isLoading) return <div>로딩 중 입니다....</div>;
  if (isError) return <div>{error.message}</div>;

  const { title, body, useId } = data;
  console.log(data);
  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
    </>
  );
};

export default TestItem;
