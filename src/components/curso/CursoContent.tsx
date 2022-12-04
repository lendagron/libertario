import { useState } from "react";
import CursoMenuContent from "./cursoMenuContent/CursoMenuContent";
import styles from "./cursoContent.module.scss";

export default function CursoContent() {
  const [aulas, setAulas] = useState(false);
  const [visaoGeral, setVisaoGeral] = useState(false);
  const [mais, setMais] = useState(false);

  function handleAulas() {
    setAulas(true);
    setVisaoGeral(false);
    setMais(false);
  }

  function handleVisaoGeral() {
    setVisaoGeral(true);
    setAulas(false);
    setMais(false);
  }

  function handleMais() {
    setMais(true);
    setAulas(false);
    setVisaoGeral(false);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.cursoContainer}>
          <h2>Video aqui</h2>
          <nav>
            <ul>
              <li>
                <a onClick={handleAulas}>Aulas</a>
              </li>
              <li>
                <a onClick={handleVisaoGeral}>Visão Geral</a>
              </li>
              <li>
                <a onClick={handleMais}>Mais</a>
              </li>
            </ul>
          </nav>
          <div>
            {aulas && (
              <CursoMenuContent
                titulo='aulas titulo'
                subtitulo='aulas subtitulo'
                conteudo='aulas   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil esse tempore asperiores labore non. Ea eius odit molestias deserunt harum? visaoGeral   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil esse tempore asperiores labore non. Ea eius odit molestias deserunt harum? '
              />
            )}
            {visaoGeral && (
              <CursoMenuContent
                titulo='visaoGeral titulo'
                subtitulo='visaoGeral subtitulo'
                conteudo='visaoGeral   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil esse tempore asperiores labore non. Ea eius odit molestias deserunt harum? visaoGeral   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil esse tempore asperiores labore non. Ea eius odit molestias deserunt harum? '
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
              <li>
                <a href=''>Lorem, ipsum dolor.</a>
              </li>
              <li>
                <a href=''>Lorem, ipsum dolor.</a>
              </li>
              <li>
                <a href=''>Lorem ipsum dolor sit.</a>
              </li>
              <li>
                <a href=''>Lorem, ipsum.</a>
              </li>
              <li>
                <a href=''>Lorem, ipsum.</a>
              </li>
              <li>
                <a href=''>Lorem ipsum dolor sit.</a>
              </li>
              <li>
                <a href=''>Lorem, ipsum.</a>
              </li>
              <li>
                <a href=''>Lorem, ipsum dolor.</a>
              </li>
              <li>
                <a href=''>Lorem ipsum dolor sit.</a>
              </li>
              <li>
                <a href=''>Lorem ipsum dolor sit amet.</a>
              </li>
              <li>
                <a href=''>Lorem, ipsum dolor.</a>
              </li>
              <li>
                <a href=''>Lorem, ipsum.</a>
              </li>
              <li>
                <a href=''>Lorem ipsum dolor sit.</a>
              </li>
              <li>
                <a href=''>Lorem, ipsum dolor.</a>
              </li>
              <li>
                <a href=''>Lorem, ipsum dolor.</a>
              </li>
              <li>
                <a href=''>Lorem, ipsum dolor.</a>
              </li>
              <li>
                <a href=''>Lorem, ipsum dolor.</a>
              </li>
              <li>
                <a href=''>Lorem ipsum dolor sit.</a>
              </li>
              <li>
                <a href=''>Lorem, ipsum.</a>
              </li>
              <li>
                <a href=''>Lorem, ipsum.</a>
              </li>
              <li>
                <a href=''>Lorem ipsum dolor sit.</a>
              </li>
              <li>
                <a href=''>Lorem, ipsum.</a>
              </li>
              <li>
                <a href=''>Lorem, ipsum dolor.</a>
              </li>
              <li>
                <a href=''>Lorem ipsum dolor sit.</a>
              </li>
              <li>
                <a href=''>Lorem ipsum dolor sit amet.</a>
              </li>
              <li>
                <a href=''>Lorem, ipsum dolor.</a>
              </li>
              <li>
                <a href=''>Lorem, ipsum.</a>
              </li>
              <li>
                <a href=''>Lorem ipsum dolor sit.</a>
              </li>
              <li>
                <a href=''>Lorem, ipsum dolor.</a>
              </li>
              <li>
                <a href=''>Lorem, ipsum dolor.</a>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
}
