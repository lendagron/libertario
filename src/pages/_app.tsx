import "../styles/global.scss";
import type { AppProps } from "next/app";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { AuthProvider } from "../context/AuthContext";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import styles from "../styles/app.module.scss";

const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: 'yellow',
      secondary: 'black',
      link:'black'
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <NextUIProvider theme={theme}>
        <div className={styles.wrapper}>
          <Component {...pageProps} />
          <Footer />
        </div>
      </NextUIProvider>
    </AuthProvider>
  );
}
