// app/layout.tsx
import './globals.css';
import ReduxProvider from '../lib/ReduxProvider' // ✅

// ✅ make sure this path matches your folder structure

export const metadata = {
  title: 'Cancer Care App',
  description: 'A platform for patients and doctors',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
