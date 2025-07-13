import type { Metadata } from "next";
import "./globals.css";
import ExpenseProvider from "./expenseProvider";
import { ThemeProvider } from "@/components/themeProvider";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo App created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={"md:flex md:items-center md:flex-col sm:flex-none"}>
        <ThemeProvider 
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
            <ExpenseProvider>
              <main className="md:border-2 sm:border-0 md:w-1/3 sm:w-full h-screen flex flex-col justify-between">
                <Header/>
                {children}
              </main>
            </ExpenseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
