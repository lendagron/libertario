import React, { useContext } from "react";
import styles from "./headerLogged.module.scss";
import Logo from "../../../public/images/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, UserCircle, Door } from "phosphor-react";
import { AuthContext } from "../../context/AuthContext";

interface headerLoggedProps {
  isPainel: boolean;
}

export function HeaderLogged({ isPainel }: headerLoggedProps) {
  const { signOut } = useContext(AuthContext);

  function handleLogOut() {
    signOut();
  }

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.backContainer}>
          <Link
            href={"/painel"}
            style={{ display: isPainel ? "none" : "flex" }}
          >
            <ArrowLeft size={32} />
            <p>Painel</p>
          </Link>
        </div>
        <div className={styles.logoContainer}>
          <Link href={""}>
            <Image src={Logo} alt='Logo' width={160} height={43} />
          </Link>
        </div>
        <div className={styles.userContainer}>
          <Link href={"/"}>
            <UserCircle size={32} />
            <p>Perfil</p>
          </Link>
          <Link href={""} onClick={handleLogOut}>
            <Door size={32} />
            <p>Sair</p>
          </Link>
        </div>
      </div>
    </header>
  );
}
