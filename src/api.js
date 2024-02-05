const url = "https://v1.appbackend.io/v1/rows/HVsQIDkqguZ3";

export async function getAllData() {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function todoCreate(name) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([{name}]),
  });
  const newData = res.json();
  return newData;
}

export async function TodoUpdate(_id, name) {
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({_id, name}),
  });

  const updatedTodo = await res.json();
}

export async function TodoDelete(_id) {
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([_id]),
  });

  const todoDelete = await res.json();

}
