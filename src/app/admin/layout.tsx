import { AdminAuthProvider } from '@/lib/admin-auth-context';
import AdminLayoutContent from '@/components/admin/AdminLayoutContent';

export const metadata = {
  title: 'Admin - Minh Tiến',
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminAuthProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AdminAuthProvider>
  );
}
