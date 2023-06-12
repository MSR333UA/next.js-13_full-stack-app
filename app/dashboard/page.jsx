"use client";

import React from "react";
import useSWR from "swr";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch(`${https://jsonplaceholder.typicode.com/posts}/posts`, {
  //       cache: "no-store",
  //     });
  //     if (!res.ok) {
  //       setErr(true);
  //     }
  //     const jsonData = await res.json(); // Await the JSON parsing
  //     setData(jsonData); // Set the data
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);

  //Recommend Next.js
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  console.log(data);
  return <div>Dashboard</div>;
};

export default Dashboard;
