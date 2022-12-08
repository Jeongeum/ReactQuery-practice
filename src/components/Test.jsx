import { useQuery } from "react-query";
import { getTodos } from "../api/axios";
import "./Test.css";
import TestDetail from "./TestDetail";

const Test = () => {
  const { data, isLoading, isError, error } = useQuery("todo", getTodos);

  if (isLoading) return <div>로딩 중 입니다....</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <>
      <h2>자유게시판</h2>
      {data.map((item) => (
        <TestDetail data={item} key={item.id} />
      ))}
      {/* <div>
        <p>{data.title}</p>
        <p>{data.body}</p>
        <p>작성자 : {data.userId}</p>
      </div> */}
    </>
  );
};

export default Test;
