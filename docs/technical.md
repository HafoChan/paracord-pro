# THIẾT KẾ KỸ THUẬT - WEBSITE PARACORD PRO

## 1. KIẾN TRÚC TỔNG THỂ

### 1.1 Stack công nghệ đề xuất

| Thành phần     | Công nghệ                              | Lý do lựa chọn                                                                      |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------------- |
| **Frontend**   | Next.js 14 + TypeScript + Tailwind CSS | • SSR/SSG tốt cho SEO<br>• Performance cao<br>• Dễ maintain và scale                |
| **Backend**    | Supabase (PostgreSQL + Auth + Storage) | • Serverless, auto-scale<br>• Built-in auth và security<br>• Real-time capabilities |
| **CMS**        | Strapi Cloud                           | • Giao diện thân thiện<br>• API-first architecture<br>• Dễ tích hợp với Next.js     |
| **Hosting**    | Vercel (Frontend) + Supabase (Backend) | • Deploy tự động<br>• CDN global<br>• Monitoring tích hợp                           |
| **Monitoring** | Sentry + Vercel Analytics              | • Error tracking real-time<br>• Performance monitoring                              |

### 1.2 Kiến trúc hệ thống

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Next.js App   │◄──►│   Supabase DB   │◄──►│   Strapi CMS    │
│   (Frontend)    │    │   (Backend)     │    │   (Content)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Vercel CDN    │    │  Supabase Edge  │    │   Cloudinary    │
│   (Hosting)     │    │   (Functions)   │    │   (Images)      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 2. CẤU TRÚC DATABASE

### 2.1 Bảng dữ liệu chính

```sql
-- Bảng sản phẩm
products (
  id: uuid PRIMARY KEY,
  name: text NOT NULL,
  category: text NOT NULL, -- 'paracord', 'eband', 'service'
  description: text,
  specifications: jsonb,
  price_range: text,
  images: text[],
  video_url: text,
  is_featured: boolean DEFAULT false,
  created_at: timestamp DEFAULT now(),
  updated_at: timestamp DEFAULT now()
)

-- Bảng danh mục
categories (
  id: uuid PRIMARY KEY,
  name: text NOT NULL,
  slug: text UNIQUE NOT NULL,
  description: text,
  parent_id: uuid REFERENCES categories(id),
  sort_order: integer DEFAULT 0
)

-- Bảng liên hệ
contacts (
  id: uuid PRIMARY KEY,
  name: text NOT NULL,
  email: text,
  phone: text,
  company: text,
  message: text,
  status: text DEFAULT 'pending', -- 'pending', 'contacted', 'closed'
  created_at: timestamp DEFAULT now()
)

-- Bảng cấu hình
settings (
  id: uuid PRIMARY KEY,
  key: text UNIQUE NOT NULL,
  value: jsonb,
  updated_at: timestamp DEFAULT now()
)
```

## 3. CẤU TRÚC FRONTEND

### 3.1 Cấu trúc thư mục

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── (pages)/           # Route groups
│   │   ├── about/         # Trang giới thiệu
│   │   ├── products/      # Trang sản phẩm
│   │   └── contact/       # Trang liên hệ
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Trang chủ
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   └── sections/         # Page sections
├── lib/                  # Utilities & configs
│   ├── supabase.ts       # Supabase client
│   ├── utils.ts          # Helper functions
│   └── constants.ts      # App constants
├── types/                # TypeScript types
└── hooks/                # Custom hooks
```

### 3.2 Components chính

```typescript
// Layout Components
- Header (Navigation, Logo, Contact info)
- Footer (Links, Social media, Contact)
- Hero (Main banner, CTA buttons)

// Product Components
- ProductGrid (Danh sách sản phẩm)
- ProductCard (Thẻ sản phẩm)
- ProductDetail (Chi tiết sản phẩm)
- ProductSearch (Tìm kiếm, filter)

// Interactive Components
- ContactForm (Form liên hệ)
- ChatWidget (Zalo, Messenger)
- MapEmbed (Google Maps)
- SocialLinks (Social media buttons)
```

## 4. TÍCH HỢP BÊN NGOÀI

### 4.1 Chat & Communication

```typescript
// Zalo OA Integration
const zaloConfig = {
  appId: process.env.ZALO_APP_ID,
  redirectUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/zalo-callback`,
};

// Facebook Messenger
const messengerConfig = {
  pageId: process.env.FB_PAGE_ID,
  appId: process.env.FB_APP_ID,
};

// Click-to-call
const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
```

### 4.2 SEO & Analytics

```typescript
// Next.js Metadata
export const metadata: Metadata = {
  title: "Paracord Pro - Sản xuất dây dù, dây đai thun chất lượng cao",
  description:
    "Chuyên sản xuất và gia công dây dù, dây đai thun cho ngành may mặc, balo túi xách, thể thao",
  keywords: ["dây dù", "dây đai thun", "paracord", "eband", "gia công dây"],
  openGraph: {
    title: "Paracord Pro",
    description: "Sản xuất dây dù, dây đai thun chất lượng cao",
    images: ["/og-image.jpg"],
  },
};

// Google Analytics
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
```

## 5. DEPLOYMENT & CI/CD

### 5.1 Environment Variables

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# External Services
NEXT_PUBLIC_ZALO_APP_ID=your_zalo_app_id
NEXT_PUBLIC_FB_PAGE_ID=your_fb_page_id
NEXT_PUBLIC_PHONE_NUMBER=your_phone_number

# Analytics
NEXT_PUBLIC_GA_ID=your_ga_id
```

### 5.2 GitHub Actions Workflow

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 6. TIMELINE TRIỂN KHAI

### 6.1 Phase 1: Setup & Foundation (Tuần 1-2)

- [x] Setup project structure
- [x] Configure Supabase database
- [ ] Setup Strapi CMS
- [x] Create basic layouts và components
- [ ] Setup CI/CD pipeline

### 6.2 Phase 2: Core Features (Tuần 3-4)

- [ ] Implement product listing và detail pages
- [ ] Create search functionality
- [ ] Build contact forms
- [ ] Integrate chat widgets
- [ ] Add Google Maps integration

### 6.3 Phase 3: Content & SEO (Tuần 5-6)

- [ ] Migrate content to CMS
- [ ] Optimize SEO metadata
- [ ] Setup Google Analytics
- [ ] Performance optimization
- [ ] Mobile responsiveness testing

### 6.4 Phase 4: Testing & Launch (Tuần 7-8)

- [ ] Comprehensive testing
- [ ] Security audit
- [ ] Performance testing
- [ ] Content review
- [ ] Go live và monitoring

## 7. BẢO MẬT & PERFORMANCE

### 7.1 Security Measures

- HTTPS enforcement
- CSP (Content Security Policy)
- Rate limiting trên API routes
- Input validation và sanitization
- Regular dependency updates

### 7.2 Performance Optimization

- Image optimization với Next.js Image
- Code splitting và lazy loading
- CDN caching strategy
- Database query optimization
- Bundle size optimization

### 7.3 Monitoring

- Error tracking với Sentry
- Performance monitoring
- Uptime monitoring
- Database performance metrics
- User behavior analytics
