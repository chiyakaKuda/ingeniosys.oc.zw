import Navbar from "@/components/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-white)] text-[var(--color-text)]">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto w-[95vw] max-w-7xl px-4 pb-28 pt-0 sm:px-6 sm:pb-16 sm:pt-0 lg:px-10">
          {children}
        </div>
      </main>
    </div>
  );
}
