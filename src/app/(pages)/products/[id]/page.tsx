import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProductDetail } from "@/components/sections/ProductDetail";
import { getProductImage } from "@/lib/images";

// Mock product data - in real app this would come from database
const products = [
  {
    id: "1",
    name: "Dây dù bản tròn màu đen",
    category: "paracord",
    description: "Dây dù chất lượng cao, bền chắc, phù hợp cho quần áo và phụ kiện thời trang. Sản phẩm được sản xuất từ chất liệu polyester cao cấp, đảm bảo độ bền và tính thẩm mỹ cao.",
    fullDescription: `
      Dây dù bản tròn màu đen là sản phẩm cao cấp của Paracord Pro, được thiết kế đặc biệt cho các ứng dụng thời trang và công nghiệp. 
      
      **Đặc điểm nổi bật:**
      - Chất liệu polyester cao cấp, bền chắc
      - Màu đen sang trọng, không phai
      - Bề mặt mịn màng, dễ gia công
      - Khả năng chịu lực tốt
      
      **Ứng dụng:**
      - Dây rút áo khoác, quần thể thao
      - Dây tag treo nhãn mác
      - Phụ kiện thời trang
      - Đồ thủ công mỹ nghệ
      
      **Quy trình sản xuất:**
      Sản phẩm được sản xuất trên dây chuyền hiện đại với quy trình kiểm soát chất lượng nghiêm ngặt. Mỗi cuộn dây đều được kiểm tra kỹ lưỡng trước khi đóng gói và giao hàng.
    `,
    specifications: {
      "Đường kính": "4mm",
      "Chiều dài": "100m/cuộn",
      "Chất liệu": "Polyester 100%",
      "Màu sắc": "Đen (#000000)",
      "Khả năng chịu lực": "50kg",
      "Nhiệt độ sử dụng": "-20°C đến +80°C",
      "Độ ẩm khuyến nghị": "< 65%"
    },
    priceRange: "50,000 - 80,000 VNĐ/m",
    colors: ["black"],
    images: getProductImage("paracord_black", "gallery") as string[],
    isFeatured: true,
    relatedProducts: ["2", "6"]
  }
  // Add more products as needed
];

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return {
      title: "Sản phẩm không tìm thấy - Paracord Pro"
    };
  }

  return {
    title: `${product.name} - Paracord Pro`,
    description: product.description,
    keywords: [product.name, product.category, "paracord pro", "dây dù", "dây đai thun"],
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = products.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <MainLayout>
      <ProductDetail product={product} />
    </MainLayout>
  );
}

