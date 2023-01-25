import Head from "next/head";
import React from "react";
import CursoContent from "../../components/curso/CursoContent";
import { setupApiClient } from "../../services/api";
import { withSSRAuth } from "../../utils/withSSRAuth";
import { useRouter } from "next/router";

interface Lesson{
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
  trails: Lesson[];
  courses: Course[];
}

export default function Course({ course, lessons }: Props) {
  const router = useRouter();
  const { course_id } = router.query;
  return (
    <div>
      <Head>
        <title>{course_id} aaa</title>
      </Head>
      <CursoContent course={course} lessons={lessons}/>
    </div>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);
  let course, lessons = {};
  const { query } = ctx;
  const { course_id } = query;
  try {
    const response = await apiClient.get(`/api/courses/${course_id}`);
    course = response.data;
    const response2 = await apiClient.get(`/api/courses/${course_id}/lessons`);
    lessons = response2.data;
    console.log(course);
    console.log(lessons)
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      course: course,
      lessons: lessons,
    },
  };
});
