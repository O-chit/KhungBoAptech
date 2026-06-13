import React from "react";
import { STATUS_CONFIG } from "../constants/taskStatus";
import "../styles/StatusBadge.css";

/**
 * StatusBadge – hiển thị nhãn màu cho từng trạng thái công việc
 * @param {{ status: string }} props
 */
const StatusBadge = ({ status }) => {
  const config = STATUS_CONFIG[status] ?? {
    label: status,
    color: "#6b7280",
    bg: "#f3f4f6",
    icon: "❓",
  };

  return (
    <span
      className="status-badge"
      style={{
        "--badge-color": config.color,
        "--badge-bg": config.bg,
      }}
      title={config.label}
    >
      <span className="status-badge__icon">{config.icon}</span>
      <span className="status-badge__text">{config.label}</span>
    </span>
  );
};

export default StatusBadge;
