# Ứng dụng Quản lý Công việc Sinh viên - NovaTask

Ứng dụng hỗ trợ sinh viên quản lý, theo dõi và sắp xếp công việc học tập một cách khoa học và hiệu quả. Dự án được xây dựng trên nền tảng React và Vite.

---

## 🚀 Tính năng chính

### 1. Quản lý công việc (Task & Badge Management)
- Xem danh sách các công việc/nhãn trạng thái (Badges) hỗ trợ phân loại mức độ ưu tiên của công việc.
- Thêm mới công việc/badge với các thông tin chi tiết: Tên, mô tả, loại nhãn, icon biểu thị.
- Cập nhật hoặc xóa các công việc/nhãn khi đã hoàn thành hoặc thay đổi kế hoạch.

### 2. Hệ thống định tuyến & Điều hướng (Navigation & Routing)
- Thanh điều hướng (Navigation Bar) tích hợp chuyển đổi nhanh giữa các khu vực của hệ thống.
- Tích hợp giao diện Đăng nhập (Login) và Hồ sơ cá nhân (Profile) của sinh viên.
- Định tuyến linh hoạt giữa các chức năng Thêm/Sửa/Xóa.

---

## 🛠️ Hướng dẫn cài đặt

Để chạy dự án dưới máy cục bộ (local), vui lòng thực hiện theo các bước sau:

### 1. Tải mã nguồn về máy
Sao chép (clone) kho lưu trữ từ GitHub:
```bash
git clone https://github.com/O-chit/KhungBoAptech.git
cd KhungBoAptech
```

### 2. Cài đặt các gói thư viện phụ thuộc (Dependencies)
Chạy lệnh install để tải về các thư viện cần thiết (`react`, `react-dom`, `react-router-dom`...):
```bash
npm install
```

### 3. Khởi chạy máy chủ phát triển (Development Server)
Khởi động dự án ở chế độ local:
```bash
npm run dev
```
Sau khi khởi chạy thành công, truy cập ứng dụng thông qua trình duyệt tại địa chỉ: [http://localhost:5173](http://localhost:5173)

---

## 📖 Hướng dẫn sử dụng

1. **Xem danh sách công việc**: Ngay khi vào trang chủ, hệ thống hiển thị bảng danh sách các nhãn công việc hiện tại bao gồm ID, Tên, Mô tả, Loại nhãn, Icon, Thời gian tạo/Cập nhật.
2. **Thêm công việc mới**: Nhấn nút **"Add new badge"**, nhập đầy đủ thông tin vào biểu mẫu (Form) và nhấn **"Submit"**.
3. **Chỉnh sửa thông tin**: Chọn hàng công việc tương ứng, nhấn nút **"Edit"**, cập nhật thông tin mới và lưu lại.
4. **Xóa công việc**: Nhấn nút **"Delete"** bên cạnh công việc muốn xóa, xác nhận thông tin công việc rồi nhấn **"Delete"** để hoàn tất xóa.
