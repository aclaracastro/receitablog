import { Geist, Geist_Mono } from "next/font/google"; 
import "./globals.css"; 
import Link from 'next/link'; 
import styles from './Layout.module.css';
import { config } from "@fortawesome/fontawesome-svg-core";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
config.autoAddCss = false

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Receitas Culinárias", 
  description: "Descubra as melhores receitas para você cozinhar em casa.", 
};

export default function RootLayout({ children }) {
  const currentYear = new Date().getFullYear(); 

  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className={styles.header}>
          <nav>
            <ul className={styles.headerNav}>
              <li><Link href="/" className={styles.headerNavLink}>Início</Link></li>
              <li><Link href="/receitas" className={styles.headerNavLink}>Receitas</Link></li>
            </ul>
          </nav>
        </header>


        {children}

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerLinks}>
              <Link href="/sobre">Sobre Nós</Link>
              <Link href="/contato">Contato</Link>
            </div>

            <p className={styles.copyright}>
              &copy; {currentYear} Receitas Culinárias. Todos os direitos reservados.
            </p>

            <div className={styles.socialLinks}>
              <a href="https://facebook.com/seusite" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={faFacebook} style={{fontSize: '1.5em'}} />
              </a>
              <a href="https://instagram.com/seusite" target="_blank" rel="noopener noreferrer" title="Siga-nos no Instagram"> 
               <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '1.5em' }} /> 
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}