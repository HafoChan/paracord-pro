import { supabase } from '@/lib/supabase';
import { Product, ProductCategoryType } from '@/types';
import { PRODUCTS_DATA } from '@/lib/data/products';

/**
 * Product Service
 * Fetches products from Supabase with in-memory caching, falls back to local data if needed
 */

// Simple in-memory cache to prevent redundant fetches
const cache = new Map<string, { data: Product[]; timestamp: number }>();
const CACHE_TTL = 60_000; // 60 seconds

function getCached(key: string): Product[] | null {
  const entry = cache.get(key);
  if (entry && Date.now() - entry.timestamp < CACHE_TTL) {
    return entry.data;
  }
  cache.delete(key);
  return null;
}

function setCache(key: string, data: Product[]): void {
  cache.set(key, { data, timestamp: Date.now() });
}

// Map database row to Product interface
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapDatabaseRowToProduct(row: any): Product {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    size: row.size,
    category: row.category as ProductCategoryType,
    description: row.description || '',
    specifications: row.specifications || {},
    priceRange: row.price_range || '',
    colors: row.colors || [],
    images: row.images || [],
    videoUrl: row.video_url,
    isFeatured: row.is_featured || false,
    createdAt: row.created_at || new Date().toISOString(),
    updatedAt: row.updated_at || new Date().toISOString(),
  };
}

/**
 * Get all products from Supabase or fallback to local data
 */
export async function getAllProducts(): Promise<Product[]> {
  const cached = getCached('all');
  if (cached) return cached;

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Failed to fetch products from Supabase:', error.message);
      return PRODUCTS_DATA;
    }

    if (!data || data.length === 0) {
      console.warn('No products found in Supabase, using local data');
      return PRODUCTS_DATA;
    }

    const products = data.map(mapDatabaseRowToProduct);
    setCache('all', products);
    return products;
  } catch (error) {
    console.warn('Error fetching products:', error);
    return PRODUCTS_DATA;
  }
}

/**
 * Get products by category
 */
export async function getProductsByCategory(
  category: ProductCategoryType
): Promise<Product[]> {
  const cacheKey = `category:${category}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false });

    if (error) {
      console.warn(`Failed to fetch ${category} products:`, error.message);
      return PRODUCTS_DATA.filter((p) => p.category === category);
    }

    if (!data) return [];
    const products = data.map(mapDatabaseRowToProduct);
    setCache(cacheKey, products);
    return products;
  } catch (error) {
    console.warn('Error fetching products by category:', error);
    return PRODUCTS_DATA.filter((p) => p.category === category);
  }
}

/**
 * Get product by ID
 */
export async function getProductById(id: string): Promise<Product | null> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.warn(`Failed to fetch product ${id}:`, error.message);
      return PRODUCTS_DATA.find((p) => p.id === id) || null;
    }

    if (!data) return null;
    return mapDatabaseRowToProduct(data);
  } catch (error) {
    console.warn('Error fetching product by ID:', error);
    return PRODUCTS_DATA.find((p) => p.id === id) || null;
  }
}

/**
 * Get product by slug
 */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.warn(`Failed to fetch product with slug ${slug}:`, error.message);
      return PRODUCTS_DATA.find((p) => p.slug === slug) || null;
    }

    if (!data) return null;
    return mapDatabaseRowToProduct(data);
  } catch (error) {
    console.warn('Error fetching product by slug:', error);
    return PRODUCTS_DATA.find((p) => p.slug === slug) || null;
  }
}

/**
 * Get featured products
 */
export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_featured', true)
      .limit(6);

    if (error) {
      console.warn('Failed to fetch featured products:', error.message);
      return PRODUCTS_DATA.filter((p) => p.isFeatured).slice(0, 6);
    }

    if (!data) return [];
    return data.map(mapDatabaseRowToProduct);
  } catch (error) {
    console.warn('Error fetching featured products:', error);
    return PRODUCTS_DATA.filter((p) => p.isFeatured).slice(0, 6);
  }
}

/**
 * Search products by name or description
 */
export async function searchProducts(query: string): Promise<Product[]> {
  if (!query || query.length < 2) return [];

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .or(
        `name.ilike.%${query}%,description.ilike.%${query}%`
      )
      .limit(20);

    if (error) {
      console.warn('Failed to search products:', error.message);
      // Fallback to local search
      const lowerQuery = query.toLowerCase();
      return PRODUCTS_DATA.filter(
        (p) =>
          p.name.toLowerCase().includes(lowerQuery) ||
          p.description.toLowerCase().includes(lowerQuery)
      );
    }

    if (!data) return [];
    return data.map(mapDatabaseRowToProduct);
  } catch (error) {
    console.warn('Error searching products:', error);
    const lowerQuery = query.toLowerCase();
    return PRODUCTS_DATA.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery)
    );
  }
}
