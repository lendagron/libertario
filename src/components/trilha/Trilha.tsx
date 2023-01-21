import { Head } from "next/document";
import { useState, useEffect } from "react";
import { api } from "../../services/apiClient";
import styles from "./trilha.module.scss";

interface Trail {
  id: number;
  name: string;
  description: string;
}
interface Props {
  trails: Trail[];
}
export function Trilha({ trails }: Props) {
  return (
    <>
      {/* TODO: Arrumar aqui a parte da url igual a UL anterior */}
      <div className={styles.trilhaContainer}>
        {trails.map((trail) => (
          <div key={trail.id} className={styles.trilha}>
            <h2>{trail.name}</h2>
            <p>{trail.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
