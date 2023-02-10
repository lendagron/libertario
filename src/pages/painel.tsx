import Head from "next/head";
import PainelContent from "../components/painelContent/PainelContent";
import { setupApiClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";
import { Trilha } from "../components/trilha/Trilha";
import Course from "./course/[course_id]";
import { HeaderLogged } from "../components/headerLogged/HeaderLogged";

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
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

interface UserMe {
  name: string;
  id: number;
  email: string;
}

interface Props {
  trails: Trail[];
  courses: Course[];
  userMe: UserMe;
}
export default function Painel({ trails, courses, userMe }: Props) {
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Painel</title>
      </Head>
      <HeaderLogged />
      <PainelContent userMe={userMe} />
      <Trilha trails={trails} courses={courses} />
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);
  let trails = [];
  let courses = {};
  let userMe = null;
  try {
    const responseTrails = await apiClient.get("/api/learning_trails");
    trails = responseTrails.data;
    const responseCourses = await apiClient.get("/api/courses");
    courses = responseCourses.data;
    const responseUserMe = await apiClient.get("/api/me");
    userMe = responseUserMe.data;
    console.log(userMe);
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      trails: trails,
      courses: courses,
      userMe: userMe,
    },
  };
});
