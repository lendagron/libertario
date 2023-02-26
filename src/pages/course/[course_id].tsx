import { useEffect } from "react";
import { useRouter } from "next/router";
import { HeaderLogged } from "../../components/headerLogged/HeaderLogged";

export default function CourseRoot() {
  const isPainel = false;
  const router = useRouter();
  const { course_id } = router.query;

  useEffect(() => {
    if (course_id) {
      router.replace(`/course/${course_id}/1`);
    }
  }, [course_id]);

  return (
    <>
      <HeaderLogged isPainel={isPainel} />
      <p>Redirecting...</p>
    </>
  );
}
