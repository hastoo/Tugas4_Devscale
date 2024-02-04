"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
// import { FaPlus } from "react-icons/fa6";
import { todoCreate } from "@/api";




export const CreateTodo = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    
    const submitNewTodo = async (e) => {
      e.preventDefault();
      await todoCreate(name, text);
      router.refresh();
    };
   








    return (
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Text"
          onChange={(e) => setText(e.target.value)}
          name=""
          id="createTodo"
        ></textarea>
        <button
          onClick={submitNewTodo}
          className="bg-black w-full"
        >
          CREATE
        </button>
      </div>
    );
  };

  export default CreateTodo;