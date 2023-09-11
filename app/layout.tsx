import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Backengine Starter",
  description: "Generated by Backengine",
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="min-h-screen flex flex-col items-center max-w-4xl mx-auto">
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
