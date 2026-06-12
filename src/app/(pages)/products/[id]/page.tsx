import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProductDetail } from "@/components/sections/ProductDetail";
import { createClient } from "@supabase/supabase-js";
import { Product } from "@/types";
import { PRODUCTS_DATA } from "@/lib/data/products";

// Server-side Supabase client for data fetching
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

function getServerSupabase() {
  return createClient(supabaseUrl, supabaseAnonKey);
}

// Map database row to Product interface
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapRowToProduct(row: any): Product {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    size: row.size,
    category: row.category,
    description: row.description || "",
    specifications: row.specifications || {},
    priceRange: row.price_range || "",
    colors: row.colors || [],
    images: row.images || [],
    videoUrl: row.video_url,
    isFeatured: row.is_featured || false,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

// Fetch product by ID from Supabase or fallback to local
async function getProduct(id: string): Promise<Product | null> {
  try {
    const supabase = getServerSupabase();
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      // Fallback to local data
      return PRODUCTS_DATA.find((p) => p.id === id) || null;
    }

    return mapRowToProduct(data);
  } catch {
    return PRODUCTS_DATA.find((p) => p.id === id) || null;
  }
}

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Sản phẩm không tìm thấy - MINH TIEN STRING CO., LTD",
    };
  }

  return {
    title: `${product.name} - MINH TIEN STRING CO., LTD`,
    description: product.description,
    keywords: [
      product.name,
      product.category,
      "paracord pro",
      "dây dù",
      "dây đai thun",
    ],
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images.length > 0 ? product.images : undefined,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <MainLayout>
      <ProductDetail product={product} />
    </MainLayout>
  );
}
