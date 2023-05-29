import React from "react";
import styles from "./header.module.scss";
import Logo from "../../../public/images/Logo.png";
import Image from "next/image";
//import Link from "next/link";
import { ArrowLeft } from "phosphor-react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";



interface headerProps {
  hasBack: boolean;
}

export function Header({ hasBack }: headerProps) {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        {hasBack && (
          <div className={styles.backContainer}>
            <Link href={"/"}>
              <ArrowLeft size={32} />
              <p>Voltar</p>
            </Link>
          </div>
        )}

        <div className={styles.logoContainer}>
          <Link href={"/"} style={{ marginRight: hasBack ? "7.8rem" : "0" }}>
            <Image src={Logo} alt='Logo' width={160} height={43} />
          </Link>
        </div>
      </div>
    </header>
  );
}
