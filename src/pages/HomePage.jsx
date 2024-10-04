import React from "react";
import { Background, Comments } from "../sections";
import CapabilitiesDetails from "../sections/CapabilitiesDetails";
import Layout from "../layout/Layout";
import Button from "../components/Button";
import { FaPhone } from "react-icons/fa";

const content = (
  <div className="relative h-full text-white grid grid-rows-1 grid-cols-1">
    <div className="flex items-start justify-center p-12 text-5xl row-start-1 col-start-1">
      <h1 className="mt-16 text-center">
        Complex civil specialist, we deliver efficiency and quality to your
        projects.
      </h1>
    </div>

    <div className="absolute bottom-8 right-8">
      <Button label="Contact Us" phoneNumber="0220899308" icon={<FaPhone />} />
    </div>
  </div>
);

const HomePage = () => {
  return (
    <Layout>
      <section className="xl:padding-1 wide:padding-r padding-b pt-1">
        <Background content={content} />
      </section>
      <section>
        <CapabilitiesDetails />
      </section>
      <section className="padding">
        <Comments />
      </section>
    </Layout>
  );
};

export default HomePage;
