'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface AdminUser {
  id: string;
  email: string;
}

interface AdminSession {
  access_token: string;
  refresh_token: string;
  expires_at: number;
}

interface AdminAuthContextType {
  user: AdminUser | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | null>(null);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('admin_session');
    if (stored) {
      try {
        const session: { user: AdminUser; session: AdminSession } = JSON.parse(stored);
        const now = Math.floor(Date.now() / 1000);
        if (session.session.expires_at > now) {
          setUser(session.user);
          setToken(session.session.access_token);
        } else {
          localStorage.removeItem('admin_session');
        }
      } catch {
        localStorage.removeItem('admin_session');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        return { success: false, error: data.error };
      }

      localStorage.setItem('admin_session', JSON.stringify(data));
      setUser(data.user);
      setToken(data.session.access_token);
      return { success: true };
    } catch {
      return { success: false, error: 'Lỗi kết nối' };
    }
  };

  const logout = () => {
    localStorage.removeItem('admin_session');
    setUser(null);
    setToken(null);
  };

  return (
    <AdminAuthContext.Provider value={{ user, token, isLoading, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider');
  }
  return context;
}
