
HEAD
# React + Vite
>>>>>>> f75ae1d8cbc5f80ea4e2c32df04def9e633eba3f

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

<<<<<<< HEAD
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
=======
If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 📋 Task Manager – Hệ thống quản lý công việc nhóm

> Ứng dụng web giúp nhóm theo dõi, phân công và quản lý tiến độ công việc theo từng trạng thái.

---

## 📖 Mục lục

- [Giới thiệu hệ thống](#giới-thiệu-hệ-thống)
- [Tính năng chính](#tính-năng-chính)
- [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
- [Hướng dẫn cài đặt](#hướng-dẫn-cài-đặt)
- [Hướng dẫn sử dụng](#hướng-dẫn-sử-dụng)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)
- [Phân công thành viên](#phân-công-thành-viên)

---

## 🎯 Giới thiệu hệ thống

**Task Manager** là ứng dụng quản lý công việc được xây dựng theo mô hình Kanban, hỗ trợ nhóm làm việc theo dõi tiến độ dự án theo 4 trạng thái:

| Trạng thái | Mô tả |
|---|---|
| 🟣 **To Do** | Công việc đã tạo, chưa bắt đầu |
| 🟡 **In Progress** | Đang được thực hiện |
| 🔵 **Review** | Đã xong, đang chờ kiểm tra |
| 🟢 **Done** | Hoàn thành và được duyệt |

**Công nghệ sử dụng:**

- **Frontend:** Next.js 14 (App Router), React, Tailwind CSS
- **Backend:** REST API (Node.js / Express hoặc tương đương)
- **Database:** (PostgreSQL / MongoDB – tuỳ cấu hình nhóm)
- **Version control:** Git + GitHub, quy trình feature branch

---

## ✨ Tính năng chính

- ✅ Xem danh sách công việc theo từng trạng thái (Kanban board)
- ✅ Tạo, chỉnh sửa, xoá công việc
- ✅ Kéo-thả để thay đổi trạng thái công việc
- ✅ Lọc công việc theo người thực hiện, ưu tiên, ngày hạn
- ✅ Trang thống kê: số lượng công việc theo trạng thái, tỷ lệ hoàn thành
- ✅ Xem lịch sử cập nhật công việc gần đây
- ✅ Responsive – hoạt động tốt trên cả máy tính và điện thoại

---

## 💻 Yêu cầu hệ thống

| Công cụ | Phiên bản tối thiểu |
|---|---|
| Node.js | 18.x trở lên |
| npm / yarn / pnpm | npm 9+ hoặc yarn 1.22+ |
| Git | 2.x trở lên |

---

## 🚀 Hướng dẫn cài đặt

### 1. Clone repository

```bash
git clone https://github.com/<your-org>/task-manager.git
cd task-manager
```

### 2. Cài đặt dependencies

```bash
npm install
# hoặc
yarn install
```

### 3. Cấu hình biến môi trường

Tạo file `.env.local` ở thư mục gốc dựa trên file mẫu:

```bash
cp .env.example .env.local
```

Điền các giá trị cần thiết vào `.env.local`:

```env
# URL của backend API
NEXT_PUBLIC_API_URL=http://localhost:4000/api

# (Tuỳ chọn) Secret key cho NextAuth hoặc JWT
NEXTAUTH_SECRET=your-secret-key
```

### 4. Khởi động server phát triển

```bash
npm run dev
```

Mở trình duyệt và truy cập: [http://localhost:3000](http://localhost:3000)

### 5. Build cho production

```bash
npm run build
npm run start
```

---

## 📘 Hướng dẫn sử dụng

### Trang Kanban Board (`/`)

- Toàn bộ công việc hiển thị theo 4 cột tương ứng 4 trạng thái.
- Nhấn **"+ Thêm công việc"** để tạo task mới.
- Kéo thẻ task sang cột khác để cập nhật trạng thái.
- Nhấn vào thẻ task để xem chi tiết hoặc chỉnh sửa.

### Trang Thống kê (`/statistics`)

- Hiển thị tổng số công việc và tỷ lệ hoàn thành của dự án.
- Biểu đồ tròn phân bố công việc theo từng trạng thái.
- Bảng danh sách các công việc được cập nhật gần nhất.
- Dữ liệu tự động tải từ API khi vào trang.

### Luồng xử lý công việc điển hình

```
Tạo task (To Do)
    └──► Bắt đầu làm (In Progress)
              └──► Gửi review (Review)
                        └──► Được duyệt (Done)
```

---

## 🗂️ Cấu trúc thư mục

```
task-manager/
├── app/                        # Next.js App Router
│   ├── page.tsx                # Trang chủ – Kanban Board
│   ├── statistics/
│   │   └── page.tsx            # Trang thống kê (Member 4)
│   └── layout.tsx
├── components/
│   ├── board/                  # Kanban Board components (Member 1)
│   ├── tasks/                  # Task form, card (Member 2 & 3)
│   └── statistics/             # Statistics components (Member 4)
│       └── StatisticsPage.jsx
├── lib/
│   └── api.ts                  # Hàm gọi REST API
├── public/
├── .env.example
├── .env.local                  # (không commit)
├── next.config.js
├── package.json
└── README.md
```

---

## 👥 Phân công thành viên

| Thành viên | Nhánh Git | Chức năng phụ trách |
|---|---|---|
| **Thành viên 1** | `feature/kanban-board` | Giao diện Kanban Board chính, kéo-thả trạng thái |
| **Thành viên 2** | `feature/task-crud` | Tạo, chỉnh sửa, xoá công việc (CRUD) |
| **Thành viên 3** | `feature/filter-search` | Lọc & tìm kiếm công việc |
| **Thành viên 4** | `feature/report-and-docs` | Trang thống kê + tài liệu dự án (file này) |

---

## 🤝 Quy trình làm việc với Git

```bash
# Tạo nhánh mới từ main
git checkout -b feature/ten-tinh-nang

# Sau khi làm xong, push lên GitHub
git add .
git commit -m "feat: mô tả ngắn tính năng"
git push origin feature/ten-tinh-nang

# Tạo Pull Request trên GitHub để merge vào main
```

> ⚠️ **Lưu ý:** Không commit trực tiếp vào nhánh `main`. Mọi thay đổi phải qua Pull Request và được ít nhất 1 thành viên khác review.

---

## 📄 Giấy phép

Dự án học thuật – không dùng cho mục đích thương mại.

<<<<<<< HEAD

=======
>>>>>>> 822c68b (docs: update README title and add installation guide)
# Hệ thống Quản lý Công việc Sinh viên

## Giới thiệu
Ứng dụng giúp sinh viên quản lý công việc và theo dõi tiến độ học tập hiệu quả.

## Chức năng chính
- Đăng nhập / Đăng ký tài khoản
- Quản lý hồ sơ người dùng
- Thêm, chỉnh sửa, xóa công việc
- Thống kê tiến độ

## Hướng dẫn cài đặt
1. Clone repository:
   git clone https://github.com/O-chit/KhungBoAptech.git

2. Cài đặt dependencies:
   npm install

3. Chạy ứng dụng:
   npm run dev

## Hướng dẫn sử dụng
- Truy cập http://localhost:5173
- Đăng ký tài khoản mới hoặc đăng nhập
- Bắt đầu quản lý công việc của bạn
>>>>>>> f75ae1d8cbc5f80ea4e2c32df04def9e633eba3f
