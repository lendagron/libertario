import Head from "next/head";
import React from "react";
import CursoContent from "../../../components/curso/CursoContent";
import { setupApiClient } from "../../../services/api";
import { withSSRAuth } from "../../../utils/withSSRAuth";
import { useRouter } from "next/router";
import { HeaderLogged } from "../../../components/headerLogged/HeaderLogged";

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

export default function Course({ course, lessons, selectedLesson }: Props) {
  const isPainel = false;
  const router = useRouter();
  const { course_id, lesson_order } = router.query;
  return (
    <div>
      <Head>
        <title>{course.name}</title>
      </Head>
      <HeaderLogged isPainel={isPainel} />
      <CursoContent
        course={course}
        lessons={lessons}
        selectedLesson={selectedLesson}
      />
    </div>
  );
}

function getSelectedLesson(lessons, order) {
  const activeLesson = lessons.filter(
    (element) => element.order.toString() === order
  );
  return activeLesson[0] || null;
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);
  let course,
    selectedLesson = {};
  let lessons = [];
  const { query } = ctx;
  const { course_id, lesson_order } = query;
  try {
    const responseCourse = await apiClient.get(`/courses/${course_id}`);
    course = responseCourse.data;
    const responseLessons = await apiClient.get(
      `/courses/${course_id}/lessons`
    );
    lessons = responseLessons.data;
    selectedLesson = getSelectedLesson(lessons, lesson_order);
    //console.log(course);
    //console.log(lessons);
    //console.log(lesson_order);
    //console.log(selectedLesson);
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      course: course,
      lessons: lessons,
      selectedLesson: selectedLesson,
    },
  };
});
