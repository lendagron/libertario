import Head from "next/head";
import React from "react";
import CursoContent from "../../components/curso/CursoContent";
import { useRouter } from "next/router";

export default function Course() {
  const router = useRouter();
  const { course_slug } = router.query;
  return (
    <div>
      <Head>
        <title>{course_slug} aaa</title>
      </Head>
      <CursoContent slug={course_slug} />
    </div>
  );
}
