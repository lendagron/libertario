import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./trilha.module.scss";
import logoLibertarianismo from "../../../public/images/logoLibertarianismo.svg";
import { motion } from "framer-motion";

interface Trail {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface Course {
  id: number;
  name: string;
  description: string;
  learning_trails: number[];
  teacher: string;
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
      <h2>Selecione uma trilha para ver os cursos disponíveis nela</h2>
      <div className={styles.trilhaContainer}>
        {trails &&
          trails.map((trail) => (
            <a
              key={trail.id}
              className={styles.trilha}
              onClick={() => handleClicked(trail)}
            >
              <Image src={logoLibertarianismo} alt='logo libertarianismo' />
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
              .filter((course) =>
                course.learning_trails.includes(clickedTrail.id)
              )
              .map((course) => (
                <motion.div
                  key={course.id}
                  className={styles.course}
                  initial={{ x: -500, opacity: 0, scale: 0.5 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <Link href={`/course/${course.id}/1`}>
                    <strong>{course.name}</strong>
                    <p>{course.description}</p>
                  </Link>
                </motion.div>
              ))}
        </div>
      )}
    </div>
  );
}
