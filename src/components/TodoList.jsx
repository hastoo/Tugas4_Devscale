

import react from "react";
import Todo from "./Todo";
export const dynamic = "force-dynamic";

// export const TodoList = ({ data }) => {
//   return (
//     <div>
//       {data.map((item) => {
//         return <Todo key={item._id}  item={item} />;
//       })}  
      
//     </div>
//   );
// };



export const TodoList = ({ data }) => {
  
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        {/* head */}
        <thead>
          <tr className="text-white">
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {data.map((item) => (
            <Todo key={item._id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;

