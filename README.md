# Ứng dụng Quản lý Công việc

Ứng dụng web quản lý công việc dành cho sinh viên, xây dựng bằng **React** và **Vite**. Cho phép xem danh sách công việc, theo dõi trạng thái và cập nhật tiến độ một cách trực quan.

---

## 🚀 Công nghệ sử dụng

- [React](https://react.dev/) – Thư viện xây dựng giao diện người dùng
- [Vite](https://vitejs.dev/) – Công cụ build nhanh cho ứng dụng web hiện đại
- [React Router DOM](https://reactrouter.com/) – Điều hướng trang trong ứng dụng

---

## ✅ Chức năng Quản lý Công việc

### 📋 Danh sách công việc (`TaskListPage`)

Trang chính hiển thị toàn bộ danh sách công việc dưới dạng bảng với các cột:

| Cột | Mô tả |
|-----|-------|
| **ID** | Mã định danh công việc |
| **Tên công việc** | Tiêu đề của công việc |
| **Mô tả** | Chi tiết nội dung công việc |
| **Trạng thái** | Nhãn màu hiển thị trạng thái hiện tại |
| **Chuyển trạng thái** | Dropdown để thay đổi tiến độ công việc |

> Khi chưa có công việc nào, trang hiển thị thông báo *"Chưa có công việc nào."*

---

### 🏷️ Trạng thái công việc

Mỗi công việc có một trong **3 trạng thái** sau:

| Trạng thái | Biểu tượng | Màu sắc |
|------------|------------|---------|
| **To Do** | ⏳ | Tím Indigo |
| **In Progress** | 🔄 | Vàng Amber |
| **Done** | ✅ | Xanh Emerald |

### 🔖 `StatusBadge` – Nhãn trạng thái

Component hiển thị trạng thái công việc dưới dạng **badge màu sắc** trực quan, giúp người dùng nhận biết nhanh tiến độ mà không cần đọc chữ.

### 🔀 `StatusToggle` – Chuyển đổi trạng thái

Component **dropdown** cho phép người dùng thay đổi trạng thái của từng công việc ngay trên bảng danh sách. Các lựa chọn bao gồm đầy đủ 3 trạng thái: *To Do*, *In Progress*, *Done*.

---

## 📁 Cấu trúc thư mục

```
src/
├── components/
│   ├── StatusBadge.jsx     # Nhãn hiển thị trạng thái
│   └── StatusToggle.jsx    # Dropdown chuyển đổi trạng thái
├── constants/
│   └── taskStatus.js       # Định nghĩa các trạng thái & cấu hình màu
├── pages/
│   └── TaskListPage.jsx    # Trang danh sách công việc
└── App.jsx                 # Cấu hình định tuyến chính
```
