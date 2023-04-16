import "../styles/global.scss";
import type { AppProps } from "next/app";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { AuthProvider } from "../context/AuthContext";
import styles from "../styles/app.module.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div className={styles.wrapper}>
        <Component {...pageProps} />
        <Footer />
      </div>
    </AuthProvider>
  );
}
