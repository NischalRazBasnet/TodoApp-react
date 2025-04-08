import React from 'react';
import { useSelector } from 'react-redux';

export default function TodoPage() {
  const { todo } = useSelector((state) => {
    return state.todoSlice;
  });
  console.log(todo);
  return <div></div>;
}
