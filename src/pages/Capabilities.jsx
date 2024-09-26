import React from "react";
import Layout from "../layout/Layout";
import { Background } from "../sections";
import CapabilitiesDetails from "../sections/CapabilitiesDetails";

const Capabilities = () => {
  return (
    <Layout>
      <section className=" xl:padding-1 wide:padding-r padding-b pt-1">
        <Background />
        <CapabilitiesDetails /> 
      </section>
    </Layout>
  );
};

export default Capabilities;
