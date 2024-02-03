"use client"

import Tasks from "./Tasks";


export const Todos = ({data}) => {
  return (
    <div>
      {data.map((item) => {
        return <Tasks key={item._id} item={item} />
        
      })
      }
    </div>
  )
}
