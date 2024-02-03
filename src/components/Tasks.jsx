import { useRouter } from 'next/navigation';
import React, { useState } from 'react'



const Tasks = ({ item }) => {
    const router = useRouter();
    


async function updateData() {
    const res = await fetch("https://v1.appbackend.io/v1/rows/HVsQIDkqguZ3",{
        method:"PUT",
        headers: {
            'Content-Type': 'application/json',
      },
      body: JSON.stringify({"_id":"","age":"","isdone":""}),
    });
    
    router.refresh();
    setEditMode(false);
  
  }




  async function deleteData() {
    const res = await fetch("https://v1.appbackend.io/v1/rows/HVsQIDkqguZ3",{
        method:"DELETE",
        headers: {
            'Content-Type': 'application/json'
      },
      body: JSON.stringify([item._id])
    });
    
    router.refresh();
    setEditMode(false);
  
  }

}


  export default Tasks;