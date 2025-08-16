# CẤU TRÚC DỰ ÁN PARACORD PRO

## 📁 Tổng quan cấu trúc

```
paracord-pro/
├── 📁 src/                    # Source code chính
│   ├── 📁 app/               # Next.js App Router
│   │   ├── 📁 (pages)/      # Route groups
│   │   │   ├── about/       # Trang giới thiệu
│   │   │   ├── products/    # Trang sản phẩm
│   │   │   └── contact/     # Trang liên hệ
│   │   ├── 📁 api/          # API routes
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Trang chủ
│   ├── 📁 components/       # Reusable components
│   │   ├── 📁 ui/          # Base UI components
│   │   ├── 📁 layout/      # Layout components
│   │   └── 📁 sections/    # Page sections
│   ├── 📁 lib/             # Utilities & configs
│   │   ├── supabase.ts     # Supabase client
│   │   ├── utils.ts        # Helper functions
│   │   └── constants.ts    # App constants
│   ├── 📁 types/           # TypeScript types
│   └── 📁 hooks/           # Custom hooks
├── 📁 docs/                # Documentation
│   ├── requirement.md      # Yêu cầu dự án
│   ├── technical.md        # Thiết kế kỹ thuật
│   └── project-structure.md # File này
├── 📁 public/              # Static files
├── env.example             # Environment variables template
├── package.json            # Dependencies
└── README.md              # Project documentation
```

## 🎯 Mục đích của từng thư mục

### 📁 `src/` - Source Code

- **app/**: Chứa tất cả pages và API routes theo Next.js 14 App Router
- **components/**: Các component có thể tái sử dụng
  - `ui/`: Components cơ bản (Button, Input, Modal...)
  - `layout/`: Components layout (Header, Footer, Sidebar...)
  - `sections/`: Components cho từng section của trang
- **lib/**: Utilities và configurations
- **types/**: TypeScript type definitions
- **hooks/**: Custom React hooks

### 📁 `docs/` - Documentation

- **requirement.md**: Yêu cầu chi tiết của dự án
- **technical.md**: Thiết kế kỹ thuật và kiến trúc
- **project-structure.md**: Mô tả cấu trúc dự án (file này)

### 📁 `public/` - Static Files

- Images, icons, fonts và các file tĩnh khác

## 🔧 Files cấu hình quan trọng

- **package.json**: Dependencies và scripts
- **tsconfig.json**: TypeScript configuration
- **next.config.ts**: Next.js configuration
- **tailwind.config.js**: Tailwind CSS configuration
- **env.example**: Template cho environment variables

## 📋 Quy ước đặt tên

### Files và Folders

- Sử dụng **kebab-case** cho tên thư mục: `product-detail/`
- Sử dụng **PascalCase** cho component files: `ProductCard.tsx`
- Sử dụng **camelCase** cho utility files: `formatPrice.ts`

### Components

- **Layout Components**: `Header.tsx`, `Footer.tsx`, `Sidebar.tsx`
- **UI Components**: `Button.tsx`, `Input.tsx`, `Modal.tsx`
- **Page Components**: `HomePage.tsx`, `ProductPage.tsx`

### Types

- **Interfaces**: `Product.ts`, `User.ts`, `Order.ts`
- **Enums**: `ProductCategory.ts`, `OrderStatus.ts`

## 🚀 Workflow phát triển

1. **Tạo component mới**: Đặt trong thư mục phù hợp trong `src/components/`
2. **Tạo page mới**: Đặt trong `src/app/` theo cấu trúc routing
3. **Tạo API route**: Đặt trong `src/app/api/`
4. **Cập nhật types**: Thêm vào `src/types/` nếu cần
5. **Cập nhật documentation**: Cập nhật file tương ứng trong `docs/`

## 📝 Ghi chú

- Tất cả components phải có TypeScript types
- Sử dụng Tailwind CSS cho styling
- Tuân thủ ESLint rules
- Commit messages phải rõ ràng và mô tả đúng thay đổi
