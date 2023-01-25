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
  selectedLesson: string | string[];
}

export default function CursoContent({
  course,
  lessons,
  selectedLesson,
}: Props) {
  const [aulas, setAulas] = useState(false);
  const [visaoGeral, setVisaoGeral] = useState(true);
  const [mais, setMais] = useState(false);
  const [selectedLessonOrder, setSelectedLessonOrder] = useState({
    selectedLesson,
  });
  const router = useRouter();

  useEffect(() => {
    const route = `/course/${course.id}/${selectedLessonOrder}`;
    router.push(route, route, { shallow: true });
  }, [selectedLessonOrder]);

  function handleVisaoGeral() {
    setVisaoGeral(true);
    setMais(false);
  }

  function handleMais() {
    setMais(true);
    setVisaoGeral(false);
  }

  function handleSelectLesson(order) {
    setSelectedLessonOrder(order);
  }

  /* const client = new Vimeo(
    "0c121c20f59283b7a73a88f3a1461a39b209c669",
    "FkGZdjb3dCWUHbg0B1CebrER8oFIFK5TQYecVeERqw2tv5/xQCtmA3rS/aFR63Exq/1RxJ2C7+0q+qrwDtwbJXYUtmYx8+y09IY62SVZrcyQUVnVlNzn3iq97D8A1y3X"
  );

  client.request(
    {
      method: "GET",
      path: "/videos",
    },
    function (error, body, statusCode) {
      if (error) {
        console.log(error);
      } else {
        console.log(body);
      }
    }
  );
 */
  return (
    /* TODO: Arrumar aqui a parte da url igual a UL anterior */
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.cursoContainer}>
          <div className={styles.vimeoVideo}>
            Video aqui
            {/*  <iframe
              src={`https://player.vimeo.com/video/${342778288}`}
              allow='autoplay; fullscreen'
              allowFullScreen
            ></iframe> */}
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
                  <a onClick={() => handleSelectLesson(lesson.order)}>
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
