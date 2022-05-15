import { Hero } from "@components/ui/common";
import { CourseList } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { WalletBar } from "@components/ui/web3";

import { useAccount } from "@components/hooks/web3/useAccount";
import { getAllCourses } from "@content/fetcher";

const Marketplace = ({ courses }) => {
  const { account } = useAccount();
  return (
    <>
      <div className="py-4">
        <WalletBar address={account.data} />
      </div>
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

Marketplace.Layout = BaseLayout;

export default Marketplace;
