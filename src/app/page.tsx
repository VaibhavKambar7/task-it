import React from "react";
import { TodoItem } from "../components/TodoItem";
import { prisma } from "@/db";
import Image from "next/image";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id:string,complete:boolean){
  "use server"

  await prisma.todo.update({where:{id},data:{complete}})


}

export default async function Home() {
  let todos = await getTodos();

  return (
    <>
      <header className="">
  <h1 className="text-2xl text-yellow-200  pl-3">Task-it</h1>
</header>

      <div className="flex flex-col items-center">
        <Link
          className="w-25 mt-20 flex  border-spacing-2 flex-col items-center rounded border  border-solid  border-gray-300 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 focus:bg-gray-700"
          href="/new"
        >
          Add Task
        </Link>
      </div>
      <div className="mx-auto mb-11 mt-5 flex w-60 rounded border-2 border-gray-300 border-opacity-10 px-4 py-2">
        <ul className="flex flex-col items-start">
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
          ))}
        </ul>
      </div>
    </>
  );
}
