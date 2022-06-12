import { Hero } from "@components/ui/common";
import { CourseList } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { WalletBar } from "@components/ui/web3";

import { getAllCourses } from "@content/fetcher";

import { useNetwork } from "@components/hooks/web3/useNetwork";
import { useAccount } from "@components/hooks/web3/useAccount";

const Marketplace = ({ courses }) => {
  const { account } = useAccount();
  const { network } = useNetwork();
  return (
    <>
      <div className="py-4">
        {network.data}
        <WalletBar address={account.data} network={network.data} />
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
