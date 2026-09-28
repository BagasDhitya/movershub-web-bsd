import React from "react";
import ProductTable from "@/app/components/ProductTable";

// Dashboard tetep SSR
// halaman ini hanya bertugas mengambil data yang udah dirender oleh Next.js

export default function Dashboard() {
  console.log("ini adalah halaman SSR");
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <ProductTable />
    </div>
  );
}
