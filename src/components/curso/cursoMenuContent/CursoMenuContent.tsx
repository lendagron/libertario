import React from 'react';
import styles from './cursoMenuContent.module.scss';

interface CursoMenuContentProps {
  titulo: string;
  subtitulo: string;
  conteudo: string;
}

export default function CursoMenuContent({
  titulo,
  subtitulo,
  conteudo,
}: CursoMenuContentProps) {
  return (
    <div className={styles.wrapper}>
      <h2>{titulo}</h2>
      <h2>{subtitulo}</h2>
      <p>{conteudo}</p>
    </div>
  );
}
