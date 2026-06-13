import React from "react";
import { STATUS_CONFIG, STATUS_ORDER } from "../constants/taskStatus";
import "../styles/StatusToggle.css";

/**
 * StatusSelect – dropdown chọn trạng thái công việc
 * @param {{ taskId: number, status: string, onStatusChange: (id, newStatus) => void }} props
 */
const StatusToggle = ({ taskId, status, onStatusChange }) => {
  const currentConfig = STATUS_CONFIG[status] ?? { color: "#6b7280", bg: "#f3f4f6" };

  const handleChange = (e) => {
    onStatusChange(taskId, e.target.value);
  };

  return (
    <select
      className="status-select"
      value={status}
      onChange={handleChange}
      style={{
        "--sel-color": currentConfig.color,
        "--sel-bg": currentConfig.bg,
      }}
    >
      {STATUS_ORDER.map((s) => {
        const cfg = STATUS_CONFIG[s];
        return (
          <option key={s} value={s}>
            {cfg.icon} {cfg.label}
          </option>
        );
      })}
    </select>
  );
};

export default StatusToggle;
