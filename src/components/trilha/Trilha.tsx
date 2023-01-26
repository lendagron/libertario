import Link from "next/link";
import { useState } from "react";
import styles from "./trilha.module.scss";

interface Trail {
  id: number;
  name: string;
  description: string;
}

interface Course {
  id: number;
  name: string;
  description: string;
  learning_trail_id: number;
  order: number | null;
}
interface Props {
  trails: Trail[];
  courses: Course[];
}
export function Trilha({ trails, courses }: Props) {
  const [clickedTrail, setClickedTrail] = useState<Trail | null>(null);

  function handleClicked(trail: Trail) {
    setClickedTrail(trail);
  }
  return (
    <div className={styles.wrapper}>
      <h1>
        Temos {trails.length} {trails.length > 1 ? "trilhas" : "trilha"}
      </h1>
      {!clickedTrail && (
        <h2>Selecione uma trilha para ver os cursos disponíveis nela</h2>
      )}
      <div className={styles.trilhaContainer}>
        {trails &&
          trails.map((trail) => (
            <a
              key={trail.id}
              className={styles.trilha}
              onClick={() => handleClicked(trail)}
            >
              <h2>{trail.name}</h2>
              <p>{trail.description}</p>
            </a>
          ))}
      </div>

      {clickedTrail && (
        <div className={styles.coursesContainer}>
          <h3> Cursos da trilha {clickedTrail.name}</h3>
          {clickedTrail &&
            courses
              .filter((course) => course.learning_trail_id === clickedTrail.id)
              .map((course) => (
                <div key={course.id} className={styles.course}>
                  <Link href={`/course/${course.id}/1`}>
                    <strong>{course.name}</strong>
                    <p>{course.description}</p>
                  </Link>
                </div>
              ))}
        </div>
      )}
    </div>
  );
}
