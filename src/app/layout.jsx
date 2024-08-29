import MainLayout from '@/components/layout/main-layout';
import UIProvider from '@/context/ui/ui-provider';
import theme from '@/utils/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Elegant E-commerce site',
  description: 'E-commerce site by Muhammad Minhaj'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <UIProvider>
              <MainLayout>{children}</MainLayout>
            </UIProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
