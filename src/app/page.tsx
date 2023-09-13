"use client";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  const rawFetch = async () => {
    const rawData = await fetch("http://localhost:3000/testNoApi", {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "applicaiton/json" },
    });
    console.log(rawData);
    const response = await rawData.json();
    console.log(response.text);
  };

  return (
    <div>
      <div>testing</div>
      <button onClick={rawFetch}>fetch</button>
      <div>{data ? data : "null"}</div>
    </div>
  );
}
