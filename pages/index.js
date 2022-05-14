import { Hero, Breadcrumbs } from "@components/common";
import { WalletBar, EthRates } from "@components/web3";
import { CourseList } from "@components/course";
import { OrderCard } from "@components/order";
import { BaseLayout } from "@components/layout";

const Home = () => {

  return (
    <>
      <Hero />
      <Breadcrumbs />
      <WalletBar />
      <EthRates />
      <OrderCard />
      <CourseList />
    </>
  );
};

Home.Layout = BaseLayout;

export default Home;
