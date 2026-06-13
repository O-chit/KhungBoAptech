// Định nghĩa các trạng thái công việc
export const TASK_STATUS = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};

// Thứ tự chuyển đổi trạng thái (vòng tròn)
export const STATUS_ORDER = [
  TASK_STATUS.TODO,
  TASK_STATUS.IN_PROGRESS,
  TASK_STATUS.DONE,
];

// Cấu hình màu sắc & nhãn cho từng trạng thái
export const STATUS_CONFIG = {
  [TASK_STATUS.TODO]: {
    label: "To Do",
    color: "#6366f1",       // tím indigo
    bg: "#eef2ff",
    darkBg: "#312e81",
    icon: "⏳",
  },
  [TASK_STATUS.IN_PROGRESS]: {
    label: "In Progress",
    color: "#f59e0b",       // vàng amber
    bg: "#fffbeb",
    darkBg: "#78350f",
    icon: "🔄",
  },
  [TASK_STATUS.DONE]: {
    label: "Done",
    color: "#10b981",       // xanh emerald
    bg: "#ecfdf5",
    darkBg: "#064e3b",
    icon: "✅",
  },
};

/**
 * Lấy trạng thái tiếp theo trong vòng tròn chuyển đổi
 * @param {string} currentStatus
 * @returns {string}
 */
export const getNextStatus = (currentStatus) => {
  const idx = STATUS_ORDER.indexOf(currentStatus);
  if (idx === -1) return TASK_STATUS.TODO;
  return STATUS_ORDER[(idx + 1) % STATUS_ORDER.length];
};
