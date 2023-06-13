import { notFound } from "next/navigation";

// const API_BASE_URL = "https://jsonplaceholder.typicode.com";
const API_BASE_URL = "http://localhost:3000/api";

export async function getData() {
  const res = await fetch(`${API_BASE_URL}/posts/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function getDataId(id) {
  const res = await fetch(`${API_BASE_URL}/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}
