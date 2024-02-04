"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { TodoUpdate, TodoDelete } from "@/api.js"


const Todo = ({ item }) => {
    const router = useRouter();
    const [openEdit, setOpenEdit] = useState(false);
    const [title, setTitle] = useState(item.name);
    const [task, setTask] = useState(item.text);



    const editTodo = async (e) => {
      e.preventDefault();
      await TodoUpdate(name, text);
      setOpenEdit(false);
      router.refresh();
    };
    

    if (openEdit) {
      return (
        <div>
          <input
            value={title}
            type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={task} placeholder="TASK" onChange={(e) => setTask(e.target.value)}
            name=""
          ></textarea>
          <button
            onClick={editTodo}
          >
            UPDATE
          </button>
        </div>
      );
    }
    return (
      <div>
      </div>
    );
  };







  export default Todo;