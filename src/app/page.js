import {CreateTodo} from "@/components/CreateTodo";
import {getAllData} from "@/api.js";
import {TodoList} from "@/components/TodoList";
export const dynamic = "force-dynamic";

export default async function Home() {
  const {data} = await getAllData();
  return (
    <main className="main">
      <div className="head">
        <h1 className="title">Todo List App</h1>
        <CreateTodo />
      </div>
      <TodoList data={data} />
    </main>
  );
}
