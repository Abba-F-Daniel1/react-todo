"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/header";
import TODOhero from "@/components/todo-hero";
import Form from "@/components/form";
import TODOList from "@/components/todo-list";

export default function Home() {
  const [todos, setTodos] = useState([{ title: "Some task", id: self.crypto.randomUUID(), is_completed: false },
  {
    title: "Some other task",
    id: self.crypto.randomUUID(),
    is_completed: true,
  },
  { title: "last task", id: self.crypto.randomUUID(), is_completed: false },
  ]);

  // Retrieve data from localStorage when component mounts
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const todos_completed = todos.filter(
    (todos) => todos.is_completed === true).length;
  const total_todos = todos.length;
  return (
    <div className="wrapper">
      <Header />
      <TODOhero todos_completed={todos_completed} total_todos={total_todos} />
      <Form todos={todos} setTodos={setTodos} />
      <TODOList todos={todos} setTodos={setTodos} />
    </div>
  );
}
