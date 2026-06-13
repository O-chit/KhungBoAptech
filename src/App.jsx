import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Trang chính – quản lý công việc */}
        <Route path="/" element={<TaskPage />} />
        {/* Có thể thêm route mới ở đây, ví dụ: */}
        {/* <Route path="/tasks/:id" element={<TaskDetailPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
