import React from "react";
import styles from "./footer.module.scss";
import Logo from "../../../public/images/Logo.png";
import Image from "next/image";
import {
  InstagramLogo,
  FacebookLogo,
  YoutubeLogo,
  TelegramLogo,
  TwitterLogo,
} from "phosphor-react";

export function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <a href={"/"}>
          <Image src={Logo} alt='Logo' width={160} height={43} />
        </a>
        <div className={styles.linksContainer}>
          <a>contato@universidadelibertaria.com</a>
          <span> |</span>
          <a>Relatórios de Impacto</a>
          <span> |</span>
          <a>(Não) Política de Direitos Autorais</a>
        </div>
        <div className={styles.iconsContainer}>
          <a href='https://www.instagram.com/libertariauniversidade/'>
            <InstagramLogo size={32} />
          </a>
          <a href='https://www.facebook.com/universidadelibertariaoficial/'>
            <FacebookLogo size={32} />
          </a>
          <a href='https://www.youtube.com/c/UniversidadeLibert%C3%A1ria'>
            <YoutubeLogo size={32} />
          </a>
          <a href='https://t.me/unilibe' rel='noreferrer'>
            <TelegramLogo size={32} />
          </a>
          <a href='https://twitter.com/UniversidadeLi3'>
            <TwitterLogo size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
}
