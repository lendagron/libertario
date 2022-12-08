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
          <a
            href='https://www.instagram.com/libertariauniversidade/'
            /* target='_blank' */
            /* rel='noreferrer' */
          >
            <InstagramLogo size={32} />
          </a>
          <a
            href='https://www.facebook.com/universidadelibertariaoficial/'
            /* target='_blank' */
            /* rel='noreferrer' */
          >
            <FacebookLogo size={32} />
          </a>
          <a
            href='https://www.youtube.com/c/UniversidadeLibert%C3%A1ria'
            /* target='_blank' */
            /* rel='noreferrer' */
          >
            <YoutubeLogo size={32} />
          </a>
          <a href='https://t.me/unilibe' /* target='_blank' */ rel='noreferrer'>
            <TelegramLogo size={32} />
          </a>
          <a
            href='https://twitter.com/UniversidadeLi3'
            /* target='_blank' */
            /* rel='noreferrer' */
          >
            <TwitterLogo size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
}
