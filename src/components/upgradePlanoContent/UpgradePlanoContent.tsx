import Link from "next/link";
import React from "react";
import styles from "./upgradePlanoContent.module.scss";

export default function UpgradePlano() {
  return (
    <Link href={"/painel"} className={styles.wrapper}>
      UpgradePlano
    </Link>
  );
}
