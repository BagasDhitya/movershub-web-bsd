"use client";
import { useState } from "react";

// ProductTable kita buat CSR
// karena harus menggunakan useState

export default function ProductTable() {
  const [count, setCount] = useState<number>(0);

  console.log("hasil hitungan: ", count);

  return (
    <div className="bg-blue-500 rounded-md text-white w-80 h-64 p-5 flex flex-col justify-center items-center space-x-5">
      <div className="text-center">
        <h1>
          Ini komponent Client Side Rendering (CSR), karena bisa menggunakan
          state
        </h1>
      </div>
      <div className="flex space-x-5 border p-10 mt-10">
        <button onClick={() => setCount(count + 1)}>+</button>
        <span>{count}</span>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}
