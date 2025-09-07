# Content Management System

Hệ thống quản lý nội dung tập trung cho website Paracord Pro. Tất cả văn bản, labels, messages và assets được tổ chức trong thư mục này để dễ dàng quản lý và cập nhật.

## Cấu trúc thư mục

### Core Content Files

- **`index.ts`** - Entry point, export tất cả content constants
- **`hero.ts`** - Nội dung cho hero sections và slider
- **`about.ts`** - Nội dung về công ty (company story, milestones, values)
- **`products.ts`** - Nội dung liên quan đến sản phẩm
- **`contact.ts`** - Nội dung liên hệ và thông tin công ty
- **`capabilities.ts`** - Năng lực sản xuất và chứng nhận
- **`team.ts`** - Thông tin đội ngũ và tổ chức
- **`location.ts`** - Thông tin địa điểm và bản đồ
- **`forms.ts`** - Labels và messages cho forms
- **`assets.ts`** - Quản lý đường dẫn hình ảnh và assets
- **`ui.ts`** - UI elements, buttons, error messages

## Cách sử dụng

### Import content

```typescript
import { HERO_CONTENT, ABOUT_SECTION, CONTACT_FORM } from "@/lib/content";
```

### Sử dụng trong components

```typescript
export function MyComponent() {
  return (
    <div>
      <h1>{HERO_CONTENT.title}</h1>
      <p>{ABOUT_SECTION.description}</p>
    </div>
  );
}
```

## Nguyên tắc tổ chức

1. **Nhóm theo chức năng**: Mỗi file chứa nội dung cho một lĩnh vực cụ thể
2. **Naming convention**: Sử dụng UPPER_SNAKE_CASE cho constants
3. **Nested objects**: Tổ chức nội dung theo cấu trúc logic
4. **TypeScript**: Tất cả content được type-safe
5. **Comments**: Mô tả rõ ràng cho từng section

## Ví dụ cấu trúc content

```typescript
export const SECTION_NAME = {
  title: "Tiêu đề section",
  subtitle: "Phụ đề",
  items: [
    {
      name: "Item 1",
      description: "Mô tả item 1",
    },
  ],
  buttons: {
    primary: "Button chính",
    secondary: "Button phụ",
  },
};
```

## Assets Management

Tất cả đường dẫn assets được quản lý trong `assets.ts`:

```typescript
export const COMPANY_IMAGES = {
  hero: "/assets/hero/hero-bg.jpg",
  about: "/assets/about/factory.jpg",
};
```

## Multilingual Support (Future)

Hệ thống được thiết kế để dễ dàng mở rộng đa ngôn ngữ trong tương lai:

```typescript
// Có thể mở rộng thành:
export const CONTENT = {
  vi: {
    /* Vietnamese content */
  },
  en: {
    /* English content */
  },
};
```

## Best Practices

1. **Kiểm tra linting**: Đảm bảo code tuân thủ eslint rules
2. **Consistent formatting**: Sử dụng Prettier cho formatting
3. **Regular updates**: Cập nhật content thông qua PR reviews
4. **Documentation**: Ghi chú rõ ràng cho các thay đổi lớn
5. **Testing**: Test các thay đổi trước khi deploy

---

Được tạo bởi Paracord Pro Development Team
