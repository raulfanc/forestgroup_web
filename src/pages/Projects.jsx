import React from "react";
import Layout from "../layout/Layout";
import { Background } from "../sections";
import ProjectGallery from "../sections/ProjectGallery";
const Projects = () => {
  return (
    <Layout>
      <section className=" xl:padding-1 wide:padding-r padding-b pt-32">
      {/* <Background /> */}
        <ProjectGallery />
      </section>
    </Layout>
  );
};

export default Projects;
