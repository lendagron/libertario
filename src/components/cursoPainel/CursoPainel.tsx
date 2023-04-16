import Link from "next/link";
import styles from "./cursoPainel.module.scss";

interface CursoPainelProps {
  titulo: string;
  subtitulo: string;
  imagem: string;
  botao: string;
}

export function CursoPainel({
  titulo,
  subtitulo,
  imagem,
  botao,
}: CursoPainelProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <h2>{titulo}</h2>
        <p>{subtitulo}</p>
      </div>
      <span>{imagem}</span>
      <Link href={""}>{botao}</Link>
    </div>
  );
}
