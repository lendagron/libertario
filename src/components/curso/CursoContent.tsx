import { useContext, useState } from "react";
import CursoMenuContent from "./cursoMenuContent/CursoMenuContent";
import styles from "./cursoContent.module.scss";

export default function CursoContent({ course, lessons }: Props) {
  const [aulas, setAulas] = useState(false);
  const [visaoGeral, setVisaoGeral] = useState(true);
  const [mais, setMais] = useState(false);


  function handleVisaoGeral() {
    setVisaoGeral(true);
    setMais(false);
  }

  function handleMais() {
    setMais(true);
    setVisaoGeral(false);
  }

  return (
    /* TODO: Arrumar aqui a parte da url igual a UL anterior */
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.cursoContainer}>
          <h2>Video aqui</h2>
          <nav>
            <ul>
              <li>
                <a onClick={handleVisaoGeral}>Visão Geral</a>
              </li>
              <li>
                <a onClick={handleMais}>Mais</a>
              </li>
            </ul>
          </nav>
          <div>
            {visaoGeral && (
              <CursoMenuContent
                titulo='Sobre este Curso'
                subtitulo={course.name}
                conteudo={course.description}
              />
            )}
            {mais && (
              <CursoMenuContent
                titulo='mais titulo'
                subtitulo='mais subtitulo'
                conteudo='mais   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil esse tempore asperiores labore non. Ea eius odit molestias deserunt harum?   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil esse tempore asperiores labore non. Ea eius odit molestias deserunt harum?'
              />
            )}
          </div>
        </div>
        <aside>
          <h2>Conteúdo do Curso</h2>
          <nav>
            <ul>
              {lessons.map((lesson) => (
                <li key={lesson.id}>
                  <a href=''>{lesson.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
}
