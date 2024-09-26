import React from "react";
import { Hero, PopularProducts } from "../sections";
import Layout from "../layout/Layout";
const HomePage = () => {
  return (
    <Layout>
      <section className=" xl:padding-1 wide:padding-r padding-b pt-1">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
    </Layout>
  );
};

export default HomePage;
