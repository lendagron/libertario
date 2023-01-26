import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CourseRoot() {
  const router = useRouter();
  const { course_id } = router.query;

  useEffect(() => {
    if(course_id){
      router.replace(`/course/${course_id}/1`);
    }
  }, [course_id]);

  return <p>Redirecting...</p>;
}
