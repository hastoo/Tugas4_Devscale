import React from 'react'
import { Todos } from './Todos'


export const TodoList = () => {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    <thead className='text-white'>
      <tr>

        <th></th>
        <th></th>

      </tr>
    </thead>
    <tbody className='text-white'>

     <Todos />

    </tbody>
  </table>
</div>
  )
}

export default TodoList;
