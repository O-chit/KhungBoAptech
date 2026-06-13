import React, { useState } from "react";
import TaskListPage from "./TaskListPage";
import { TASK_STATUS } from "../constants/taskStatus";
import "../styles/TaskPage.css";

// Dữ liệu mẫu ban đầu – mỗi task có status là "To Do"
const INITIAL_TASKS = [
  {
    id: 1,
    title: "Thiết kế giao diện đăng nhập",
    description: "Tạo màn hình login với form validation",
    status: TASK_STATUS.TODO,
  },
  {
    id: 2,
    title: "Xây dựng API quản lý người dùng",
    description: "REST API CRUD cho entity User",
    status: TASK_STATUS.IN_PROGRESS,
  },
  {
    id: 3,
    title: "Viết unit test cho module auth",
    description: "Bao phủ 80% coverage với Jest",
    status: TASK_STATUS.DONE,
  },
  {
    id: 4,
    title: "Tối ưu hiệu năng trang chủ",
    description: "Lazy load ảnh và code splitting",
    status: TASK_STATUS.TODO,
  },
];

const TaskPage = () => {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  // Thống kê số lượng theo từng trạng thái
  const stats = {
    [TASK_STATUS.TODO]: tasks.filter((t) => t.status === TASK_STATUS.TODO).length,
    [TASK_STATUS.IN_PROGRESS]: tasks.filter((t) => t.status === TASK_STATUS.IN_PROGRESS).length,
    [TASK_STATUS.DONE]: tasks.filter((t) => t.status === TASK_STATUS.DONE).length,
  };

  /**
   * Cập nhật trạng thái của một công việc
   * @param {number} taskId
   * @param {string} newStatus
   */
  const handleStatusChange = (taskId, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="task-page">
      {/* Header */}
      <div className="task-page__header">
        <h1 className="task-page__title">📋 Quản lý công việc</h1>
        <p className="task-page__subtitle">
          Theo dõi và cập nhật trạng thái các công việc của nhóm
        </p>
      </div>

      {/* Thống kê */}
      <div className="task-stats">
        <div className="task-stats__card task-stats__card--todo">
          <span className="task-stats__icon">⏳</span>
          <div>
            <div className="task-stats__count">{stats[TASK_STATUS.TODO]}</div>
            <div className="task-stats__label">To Do</div>
          </div>
        </div>
        <div className="task-stats__card task-stats__card--inprogress">
          <span className="task-stats__icon">🔄</span>
          <div>
            <div className="task-stats__count">{stats[TASK_STATUS.IN_PROGRESS]}</div>
            <div className="task-stats__label">In Progress</div>
          </div>
        </div>
        <div className="task-stats__card task-stats__card--done">
          <span className="task-stats__icon">✅</span>
          <div>
            <div className="task-stats__count">{stats[TASK_STATUS.DONE]}</div>
            <div className="task-stats__label">Done</div>
          </div>
        </div>
      </div>

      {/* Bảng danh sách */}
      <TaskListPage tasks={tasks} onStatusChange={handleStatusChange} />
    </div>
  );
};

export default TaskPage;
