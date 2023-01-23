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
  return (
    <div className={styles.wrapper}>
      <h1>
        Temos {trails.length} {trails.length > 1 ? "trilhas" : "trilha"}
      </h1>
      <div className={styles.trilhaContainer}>
        {trails &&
          trails.map((trail) => (
            <div key={trail.id} className={styles.trilha}>
              <h2>
                {trail.name} - {trail.id}
              </h2>
              <p>{trail.description}</p>
              <div className={styles.coursesContainer}>
                {courses &&
                  courses
                    .filter((course) => course.learning_trail_id === trail.id)
                    .map((course) => (
                      <div key={course.id} className={styles.course}>
                        <h3>{course.name}</h3>
                        <p>{course.description}</p>
                      </div>
                    ))}
                {courses &&
                  courses
                    .filter((course) => course.learning_trail_id === trail.id)
                    .map((course) => (
                      <div key={course.id} className={styles.course}>
                        <h3>{course.name}</h3>
                        <p>{course.description}</p>
                      </div>
                    ))}
              </div>
            </div>
          ))}
        {trails &&
          trails.map((trail) => (
            <div key={trail.id} className={styles.trilha}>
              <h2>{trail.name}</h2>
              <p>{trail.description}</p>
              <div className={styles.coursesContainer}>
                {courses &&
                  courses
                    .filter((course) => course.learning_trail_id === trail.id)
                    .map((course) => (
                      <div key={course.id} className={styles.course}>
                        <h3>{course.name}</h3>
                        <p>{course.description}</p>
                      </div>
                    ))}
              </div>
            </div>
          ))}
        {trails &&
          trails.map((trail) => (
            <div key={trail.id} className={styles.trilha}>
              <h2>{trail.name}</h2>
              <p>{trail.description}</p>
              <div className={styles.coursesContainer}>
                {courses &&
                  courses
                    .filter((course) => course.learning_trail_id === trail.id)
                    .map((course) => (
                      <div key={course.id} className={styles.course}>
                        <h3>{course.name}</h3>
                        <p>{course.description}</p>
                      </div>
                    ))}
              </div>
            </div>
          ))}
        {trails &&
          trails.map((trail) => (
            <div key={trail.id} className={styles.trilha}>
              <h2>{trail.name}</h2>
              <p>{trail.description}</p>
              <div className={styles.coursesContainer}>
                {courses &&
                  courses
                    .filter((course) => course.learning_trail_id === trail.id)
                    .map((course) => (
                      <div key={course.id} className={styles.course}>
                        <h3>{course.name}</h3>
                        <p>{course.description}</p>
                      </div>
                    ))}
              </div>
            </div>
          ))}
        {trails &&
          trails.map((trail) => (
            <div key={trail.id} className={styles.trilha}>
              <h2>{trail.name}</h2>
              <p>{trail.description}</p>
              <div className={styles.coursesContainer}>
                {courses &&
                  courses
                    .filter((course) => course.learning_trail_id === trail.id)
                    .map((course) => (
                      <div key={course.id} className={styles.course}>
                        <h3>{course.name}</h3>
                        <p>{course.description}</p>
                      </div>
                    ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
