import Todo from "./Todo";
export const dynamic = "force-dynamic";

export const TodoList = ({data}) => {
  return (
    <>
      {data.map((item) => {
        return <Todo key={item._id} item={item} />;
      })}
    </>
  );
};

export default TodoList;
