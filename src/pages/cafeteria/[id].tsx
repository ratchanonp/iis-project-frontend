import InfoCard from "@ui/components/card/InfoCard/InfoCard";
import BackLayout from "@ui/layouts/BackLayout";
import Container from "@ui/layouts/Container";
import { NextPageWithLayout } from "pages/_app";
import { ReactElement } from "react";

type Props = {};

const CafeteriaInfoPage: NextPageWithLayout = (props: Props) => {
  return (
    <div>
      <h1 className="font-semibold font-Kanit text-7xl">วิศวกรรม ศาสตร์</h1>
      <h2 className="font-semibold font-Kanit text-primary text-2xl">
        Engineering Cafeteria
      </h2>
      <InfoCard />
    </div>
  );
};

CafeteriaInfoPage.getLayout = (page: ReactElement) => (
  <BackLayout>
    <Container>{page}</Container>
  </BackLayout>
);

export default CafeteriaInfoPage;
