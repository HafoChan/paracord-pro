# Lib Directory Structure

Thư mục `lib` chứa tất cả các utilities, constants, và cấu hình của ứng dụng được tổ chức một cách có hệ thống.

## Cấu trúc thư mục

```
src/lib/
├── content/           # Nội dung văn bản của website
│   ├── about.ts       # Nội dung trang giới thiệu
│   ├── capabilities.ts # Nội dung năng lực & dịch vụ
│   ├── contact.ts     # Nội dung trang liên hệ
│   ├── hero.ts        # Nội dung hero sections
│   ├── products.ts    # Nội dung sản phẩm
│   ├── ui.ts          # Nội dung UI elements
│   └── index.ts       # Export tất cả content
├── data/              # Dữ liệu của ứng dụng
│   └── products.ts    # Dữ liệu sản phẩm
├── assets.ts          # Quản lý hình ảnh và assets
├── constants.ts       # Constants cơ bản của app
├── supabase.ts        # Cấu hình Supabase
├── utils.ts           # Utility functions
└── README.md          # Tài liệu này
```

## Mô tả chi tiết

### 1. Content (src/lib/content/)

Chứa tất cả nội dung văn bản của website được phân chia theo từng phần:

- **about.ts**: Nội dung trang giới thiệu, stats, company story, milestones, core values
- **capabilities.ts**: Nội dung về năng lực sản xuất, dịch vụ gia công, chứng nhận
- **contact.ts**: Nội dung form liên hệ, thông tin liên hệ, success messages
- **hero.ts**: Nội dung hero sections, hero slider, trust indicators
- **products.ts**: Nội dung sản phẩm, categories, product grid UI
- **ui.ts**: Nội dung UI chung như buttons, loading states, error messages

### 2. Data (src/lib/data/)

Chứa dữ liệu thực tế của ứng dụng:

- **products.ts**: Dữ liệu sản phẩm featured, toàn bộ products, categories với helper functions

### 3. Assets (src/lib/assets.ts)

Quản lý tập trung tất cả hình ảnh và assets:

- Sample images, factory images
- Product category images
- Background images, placeholders
- Helper functions để lấy images theo context

### 4. Constants (src/lib/constants.ts)

Constants cơ bản của ứng dụng:

- Company information
- Navigation items
- Social links
- Business hours, response times
- App configuration
- Export tất cả content constants

## Cách sử dụng

### Import content

```typescript
import { HERO_CONTENT, ABOUT_SECTION } from "@/lib/constants";
import { FEATURED_PRODUCTS_DATA } from "@/lib/data/products";
import { SAMPLE_IMAGES } from "@/lib/assets";
```

### Cập nhật nội dung

Để thay đổi nội dung website, chỉ cần cập nhật các file trong thư mục `content/` và `data/` thay vì sửa trực tiếp trong components.

### Quản lý hình ảnh

Tất cả hình ảnh được quản lý tập trung trong `assets.ts` với helper functions để lấy images theo context.

## Lợi ích

1. **Tách biệt nội dung và logic**: Nội dung được tách riêng khỏi components, dễ quản lý và cập nhật
2. **Tái sử dụng**: Constants có thể được sử dụng ở nhiều nơi
3. **Bảo trì dễ dàng**: Thay đổi nội dung không cần sửa code components
4. **Type safety**: Sử dụng TypeScript cho type checking
5. **Tổ chức rõ ràng**: Cấu trúc thư mục logic, dễ tìm và cập nhật

## Best Practices

1. Luôn sử dụng constants thay vì hardcode text trong components
2. Phân chia nội dung theo chức năng/trang để dễ quản lý
3. Sử dụng helper functions cho logic phức tạp
4. Đặt tên constants rõ ràng và có ý nghĩa
5. Export/import đúng cách để tránh circular dependencies
