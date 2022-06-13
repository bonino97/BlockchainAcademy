import { Hero } from "@components/ui/common";
import { CourseList } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { WalletBar } from "@components/ui/web3";

import { getAllCourses } from "@content/fetcher";

import { useNetwork, useAccount } from "@components/hooks/web3";

const Marketplace = ({ courses }) => {
  const { account } = useAccount();
  const { network } = useNetwork();
  return (
    <>
      <div className="py-4">
        <WalletBar
          address={account.data}
          network={{
            data: network.data,
            target: network.target,
            isSupported: network.isSupported,
            hasInitialResponse: network.hasInitialResponse,
          }}
        />
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
