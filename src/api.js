const url = "https://v1.appbackend.io/v1/rows/HVsQIDkqguZ3";

export async function getData() {
    const res = await fetch(url)
    const data = await res.json();
    return data;
  
  }