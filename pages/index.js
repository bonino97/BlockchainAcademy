import { Hero } from "@components/ui/common";
import { CourseList } from "@components/ui/course";
import { OrderCard } from "@components/ui/order";
import { BaseLayout } from "@components/ui/layout";
import { getAllCourses } from "@content/fetcher";

const Home = ({ courses }) => {
  return (
    <>
      <Hero />
      <CourseList courses={courses} />
    </>
  );
};

export const getStaticProps = () => {
  const { data } = getAllCourses();
  return {
    props: { courses: data },
  };
};

Home.Layout = BaseLayout;

export default Home;
