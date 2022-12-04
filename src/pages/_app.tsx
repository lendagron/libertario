import "../styles/global.scss";
import type { AppProps } from "next/app";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { AuthProvider } from "../context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}
