import { useContext, useState, useEffect } from "react";
import CursoMenuContent from "./cursoMenuContent/CursoMenuContent";
import styles from "./cursoContent.module.scss";
import { useRouter } from "next/router";
import Vimeo from "vimeo";

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
  learning_trail_id: number;
  order: number | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
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

  useEffect(() => {
    if(activeLesson){
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

  return (
    /* TODO: Arrumar aqui a parte da url igual a UL anterior */
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.cursoContainer}>
          <div className={styles.vimeoVideo}>
            {activeLesson !== undefined ?
              <iframe
                src={`https://player.vimeo.com/video/${activeLesson.vimeo_id}`}
                allow='autoplay; fullscreen'
                allowFullScreen
              ></iframe>
              :
              <p>Vídeo não encontrado...</p>
            }
          </div>
          <div>
            <p>Você está assistindo: {activeLesson ? activeLesson.name : ''}</p>
          </div>
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
                  <a onClick={() => handleSelectLesson(lesson)} className={activeLesson === lesson ? 'active' : ''}>
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
