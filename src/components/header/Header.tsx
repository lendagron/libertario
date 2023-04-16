import React from "react";
import styles from "./header.module.scss";
import Logo from "../../../public/images/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "phosphor-react";

interface headerProps {
  hasBack: boolean;
}

export function Header({ hasBack }: headerProps) {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.backContainer}>
          <Link href={"/"} style={{ display: hasBack ? "flex" : "none" }}>
            <ArrowLeft size={32} />
            <p>Voltar</p>
          </Link>
        </div>
        <div className={styles.logoContainer}>
          <Link href={"/"}>
            <Image src={Logo} alt='Logo' width={160} height={43} />
          </Link>
        </div>
      </div>
    </header>
  );
}


