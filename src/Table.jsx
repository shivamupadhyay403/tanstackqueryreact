import React from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query";
const Table = () => {
  const queryClient = useQueryClient();
  const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const responseData = await response.json();
    return responseData;
  };
  const {isLoading,error,data}= useQuery({ queryKey: ["todos"], queryFn: getTodos });
  if(isLoading){
    return <div>...Loading</div>
  }
  return (
    <div>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Table;
