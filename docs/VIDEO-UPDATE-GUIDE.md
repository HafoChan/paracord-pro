# Hướng dẫn cập nhật Video

## Các loại Layout Video

Website hiện có 4 loại layout video khác nhau:

### 1. VideoWithContent (Split Layout)
Video và content ngang hàng, phù hợp khi cần giải thích chi tiết.

```tsx
<VideoWithContent
  videoId="YOUR_VIDEO_ID"
  title="Tiêu đề"
  description="Mô tả"
  features={["Feature 1", "Feature 2"]}
  layout="left" // hoặc "right"
  badge="Nhãn"
/>
```

### 2. VideoGrid (Grid Layout)
Hiển thị nhiều video dạng lưới, user chọn video muốn xem.

```tsx
<VideoGrid
  title="Tiêu đề"
  description="Mô tả"
  columns={2} // hoặc 3
  videos={[
    { id: "video_id", title: "Title", description: "Desc" }
  ]}
/>
```

### 3. VideoSection (Single Video)
Video đơn lẻ với nhiều variants.

```tsx
<VideoSection
  videoId="YOUR_VIDEO_ID"
  title="Tiêu đề"
  description="Mô tả"
  variant="default" // default, compact, hero, minimal, inline
  showStats={true}
/>
```

### 4. VideoHeroSection (Hero Layout)
Hero section với video, tạo impact mạnh.

```tsx
<VideoHeroSection
  videoId="YOUR_VIDEO_ID"
  title="Tiêu đề lớn"
  subtitle="Phụ đề"
  ctaText="Xem video"
/>
```

## Cách thay đổi video nhanh

### Bước 1: Lấy Video ID từ YouTube

Từ URL YouTube: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`

Video ID là phần sau `v=`: **dQw4w9WgXcQ**

### Bước 2: Cập nhật trong file videos.ts

Mở file: `src/lib/content/videos.ts`

Tìm video cần thay đổi và cập nhật ID:

```typescript
export const VIDEO_IDS = {
  COMPANY_INTRO: "VIDEO_ID_MỚI_CỦA_BẠN",
  // ... các video khác
}
```

### Bước 3: Cập nhật metadata (tùy chọn)

Nếu muốn đổi tiêu đề/mô tả:

```typescript
export const VIDEO_METADATA: Record<string, VideoData> = {
  [VIDEO_IDS.COMPANY_INTRO]: {
    id: VIDEO_IDS.COMPANY_INTRO,
    title: "Tiêu đề mới",
    description: "Mô tả mới"
  },
  // ...
}
```

### Bước 4: Lưu và kiểm tra

1. Lưu file
2. Truy cập `/video-showcase` để xem tất cả video
3. Kiểm tra video mới hoạt động tốt

## Danh sách Video và Layout hiện tại

### Trang chủ (/)
1. **Video giới thiệu công ty**
   - Layout: VideoWithContent (split left)
   - Video ID: dQw4w9WgXcQ
   - Có features list

2. **Video quy trình sản xuất**
   - Layout: VideoWithContent (split right)
   - Video ID: Qdn0i9PTQQs
   - Có features list

### Trang Products (/products)
1. **Video demo theo category**
   - Layout: VideoWithContent (dynamic split)
   - Video IDs:
     - Paracord: uelHwf8o7_U
     - Elastic Band: kJQP7kiw5Fk
     - Service: YQHsXMglC9A
   - Tự động đổi theo category

### Trang About (/about)
1. **Video câu chuyện công ty**
   - Layout: VideoSection (variant hero)
   - Video ID: CcNJaDuTgQ4

2. **Video nhà máy và case study**
   - Layout: VideoGrid (2 columns)
   - Video IDs:
     - Factory tour: 9bZkp7q19f0
     - Case study: M7lc1UVf-VE

### Trang Contact (/contact)
1. **Video hướng dẫn liên hệ**
   - Layout: VideoSection (variant compact)
   - Video ID: kffacxfA7G4

### Trang Product Detail (/products/[id])
1. **Video hướng dẫn sử dụng**
   - Layout: VideoSection (variant minimal)
   - Video ID: Theo category sản phẩm

## Chọn Layout phù hợp

### Khi nào dùng VideoWithContent?
- Cần giải thích chi tiết về video
- Muốn highlight features/benefits
- Video quan trọng, cần context

### Khi nào dùng VideoGrid?
- Có nhiều video liên quan
- Muốn user tự chọn xem
- Tiết kiệm không gian

### Khi nào dùng VideoSection?
- Video đơn lẻ, không cần context nhiều
- Cần variant đặc biệt (hero, minimal)
- Layout đơn giản

### Khi nào dùng VideoHeroSection?
- Video quan trọng nhất
- Muốn tạo impact mạnh
- Đầu trang hoặc landing page

## Thêm video mới

### Cách 1: Thêm vào trang có sẵn

```tsx
import { VideoSection } from "@/components/ui/VideoSection";

<VideoSection
  videoId="YOUR_VIDEO_ID"
  title="Tiêu đề"
  description="Mô tả"
  variant="default" // hoặc "compact", "hero", "inline"
/>
```

### Cách 2: Tạo component mới

1. Tạo file trong `src/components/sections/`
2. Copy từ component tương tự
3. Thay đổi videoId, title, description
4. Import và sử dụng trong page

## Lưu ý quan trọng

- Video phải là PUBLIC trên YouTube
- Không dùng video có bản quyền
- Kiểm tra video trên mobile
- Đảm bảo video có nội dung phù hợp

## Xem tất cả video

Truy cập: `/video-showcase` để xem danh sách đầy đủ các video đã tích hợp.
