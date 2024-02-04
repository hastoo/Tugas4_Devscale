const url = "https://v1.appbackend.io/v1/rows/HVsQIDkqguZ3";


export async function getAllData() {
    const res = await fetch(url)
    const data = await res.json();
    return data;
  
  }


  export async function todoCreate(name, text) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ name, text,"isdone":"true" }]),
    });
    const newData = res.json();
    return newData;
  }


//   export async function TodoUpdate(_id, name, text) {
//     const res = fetch(url, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ _id: item._id, name, text, isdone: "" }),
//     });
    
    
//   }

  export async function TodoUpdate(_id, name, text) {
      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([{ _id: item._id, name, text,"isdone":"" }])
      });
  
      const updatedTodo = await res.json();
      return updatedTodo;
  };
  

  
  export async function TodoDelete(_id) {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([item._id])
    });

    const todoDelete = await res.json();
    return todoDelete;
};
