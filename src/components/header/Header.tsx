import React from "react";
import styles from "./header.module.scss";
import Logo from "../../../public/images/Logo.png";
import Image from "next/image";

export function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <a href={"/"}>
          <Image src={Logo} alt='Logo' width={160} height={43} />
        </a>
      </div>
    </header>
  );
}
