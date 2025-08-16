import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActionButton } from "../ui/FloatingActionButton";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}

