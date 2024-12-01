import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Layout() {
  return (
    <div className="max-w-6xl mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}
