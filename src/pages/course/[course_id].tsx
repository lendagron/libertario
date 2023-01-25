import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CourseRoot() {
  const router = useRouter();

  useEffect(() => {
    const { course_id } = router.query;
    router.replace(`/course/${course_id}/1`);
  }, []);

  return <p>Redirecting...</p>;
}
