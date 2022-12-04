import React from "react";
import styles from "./header.module.scss";
import Logo from "../../../public/images/Logo.png";
import Image from "next/image";
import { Link } from "phosphor-react";

export function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <a href={"/"}>
          <Image src={Logo} alt='Logo' width={160} height={43} />
        </a>
        {/* <img src={"/public/Logo.png"} alt='' /> */}
        <nav>
          <ul>
            <li>
              <a>Artigos</a>
            </li>
            <li>
              <a>Vídeos</a>
            </li>
            <li>
              <a>Jornal Libertário</a>
            </li>
          </ul>
        </nav>
        <div>
          <button>CLUBE DA LIBERDADE</button>
          <button>LOGIN</button>
        </div>
      </div>
    </header>
  );
}
