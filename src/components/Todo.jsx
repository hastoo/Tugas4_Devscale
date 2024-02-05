"use client";


import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { TodoUpdate, TodoDelete } from "@/api.js";
import { TiEdit } from "react-icons/ti";
import { MdOutlineDoneOutline } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

const Todo = ({ item }) => {
  const router = useRouter();
  const [openEdit, setOpenEdit] = useState(false);
  const [name, setName] = useState(item.name);

  const editTodo = async (_id, name) => {
    await TodoUpdate(_id, name);
    setOpenEdit(false);
    router.refresh();
  };

  const doneTodo = async (_id) => {
    await TodoDelete(item._id);
    router.refresh();
  };

  return (
    <>
      {openEdit ? (
        <div className="update">
          <input
            className="inputUpdate"
            value={name}
            type="text"
            placeholder="Write Something. . ."
            onChange={(e) => setName(e.target.value)}
          />
          <button className="inputButton btn btn-ghost btn-sm" onClick={() => editTodo(item._id, name)}>
            <RxUpdate size={25} />
          </button>
        </div>
      ) : (
        <div className="todo">
          <div className="todoField" key={item._id}>
            {item.name}
          </div>
          <div className="todoButton">
            <button
              className="editButton btn btn-sm btn-outline btn-error"
              onClick={() => setOpenEdit(true)}
            >
              <TiEdit size={25} />
            </button>
            <button className="doneButton btn btn-outline btn-accent btn-sm" onClick={() => doneTodo(item._id)}>
              <MdOutlineDoneOutline size={25} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;
