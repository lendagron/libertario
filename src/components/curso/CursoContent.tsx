import { useContext, useState, useEffect, useRef } from 'react';
import CursoMenuContent from './cursoMenuContent/CursoMenuContent';
import styles from './cursoContent.module.scss';
import {
  Container,
  Card,
  Collapse,
  Button,
  Grid,
  Text,
} from '@nextui-org/react';
import { useRouter } from 'next/router';

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

  const [text, setText] = useState(<h5>Aulas do Curso {course.name}</h5>);
  const [menuDesktop, setMenuDesktop] = useState(false);

  function activeMenuDesktop() {
    setMenuDesktop(!menuDesktop);
  }

  function changeText(event) {
    const text = event.target.innerText;
    if (window.innerWidth <= 1111) {
      setText(<h5>{text}</h5>);
    } else {
      setText(<h5>Aulas do Curso {course.name}</h5>);
    }
  }

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
    <Container className={styles.wrapper}>
      <Text
        css={{
          display: 'inline-block',
          fontWeight: '$bold',
          color: '#191919',
          background: '#FFF000',
          padding: '2px 10px',
          borderRadius: '4px',
          '@sm': {
            margin: '5px 0px',
          },
        }}
      >
        Trilha / {course.name}
      </Text>
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

        <Container
          className={styles.menuMobile}
          fluid
          css={{
            padding: '0px',
            display: 'block',
          }}
        >
          <Collapse
            expanded
            divider={false}
            title={text}
            css={{ padding: '0px', marginLeft: '10px' }}
          >
            <Card.Body
              css={{
                padding: '0px',
                '@sm': {
                  height: '65vh',
                },
              }}
            >
              <nav>
                <ul>
                  {lessons.map((lesson) => (
                    <li
                      key={lesson.id}
                      className={
                        activeLesson.id === lesson.id
                          ? `${styles.active} ${styles.activeLesson}`
                          : styles.noBorder
                      }
                    >
                      <a
                        onClick={(event) => {
                          handleSelectLesson(lesson);
                          changeText(event);
                        }}
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
            </Card.Body>
          </Collapse>
        </Container>
        <Container
          className={
            menuDesktop ? `${styles.menuDesktopActive}` : styles.menuDesktop
          }
          css={{
            padding: '0px',
            display: 'block',
          }}
        >
          <Collapse
            divider={false}
            title=" "
            css={{ padding: '0px', marginLeft: '10px' }}
            onClick={activeMenuDesktop}
          >
            <Card.Body
              css={{
                padding: '0px',
                '@sm': {
                  height: '65vh',
                },
              }}
            >
              <nav>
                <ul>
                  {lessons.map((lesson) => (
                    <li
                      key={lesson.id}
                      className={
                        activeLesson.id === lesson.id
                          ? `${styles.active} ${styles.activeLesson}`
                          : styles.noBorder
                      }
                    >
                      <a
                        onClick={(event) => {
                          handleSelectLesson(lesson);
                          changeText(event);
                        }}
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
            </Card.Body>
          </Collapse>
        </Container>
      </div>
    </Container>
  );
}
