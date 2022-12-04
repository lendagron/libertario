import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../services/api";
import styles from "./painelContent.module.scss";

export default function PainelContent() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api
      .get("/me")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1>painel</h1>
      <h2>{user?.login}</h2>
      <Link href={"/upgradePlano"}>Upgrade de Plano</Link>
      <h2>Trilha</h2>
      <Link href={"/curso"}>Curso</Link>
    </div>
  );
}
