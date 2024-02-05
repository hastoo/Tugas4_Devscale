"use client";

import {useRouter} from "next/navigation";
import {useState} from "react";
import {FaPlus} from "react-icons/fa6";
import {todoCreate} from "@/api";

export const CreateTodo = () => {
  const router = useRouter();
  const [name, setName] = useState("");

  const submitNewTodo = async (e) => {
    e.preventDefault();
    await todoCreate(name);
    router.refresh();
  };

  return (
    <div className="createTodo">
      <input className="submitTodo" type="text" placeholder="Submit Todo" onChange={(e) => setName(e.target.value)} />
      <button className="btn btn-outline btn-error btn-wide mt-4" onClick={submitNewTodo}>
        ADD <FaPlus />
      </button>
    </div>
  );
};

export default CreateTodo;
