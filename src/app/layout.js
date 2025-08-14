import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";


export const metadata = {
  title: "QUOTE GENERATOR || NEXT.JS",
  description: "Generate random quotes using Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-300 text-gray-900 antialiased font-sans dark:bg-gray-900 dark:text-gray-100">
        
          <ThemeProvider>
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
