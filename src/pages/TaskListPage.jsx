import React from "react";
import StatusBadge from "../components/StatusBadge";
import StatusToggle from "../components/StatusToggle";
import "../styles/TaskListPage.css";

/**
 * TaskListPage – hiển thị danh sách công việc kèm trạng thái và nút chuyển đổi
 * @param {{ tasks: Array, onStatusChange: Function }} props
 */
const TaskListPage = ({ tasks, onStatusChange }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="task-empty">
        <span>📭</span>
        <p>Chưa có công việc nào.</p>
      </div>
    );
  }

  return (
    <div className="task-table-wrapper">
      <table className="task-table">
        <thead>
          <tr>
            <th className="col-id">ID</th>
            <th className="col-title">Tên công việc</th>
            <th className="col-desc">Mô tả</th>
            <th className="col-status">Trạng thái</th>
            <th className="col-action">Chuyển trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className={`task-row task-row--${task.status.toLowerCase().replace(" ", "-")}`}>
              <td className="col-id">#{task.id}</td>
              <td className="col-title">{task.title}</td>
              <td className="col-desc">{task.description}</td>
              <td className="col-status">
                <StatusBadge status={task.status} />
              </td>
              <td className="col-action">
                <StatusToggle
                  taskId={task.id}
                  status={task.status}
                  onStatusChange={onStatusChange}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskListPage;
