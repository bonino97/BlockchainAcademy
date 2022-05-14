import { Hero, Breadcrumbs } from "@components/common";
import { WalletBar, EthRates } from "@components/web3";
import { CourseList } from "@components/course";
import { OrderCard } from "@components/order";
import { BaseLayout } from "@components/layout";
import { getAllCourses } from "@content/fetcher";

const Home = ({ courses }) => {
  return (
    <>
      <Hero />
      {/* <Breadcrumbs />
      <WalletBar />
      <EthRates />
      <OrderCard /> */}
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
