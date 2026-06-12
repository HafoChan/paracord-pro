import { PRODUCTS_DATA } from '../src/lib/data/products';
import * as fs from 'fs';
import * as path from 'path';

// Function to escape single quotes in SQL strings
function escapeSqlString(str: string | undefined): string {
  if (!str) return 'NULL';
  return `'${str.replace(/'/g, "''")}'`;
}

// Function to format array values
function formatArray(arr: string[] | undefined): string {
  if (!arr || arr.length === 0) return "'{}'::text[]";
  return `ARRAY[${arr.map(item => escapeSqlString(item)).join(', ')}]::text[]`;
}

// Generate SQL INSERT statements
const insertStatements: string[] = [];

PRODUCTS_DATA.forEach((product) => {
  const values = [
    escapeSqlString(product.id),
    escapeSqlString(product.name),
    escapeSqlString(product.slug),
    escapeSqlString(product.size),
    escapeSqlString(product.category),
    escapeSqlString(product.description),
    `'${JSON.stringify(product.specifications).replace(/'/g, "''")}'::jsonb`,
    escapeSqlString(product.priceRange),
    formatArray(product.colors),
    formatArray(product.images),
    escapeSqlString(product.videoUrl),
    product.isFeatured ? 'true' : 'false',
    `'${new Date(product.createdAt).toISOString()}'::timestamp with time zone`,
    `'${new Date(product.updatedAt).toISOString()}'::timestamp with time zone`
  ];

  const sql = `INSERT INTO products (
    id, name, slug, size, category, description, specifications,
    price_range, colors, images, video_url, is_featured, created_at, updated_at
  ) VALUES (
    ${values.join(', ')}
  );\n`;

  insertStatements.push(sql);
});

// Create migration file
const timestamp = new Date().toISOString().replace(/[:-]/g, '').substring(0, 14);
const migrationName = `${timestamp}_insert_products.sql`;
const migrationPath = path.join(__dirname, '../supabase/migrations', migrationName);

const migrationContent = `-- Insert all products from Excel import
${insertStatements.join('\n')}
`;

fs.writeFileSync(migrationPath, migrationContent, 'utf-8');
console.log(`✓ Created migration: ${migrationName}`);
console.log(`✓ Total products to insert: ${PRODUCTS_DATA.length}`);
console.log(`✓ File size: ${(migrationContent.length / 1024).toFixed(2)} KB`);
