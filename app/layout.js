import './globals.css';
import './cta.css';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';

const display = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['500','600','700'] });
const sans = Montserrat({ subsets: ['latin'], variable: '--font-sans', weight: ['400','500','600','700'] });

export const metadata = {
  title: 'San Diego Personal Injury Lawyers | Mova Law Group',
  description: 'Mova Law Group represents people injured in San Diego. Request a free case review today.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
