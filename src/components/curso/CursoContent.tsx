import { useContext, useState, useEffect, useRef } from 'react';
import CursoMenuContent from './cursoMenuContent/CursoMenuContent';
import styles from './cursoContent.module.scss';
import { useRouter } from 'next/router';
import { ArrowDown, ArrowUp } from 'phosphor-react';

import VimeoPlayer from '../vimeoPlayer/VimeoPlayer';

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
  const [lessonWatchedPercentages, setLessonWatchedPercentages] = useState({});
  const [courseCompletionPercentage, setCourseCompletionPercentage] =
    useState(0);

  useEffect(() => {
    if (lessons.length > 0 && !activeLesson) {
      setActiveLesson(lessons[0]);
    }
  }, [lessons]);

  useEffect(() => {
    if (activeLesson) {
      const route = `/course/${course.id}/${activeLesson.order}`;
      router.push(route, route, { shallow: true });
    }
  }, [activeLesson]);

  useEffect(() => {
    const totalWatchedPercentage = Object.values(
      lessonWatchedPercentages
    ).reduce((sum: number, curr: number) => sum + Number(curr), 0);
    const averageWatchedPercentage =
      (totalWatchedPercentage as number) / lessons.length;
    setCourseCompletionPercentage(averageWatchedPercentage);
  }, [lessonWatchedPercentages]);

  function handleVisaoGeral() {
    setVisaoGeral(true);
    setMais(false);
  }

  function handleSelectLesson(lesson) {
    document
      .querySelector(`.${styles.active}`)
      ?.classList.remove(styles.active);
    setActiveLesson(lesson);
  }

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  const handleWatchedPercentageChange = (lessonId, percentage) => {
    setLessonWatchedPercentages((prev) => ({
      ...prev,
      [lessonId]: percentage,
    }));
  };

  return (
    /* TODO: Arrumar aqui a parte da url igual a UL anterior */
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.cursoContainer}>
          <div className={styles.vimeoVideo}>
            {activeLesson !== undefined && activeLesson !== null ? (
              <>
                <VimeoPlayer
                  videoId={activeLesson.vimeo_id}
                  onWatchedPercentageChange={(percentage) =>
                    handleWatchedPercentageChange(activeLesson.id, percentage)
                  }
                  watchedPercentage={
                    (lessonWatchedPercentages[activeLesson.id] || 0) / 100
                  }
                />
              </>
            ) : (
              <p>Vídeo não encontrado...</p>
            )}
          </div>

          <div>
            Conclusão do vídeo:{' '}
            {lessonWatchedPercentages[activeLesson?.id] ?? 0}%
          </div>
          <div>
            Conclusão do curso: {courseCompletionPercentage?.toFixed(2) ?? 0}%
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
                titulo="Sobre este Curso"
                subtitulo={course.name}
                conteudo={course.description}
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
          <nav style={{ display: showMenu ? 'flex' : 'none' }}>
            <ul>
              {lessons.map((lesson) => (
                <li key={lesson.id}>
                  <a
                    onClick={() => handleSelectLesson(lesson)}
                    className={
                      activeLesson.id === lesson.id
                        ? `${styles.active} ${styles.activeLesson}`
                        : styles.noBorder
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
