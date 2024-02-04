import { CreateTodo } from "@/components/CreateTodo";
import { getAllData } from "@/api.js"
import { TodoList } from "@/components/TodoList";
export const dynamic = "force-dynamic";




export default async function Home() {
  const { data } = await getAllData();
  return (
    <main className="max-w-4xl mx-auto bg-sky-400 mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-white">Todo List App</h1>
      <CreateTodo />
      </div>
<TodoList data={data}/>
      

    </main>
  );
}
