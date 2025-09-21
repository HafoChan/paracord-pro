# 🗺️ Hướng dẫn tích hợp Google Maps cho Paracord Pro

## 📋 Tổng quan 2 phương pháp

| Đặc điểm        | Google Maps Embed (Hiện tại) | Google Maps JavaScript API           |
| --------------- | ---------------------------- | ------------------------------------ |
| **Chi phí**     | 🟢 **Hoàn toàn miễn phí**    | 🟡 Miễn phí 28,000 loads/tháng       |
| **API Key**     | ❌ Không cần                 | ✅ Cần API key                       |
| **Tương tác**   | 🟡 Cơ bản (zoom, pan)        | 🟢 Đầy đủ (markers, events, styling) |
| **Tùy chỉnh**   | ❌ Hạn chế                   | 🟢 Hoàn toàn tùy chỉnh               |
| **SEO**         | 🟢 Tốt                       | 🟡 Cần xử lý SSR                     |
| **Performance** | 🟢 Nhanh, lightweight        | 🟡 Nặng hơn, cần loading             |

## ✅ Phương pháp hiện tại: Google Maps Embed

**✨ Ưu điểm:**

- Hoàn toàn miễn phí, không giới hạn
- Không cần đăng ký tài khoản Google Cloud
- Triển khai đơn giản chỉ với iframe
- SEO friendly
- Mobile responsive

**📍 Đang được sử dụng trong:**

```typescript
// src/components/sections/LocationMap.tsx
const embedUrl = \`https://www.google.com/maps/embed?pb=...&q=\${encodeURIComponent(COMPANY_ADDRESS.googleMapsQuery)}\`;
```

## 🚀 Phương pháp nâng cao: Google Maps JavaScript API

### Bước 1: Tạo API Key

1. **Truy cập Google Cloud Console:**

   ```
   https://console.cloud.google.com/
   ```

2. **Tạo Project mới:**

   - Click "Select a project" → "New Project"
   - Đặt tên: "Paracord Pro Maps"
   - Click "Create"

3. **Kích hoạt Maps JavaScript API:**

   - Vào "APIs & Services" → "Library"
   - Tìm "Maps JavaScript API"
   - Click "Enable"

4. **Tạo API Key:**

   - Vào "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy API key được tạo

5. **Bảo mật API Key:**
   ```
   Restrictions → HTTP referrers:
   - https://paracordpro.com/*
   - https://*.paracordpro.com/*
   - http://localhost:3000/* (for development)
   ```

### Bước 2: Cài đặt Environment Variables

```bash
# .env.local
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### Bước 3: Sử dụng Interactive Map

```typescript
// src/app/contact/page.tsx
import { InteractiveMap } from "@/components/sections/InteractiveMap";

export default function ContactPage() {
  return (
    <div>
      {/* Các component khác */}

      {/* Thay thế LocationMap bằng InteractiveMap */}
      <InteractiveMap
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        height="500px"
        zoom={16}
      />
    </div>
  );
}
```

## 💰 Chi phí Google Maps API

### Free Tier (Miễn phí hàng tháng):

- **Map Loads:** 28,000 lần
- **Geocoding:** 40,000 requests
- **Places API:** 17,000 requests

### Ước tính cho Paracord Pro:

```
Giả sử 1000 visitors/tháng:
- Mỗi user xem contact page 1 lần = 1000 map loads
- Còn lại 27,000 free loads → đủ cho ~27,000 visitors/tháng
```

### Chi phí vượt quota:

- $7 USD per 1,000 map loads (sau free tier)

## 🎨 Features của Interactive Map

```typescript
// Có thể tùy chỉnh:
- Custom markers với logo công ty
- Info windows với thông tin liên hệ
- Map styling (colors, hide/show elements)
- Multiple locations (nếu có chi nhánh)
- Directions API integration
- Street View integration
- Search places nearby
```

## 🔧 Troubleshooting

### API Key không hoạt động:

1. Kiểm tra API đã được enable chưa
2. Xem restrictions (referrers) có đúng không
3. Chờ 5-10 phút sau khi tạo key

### Map không load:

1. Kiểm tra console errors
2. Verify API key trong .env.local
3. Check network requests trong DevTools

### Vượt quota:

1. Monitor usage trong Google Cloud Console
2. Set up billing alerts
3. Optimize: lazy load, cache results

## 🎯 Khuyến nghị

**Cho hiện tại (website mới):**

- ✅ Tiếp tục sử dụng Google Maps Embed
- Hoàn toàn miễn phí và đáp ứng nhu cầu

**Khi nào nên upgrade:**

- Traffic > 20,000 visitors/tháng
- Cần custom markers, styling
- Muốn tích hợp directions, places search
- Cần tracking user interactions

## 📞 Liên hệ hỗ trợ

Nếu cần hỗ trợ setup Google Maps API:

- 📧 Email: tech@paracordpro.com
- 📱 Hotline: 0353788878
