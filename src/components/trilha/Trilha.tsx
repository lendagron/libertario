import { Head } from "next/document";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import styles from "./trilha.module.scss";

export function Trilha() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/api/learning_trails");
        setTrails(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      TODO: Arrumar aqui a parte da url igual a UL anterior
      <div className={styles.trilhaContainer}>
        {trails.map((trail) => (
          <div key={trail.id}>
            <h2>{trail.name}</h2>
            <p>{trail.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
