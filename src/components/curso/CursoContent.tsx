import { useContext, useState, useEffect } from "react";
import CursoMenuContent from "./cursoMenuContent/CursoMenuContent";
import styles from "./cursoContent.module.scss";
import { useRouter } from "next/router";
import { ArrowDown, ArrowUp } from "phosphor-react";

interface Lesson {
  id: number;
  name: string;
  description: string;
  order: number | null;
  vimeo_id: number | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}
interface Course {
  id: number;
  name: string;
  description: string;
  learning_trails: number[];
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  teacher: string;
}

interface Props {
  lessons: Lesson[];
  course: Course;
  selectedLesson: Lesson;
}

export default function CursoContent({
  course,
  lessons,
  selectedLesson,
}: Props) {
  const router = useRouter();
  const { lesson_order } = router.query;
  const [aulas, setAulas] = useState(false);
  const [visaoGeral, setVisaoGeral] = useState(true);
  const [mais, setMais] = useState(false);
  const [activeLesson, setActiveLesson] = useState(selectedLesson);
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    if (activeLesson) {
      const route = `/course/${course.id}/${activeLesson.order}`;
      router.push(route, route, { shallow: true });
    }
  }, [activeLesson]);

  function handleVisaoGeral() {
    setVisaoGeral(true);
    setMais(false);
  }

  function handleMais() {
    setMais(true);
    setVisaoGeral(false);
  }

  function handleSelectLesson(lesson) {
    setActiveLesson(lesson);
  }

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  return (
    /* TODO: Arrumar aqui a parte da url igual a UL anterior */
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.cursoContainer}>
          <div className={styles.vimeoVideo}>
            {activeLesson !== undefined ? (
              <iframe
                src={`https://player.vimeo.com/video/${activeLesson.vimeo_id}`}
                allow='autoplay; fullscreen'
                allowFullScreen
              ></iframe>
            ) : (
              <p>Vídeo não encontrado...</p>
            )}
          </div>
          <nav>
            <ul>
              <li>
                <a onClick={handleVisaoGeral}>Visão Geral</a>
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
          <div className={styles.mobileAside}>
            <h3>Aulas do Curso {course.name}</h3>
            <a className={styles.arrowDown} onClick={handleShowMenu}>
              {showMenu ? <ArrowUp size={32} /> : <ArrowDown size={32} />}
            </a>
          </div>
          <nav style={{ display: showMenu ? "flex" : "none" }}>
            <ul>
              {lessons.map((lesson) => (
                <li key={lesson.id}>
                  <a
                    onClick={() => handleSelectLesson(lesson)}
                    className={
                      activeLesson === lesson ? styles.active : styles.noBorder
                    }
                  >
                    {lesson.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
}
