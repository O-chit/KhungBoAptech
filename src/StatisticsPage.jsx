"use client";

import { useState, useEffect } from "react";

// ─── Mock API helper (thay bằng fetch thật khi có backend) ───────────────────
async function fetchTaskStats() {
  // TODO: thay URL này bằng endpoint thực của dự án
  // const res = await fetch("/api/tasks/stats");
  // return res.json();

  // Mock data – xóa khi có API thật
  await new Promise((r) => setTimeout(r, 600));
  return {
    total: 48,
    byStatus: {
      "To Do": 14,
      "In Progress": 18,
      Review: 9,
      Done: 7,
    },
    recentTasks: [
      { id: 1, title: "Thiết kế giao diện Dashboard", status: "Done", assignee: "Minh Anh", updatedAt: "2025-06-10" },
      { id: 2, title: "Viết API xác thực người dùng", status: "In Progress", assignee: "Đức Huy", updatedAt: "2025-06-10" },
      { id: 3, title: "Tích hợp thanh toán VNPay", status: "Review", assignee: "Thanh Tùng", updatedAt: "2025-06-09" },
      { id: 4, title: "Viết unit test cho module Task", status: "To Do", assignee: "Hồng Nhung", updatedAt: "2025-06-09" },
      { id: 5, title: "Deploy lên server staging", status: "In Progress", assignee: "Minh Anh", updatedAt: "2025-06-08" },
    ],
  };
}

// ─── Config trạng thái ───────────────────────────────────────────────────────
const STATUS_CONFIG = {
  "To Do":      { color: "#6366f1", bg: "#eef2ff", label: "Chờ xử lý" },
  "In Progress":{ color: "#f59e0b", bg: "#fffbeb", label: "Đang làm"  },
  Review:       { color: "#3b82f6", bg: "#eff6ff", label: "Đang review"},
  Done:         { color: "#10b981", bg: "#ecfdf5", label: "Hoàn thành" },
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function StatusBadge({ status }) {
  const cfg = STATUS_CONFIG[status] ?? { color: "#6b7280", bg: "#f3f4f6", label: status };
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        color: cfg.color,
        background: cfg.bg,
        border: `1px solid ${cfg.color}33`,
        whiteSpace: "nowrap",
      }}
    >
      {cfg.label}
    </span>
  );
}

function StatCard({ status, count, total }) {
  const cfg = STATUS_CONFIG[status];
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 14,
        padding: "20px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        transition: "box-shadow .2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.10)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)")}
    >
      {/* Dot + label */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span
          style={{
            width: 10, height: 10, borderRadius: "50%",
            background: cfg.color, flexShrink: 0,
          }}
        />
        <span style={{ fontSize: 13, color: "#6b7280", fontWeight: 500 }}>
          {cfg.label}
        </span>
      </div>

      {/* Count */}
      <div style={{ fontSize: 36, fontWeight: 700, color: "#111827", lineHeight: 1 }}>
        {count}
        <span style={{ fontSize: 14, fontWeight: 400, color: "#9ca3af", marginLeft: 6 }}>
          công việc
        </span>
      </div>

      {/* Progress bar */}
      <div>
        <div
          style={{
            height: 6, borderRadius: 999,
            background: "#f3f4f6", overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%", borderRadius: 999,
              width: `${pct}%`, background: cfg.color,
              transition: "width 0.8s ease",
            }}
          />
        </div>
        <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 4, textAlign: "right" }}>
          {pct}% tổng số
        </div>
      </div>
    </div>
  );
}

function SummaryDonut({ byStatus, total }) {
  // Simple SVG donut
  const RADIUS = 56;
  const STROKE = 14;
  const CIRC = 2 * Math.PI * RADIUS;
  const statuses = Object.keys(STATUS_CONFIG);
  let offset = 0;

  const segments = statuses.map((s) => {
    const pct = total > 0 ? (byStatus[s] ?? 0) / total : 0;
    const dash = pct * CIRC;
    const seg = { status: s, pct, dash, offset };
    offset += dash;
    return seg;
  });

  const cx = 80, cy = 80;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <svg width={160} height={160} viewBox="0 0 160 160">
        {/* Background circle */}
        <circle cx={cx} cy={cy} r={RADIUS} fill="none" stroke="#f3f4f6" strokeWidth={STROKE} />
        {segments.map(({ status, dash, offset: off }) =>
          dash > 0 ? (
            <circle
              key={status}
              cx={cx} cy={cy} r={RADIUS}
              fill="none"
              stroke={STATUS_CONFIG[status].color}
              strokeWidth={STROKE}
              strokeDasharray={`${dash} ${CIRC - dash}`}
              strokeDashoffset={CIRC / 4 - off}
              style={{ transition: "stroke-dasharray 0.8s ease" }}
            />
          ) : null
        )}
        {/* Center text */}
        <text x={cx} y={cy - 6} textAnchor="middle" fontSize={22} fontWeight={700} fill="#111827">
          {total}
        </text>
        <text x={cx} y={cy + 14} textAnchor="middle" fontSize={11} fill="#9ca3af">
          tổng
        </text>
      </svg>

      {/* Legend */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", justifyContent: "center" }}>
        {statuses.map((s) => (
          <div key={s} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%",
              background: STATUS_CONFIG[s].color, flexShrink: 0,
            }} />
            <span style={{ color: "#6b7280" }}>{STATUS_CONFIG[s].label}</span>
            <span style={{ fontWeight: 600, color: "#374151" }}>{byStatus[s] ?? 0}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecentTable({ tasks }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ background: "#f9fafb" }}>
            {["#", "Tên công việc", "Trạng thái", "Người thực hiện", "Cập nhật"].map((h) => (
              <th
                key={h}
                style={{
                  padding: "10px 14px", textAlign: "left",
                  fontSize: 12, fontWeight: 600, color: "#6b7280",
                  borderBottom: "1px solid #e5e7eb", whiteSpace: "nowrap",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tasks.map((t, i) => (
            <tr
              key={t.id}
              style={{ borderBottom: "1px solid #f3f4f6", transition: "background .15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "")}
            >
              <td style={{ padding: "12px 14px", color: "#9ca3af", fontWeight: 500 }}>{i + 1}</td>
              <td style={{ padding: "12px 14px", color: "#111827", fontWeight: 500 }}>{t.title}</td>
              <td style={{ padding: "12px 14px" }}><StatusBadge status={t.status} /></td>
              <td style={{ padding: "12px 14px", color: "#374151" }}>{t.assignee}</td>
              <td style={{ padding: "12px 14px", color: "#9ca3af", fontSize: 12 }}>{t.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function StatisticsPage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchTaskStats()
      .then(setStats)
      .catch(() => setError("Không thể tải dữ liệu. Vui lòng thử lại."))
      .finally(() => setLoading(false));
  }, []);

  // ── Loading state
  if (loading) {
    return (
      <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", color: "#6b7280" }}>
          <div style={{
            width: 36, height: 36, border: "3px solid #e5e7eb",
            borderTopColor: "#6366f1", borderRadius: "50%",
            animation: "spin 0.8s linear infinite", margin: "0 auto 12px",
          }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <p style={{ margin: 0, fontSize: 14 }}>Đang tải dữ liệu thống kê…</p>
        </div>
      </div>
    );
  }

  // ── Error state
  if (error) {
    return (
      <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{
          textAlign: "center", padding: "32px 40px",
          background: "#fff1f2", borderRadius: 14,
          border: "1px solid #fecdd3", color: "#e11d48",
        }}>
          <p style={{ margin: "0 0 12px", fontWeight: 600 }}>⚠️ {error}</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "8px 20px", borderRadius: 8, border: "none",
              background: "#e11d48", color: "#fff", cursor: "pointer", fontSize: 13,
            }}
          >
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  const { total, byStatus, recentTasks } = stats;
  const completionRate = total > 0 ? Math.round(((byStatus["Done"] ?? 0) / total) * 100) : 0;

  return (
    <div style={{ padding: "32px 24px", maxWidth: 1100, margin: "0 auto", fontFamily: "Inter, system-ui, sans-serif" }}>

      {/* ── Header */}
      <div style={{ marginBottom: 32 }}>
        <p style={{ margin: "0 0 4px", fontSize: 13, color: "#6366f1", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Báo cáo dự án
        </p>
        <h1 style={{ margin: "0 0 6px", fontSize: 28, fontWeight: 800, color: "#111827" }}>
          Thống kê công việc
        </h1>
        <p style={{ margin: 0, color: "#6b7280", fontSize: 14 }}>
          Tổng quan trạng thái tất cả công việc trong dự án
        </p>
      </div>

      {/* ── Top summary strip */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 16, marginBottom: 32,
      }}>
        {/* Total */}
        <div style={{
          background: "linear-gradient(135deg, #6366f1, #818cf8)",
          borderRadius: 14, padding: "20px 24px", color: "#fff",
          boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
        }}>
          <p style={{ margin: "0 0 6px", fontSize: 13, opacity: 0.85 }}>Tổng công việc</p>
          <p style={{ margin: 0, fontSize: 40, fontWeight: 800, lineHeight: 1 }}>{total}</p>
        </div>

        {/* Completion rate */}
        <div style={{
          background: completionRate >= 70 ? "linear-gradient(135deg,#10b981,#34d399)" : "linear-gradient(135deg,#f59e0b,#fbbf24)",
          borderRadius: 14, padding: "20px 24px", color: "#fff",
          boxShadow: completionRate >= 70 ? "0 4px 20px rgba(16,185,129,0.3)" : "0 4px 20px rgba(245,158,11,0.3)",
        }}>
          <p style={{ margin: "0 0 6px", fontSize: 13, opacity: 0.85 }}>Tỷ lệ hoàn thành</p>
          <p style={{ margin: 0, fontSize: 40, fontWeight: 800, lineHeight: 1 }}>{completionRate}%</p>
        </div>
      </div>

      {/* ── Status cards grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 16, marginBottom: 32,
      }}>
        {Object.keys(STATUS_CONFIG).map((s) => (
          <StatCard key={s} status={s} count={byStatus[s] ?? 0} total={total} />
        ))}
      </div>

      {/* ── Donut + Table row */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "280px 1fr",
        gap: 24, marginBottom: 32,
        alignItems: "start",
      }}>
        {/* Donut chart */}
        <div style={{
          background: "#fff", border: "1px solid #e5e7eb",
          borderRadius: 14, padding: "24px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        }}>
          <p style={{ margin: "0 0 16px", fontWeight: 700, color: "#111827", fontSize: 15 }}>
            Phân bố trạng thái
          </p>
          <SummaryDonut byStatus={byStatus} total={total} />
        </div>

        {/* Recent tasks table */}
        <div style={{
          background: "#fff", border: "1px solid #e5e7eb",
          borderRadius: 14, overflow: "hidden",
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        }}>
          <div style={{
            padding: "16px 20px", borderBottom: "1px solid #e5e7eb",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <p style={{ margin: 0, fontWeight: 700, color: "#111827", fontSize: 15 }}>
              Công việc cập nhật gần đây
            </p>
            <span style={{ fontSize: 12, color: "#6b7280" }}>{recentTasks.length} mục</span>
          </div>
          <RecentTable tasks={recentTasks} />
        </div>
      </div>

    </div>
  );
}
