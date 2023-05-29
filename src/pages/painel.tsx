import React from "react";
import Head from "next/head";
import PainelContent from "../components/painelContent/PainelContent";
import { setupApiClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";
import { Trilha } from "../components/trilha/Trilha";
import Course from "./course/[course_id]";
import { HeaderLogged } from "../components/headerLogged/HeaderLogged";
import Sidebar from "../components/sidebar/Sidebar";
import { Container, Row, Col, Spacer } from "@nextui-org/react";

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
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  teacher: string;
}

type Plan = {
  id: number;
  name: string;
};
type Subscriptions = {
  id: number;
  user_id: number;
  plan_id: number;
  plan: Plan;
};
interface UserMe {
  name: string;
  id: number;
  email: string;
  subscriptions: Subscriptions[];
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
      <Container fluid>
        <Row gap={0}>
          <Col span={3}>
            <Sidebar />
          </Col>
          <Col>
            <HeaderLogged isPainel={true} />
            <PainelContent userMe={userMe} />
            <Trilha trails={trails} courses={courses} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);
  let trails = [];
  let courses = {};
  let userMe = null;
  try {
    const responseTrails = await apiClient.get("/learning_trails");
    trails = responseTrails.data;
    const responseCourses = await apiClient.get("/courses");
    courses = responseCourses.data;
    const responseUserMe = await apiClient.get("/me");
    userMe = responseUserMe.data;
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
